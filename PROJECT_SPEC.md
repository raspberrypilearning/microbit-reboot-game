# Reboot Sequence project specification

## Status

Working specification for a Code Club physical-computing project. The learner copy is drafted in `en/step_1.md` to `en/step_21.md`, and `en/solutions/reboot-sequence.ts` records the intended completed logic. Photography, a downloadable MakeCode project, physical-hardware testing, and publication assets remain outstanding.

## Product statement

Learners build four loose contact bands from scrap paper, ordinary tape, and conductive tape. A thumb band connects to `GND`; bands on the index, middle, and ring fingers connect to `P0`, `P1`, and `P2`. Touching a finger band to the thumb band closes one circuit and enters the number `1`, `2`, or `3`.

The BBC micro:bit displays a sequence of numbers. The player repeats the sequence using the finger contacts. Each successful round adds one random number. A mistake ends the attempt; completing a five-term sequence completes the reboot.

## Audience and level

- Code Club learners who have already made at least one simple MakeCode project.
- Intermediate block-based programming.
- No prior experience of lists or functions is assumed.
- The physical prototype provides an early success before the list and game-state code is introduced.

## Learning outcomes

Learners will:

- complete and test low-voltage input circuits using `GND` and pins `P0`, `P1`, and `P2`;
- respond to physical inputs with event handlers;
- use a function with a parameter to avoid repeated code;
- store an ordered sequence in a list;
- traverse a list and retrieve an item by its position;
- use a Boolean variable to control when input is accepted;
- compare player input with an expected value;
- extend a persistent sequence with random values; and
- implement success, failure, progression, and win conditions.

## Required materials

- One BBC micro:bit V2
- USB data cable
- Battery pack and two AAA batteries
- Four crocodile or alligator clip leads
- A band or strap for holding the micro:bit on your wrist
- Conductive tape
- Scrap paper or thin card
- Ordinary masking tape or sticky tape
- Scissors
- Optional aluminium foil, paper clips, or other conductive scrap for experimentation

The project never uses the `3V` ring. Learners connect only `P0`, `P1`, `P2`, and `GND`.

## Physical design

The complete game is coded and tested first by touching the free `P0`, `P1`, or `P2` crocodile jaw to the free `GND` jaw. The paper contacts and wrist fastening are made only after the program works, so the learner's hands remain free while using the computer.

Each band is made by wrapping paper loosely around a finger and fastening the paper to itself. Conductive tape is added to the outside, with a flat tab left for the crocodile clip. The clip grips the tab rather than the learner's skin.

The thumb band is the common ground contact. The index, middle, and ring finger contacts carry the three input signals. A simple band or strap holds the micro:bit securely on the wrist with its display visible and its edge connector accessible. The learner taps and releases one numbered finger against the thumb for each term in the sequence.

### Wiring map

| Contact | micro:bit ring | Game value |
|---|---|---:|
| Thumb | `GND` | Common contact |
| Index finger | `P0` | 1 |
| Middle finger | `P1` | 2 |
| Ring finger | `P2` | 3 |

## Safety and robustness

- Paper bands must be loose enough to remove immediately and must not restrict circulation.
- Conductive adhesive and crocodile clip jaws remain off the skin.
- Clips must not overlap neighbouring micro:bit rings.
- The wrist fastening must hold the micro:bit securely without restricting circulation; it is not wrapped over the display, buttons, or edge connector.
- Learners must never connect `3V` directly to `GND`.
- Program over USB, then use the battery pack for play so the controller is not tethered to a computer.
- Each input is a tap and release, not a held contact.
- Connect, code, and test all three bare crocodile-lead circuits before constructing or wearing any paper bands.

## Game rules

1. Press button A to begin or restart.
2. The display shows one number, then clears.
3. Tap the matching finger contact against the thumb contact.
4. After a correct round, the same sequence is shown again with one new random term at the end.
5. A wrong answer displays a cross and the number of completed rounds.
6. Successfully repeat a five-term sequence to display the completed reboot.

The order is persistent within a game: a new random value is appended; the previous values are not regenerated.

## Program state

| Name | Type | Purpose |
|---|---|---|
| `rebootSequence` | list of numbers | Stores the ordered values to display and repeat |
| `playerPosition` | number | Identifies the next list item the player must match |
| `acceptingInput` | Boolean | Prevents touches during playback or feedback from being counted |
| `targetLength` | number | Sets the number of terms required to complete the reboot |
| `gameActive` | Boolean | Allows button A to start a game only when the previous game has ended |
| `signal` | function parameter | Carries one displayed value into `showSignal` |
| `answer` | function parameter | Carries one touched value into `checkAnswer` |

## Functions

### `showSignal(signal)`

Displays one cue, pauses, clears the display, and inserts a short gap. Keeping this behaviour in one function allows the number display to be replaced with symbols without changing the game logic.

### `startRound()`

Stops accepting input, appends one random value from 1 to 3, displays the complete stored sequence, resets `playerPosition`, and then enables input.

### `checkAnswer(answer)`

Ignores input unless `acceptingInput` is true. It locks input while checking, compares `answer` with the list item at `playerPosition`, and then follows one of four paths:

- wrong answer: end the attempt;
- correct partial answer: advance and accept the next input;
- completed round below `targetLength`: show success and start another round;
- completed round at `targetLength`: show the reboot-complete sequence.

## Step architecture

| Step | Outcome | Acceptance test |
|---:|---|---|
| 1 | Understand the finished project and collect materials | Learner can identify the four contacts and explain the game loop |
| 2 | Create and transfer a MakeCode program | The start prompt `A` appears on the physical micro:bit |
| 3 | Connect bare leads to `GND` and `P0` | Both clips grip the correct rings and their free jaws remain separate |
| 4 | Code and test the first bare-lead circuit | Touching the free `P0` and `GND` jaws displays `1` once |
| 5 | Connect bare leads to `P1` and `P2` | Four leads reach the correct rings without touching neighbours |
| 6 | Code and test `P0`, `P1`, and `P2` | Touching each signal jaw to the `GND` jaw shows `1`, `2`, or `3` |
| 7 | Centralise signal display in a parameterised function | All three bare inputs still show the correct number, then clear |
| 8 | Create and inspect a fixed list | Button A displays the list length `3` |
| 9 | Traverse the fixed list | Button A displays `1`, `3`, `2` with visible gaps |
| 10 | Compare a bare-lead answer with the first list item | The `P0` lead is accepted first; `P1` or `P2` is rejected |
| 11 | Advance through expected list positions | Entering `1`, `3`, `2` produces three correct-answer indicators |
| 12 | Detect completion of the fixed round | The final correct input produces a distinct round-complete tick |
| 13 | Lock input during playback, checking, and failure | Contacts made during playback or feedback are ignored |
| 14 | Generate a one-term random sequence | Each restart contains exactly one value from 1 to 3 |
| 15 | Append a term after each completed round | Successive rounds have lengths 1, 2, 3, and so on, preserving earlier values |
| 16 | Provide a complete failure and restart state | A wrong input shows a cross, score, and restart prompt; button A is ignored during an active game |
| 17 | Provide a five-term win state | Repeating five terms displays `ON` and a happy face |
| 18 | Replace numbers with a three-symbol code | The game rules still work with three distinct learner-designed symbols |
| 19 | Construct four loose paper contact bands | Bands fit safely; conductive patches and clip tabs are secure |
| 20 | Secure the micro:bit on the wrist | The display and controls remain visible; the board does not slide |
| 21 | Attach and test the finger controller | Finger-to-thumb taps control the already completed game |

## Step-size rule

Every learner-facing step contains no more than two `[!TASK]` callouts. A callout may contain a small cluster of inseparable edits, such as connecting both ends of one lead or updating the three equivalent pin events. Each step ends with an explicit test of the state just created.

## Required assets before publication

- `en/images/banner.png`: finished improvised controller and illuminated micro:bit
- Finished-project photograph showing all four bands and the wiring
- Materials photograph
- Close photograph of a folded paper contact band and clip tab
- Photograph showing how the chosen band or strap holds the micro:bit
- Wiring photograph or diagram labelled `P0`, `P1`, `P2`, and `GND`
- Short animation showing one finger tap completing a circuit
- Short animation showing a three-term round
- MakeCode screenshots only where the rendered blocks are insufficient
- Downloadable MakeCode project or HEX file in `en/solutions/`; the TypeScript reference is already present

All photographs must show crocodile clips attached to external tabs rather than skin. The final hero image should preserve the hacked-together character of the build rather than presenting a fabricated glove or polished enclosure.

The current `en/images/banner.png` is a placeholder copied from the repository template and must be replaced before publication.

## Validation required before publication

- Run the full build on at least two BBC micro:bit V2 boards.
- Test all three contacts for at least 30 taps each, recording missed or duplicate inputs.
- Confirm that touches made during sequence playback do not enter answers.
- Confirm that earlier terms remain unchanged when a new term is appended.
- Confirm that the failure score is `sequence length - 1`.
- Confirm that button A restarts cleanly after both failure and success.
- Confirm that button A is ignored while a game is active, including during sequence playback.
- Confirm that no sound or microphone blocks are present.
- Confirm that the wrist fastening remains secure and comfortable throughout a complete five-term game.
- Confirm that the game can be completed while powered by the specified battery pack.
- Check every Markdown task count, code fence, local image link, step title, and metadata entry.

## Out of scope

- Speaker or microphone use
- An edge-connector breakout
- Five independent input pins
- A fabricated glove or sewn wearable
- Wireless multiplayer
- Persistent high scores
- Direct attachment of adhesive or crocodile clips to skin
