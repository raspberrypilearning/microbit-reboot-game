# Reboot Sequence project specification

## Status

Working specification for a Code Club physical-computing project. The learner copy is drafted in `en/step_1.md` to `en/step_13.md`, and `en/solutions/reboot-sequence.ts` records the tested completed logic. One-board physical testing is in progress; photography, a downloadable MakeCode project, multi-board validation, and publication assets remain outstanding.

## Product statement

Learners build four loose contact bands from scrap paper, ordinary tape, and conductive tape. A thumb band connects to `GND`; bands on the index, middle, and ring fingers connect to `P0`, `P1`, and `P2`. Touching a finger band to the thumb band closes one circuit and enters the number `1`, `2`, or `3`.

The BBC micro:bit generates and displays one five-number reboot code. The player repeats that code using the finger contacts. A mistake ends the attempt; entering all five terms correctly completes the reboot.

## Audience and level

- Code Club learners who have already made at least one simple MakeCode project.
- Intermediate block-based programming.
- No prior experience of lists or functions is assumed.
- The physical prototype provides an early success before the list and game-state code is introduced.

## Learning outcomes

Learners will:

- complete and test low-voltage input circuits using `GND` and pins `P0`, `P1`, and `P2`;
- detect new physical switch closures without counting a held contact twice;
- use a function with a parameter to avoid repeated code;
- store an ordered sequence in a list;
- traverse a list and retrieve an item by its position;
- use a Boolean variable to control when input is accepted;
- compare player input with an expected value;
- generate a fixed-length list of random values; and
- implement acknowledgement, failure, and win feedback.

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

1. Press button A to begin.
2. The micro:bit generates five random values from 1 to 3 and displays them once, with a gap between values.
3. Tap the matching finger contacts against the thumb contact in the same order.
4. Every registered touch briefly displays the number detected.
5. A wrong answer produces a low warning honk, displays a cross, and ends the attempt.
6. Five correct answers produce two short beeps and display the completed reboot.
7. Press button A to generate a new five-value code.

## Program state

| Name | Type | Purpose |
|---|---|---|
| `rebootSequence` | list of numbers | Stores the ordered values to display and repeat |
| `playerPosition` | number | Identifies the next list item the player must match |
| `acceptingInput` | Boolean | Prevents touches during playback or feedback from being counted |
| `sequenceLength` | number | Sets how many random terms are generated for each game |
| `gameActive` | Boolean | Allows button A to start a game only when the previous game has ended |
| `signal` | function parameter | Carries one displayed value into `showSignal` |
| `answer` | function parameter | Carries one touched value into `checkAnswer` |

## Functions

### `showSignal(signal)`

Displays one cue, pauses, clears the display, and inserts a short gap. Keeping this behaviour in one function allows the number display to be replaced with symbols without changing the game logic.

### `rememberSwitchStates()`

Records whether each input is currently closed. This prevents a contact held during playback or feedback from being treated as a new answer.

### `showRecognisedAnswer(answer)`

Briefly displays the number detected for every accepted switch closure so the player knows that the input was registered.

### `startGame()`

Stops accepting input, replaces the old list with five random values from 1 to 3, displays the complete code once, resets `playerPosition`, records the current switch states, and then enables input.

### `checkAnswer(answer)`

Ignores input unless `acceptingInput` is true. It locks input while checking, displays the number recognised, compares `answer` with the list item at `playerPosition`, and then follows one of three paths:

- wrong answer: play the warning honk and end the attempt;
- correct partial answer: advance and accept the next input;
- fifth correct answer: play two beeps and show the reboot-complete sequence.

### `playErrorSound()` and `playCorrectSound()`

Provide clearly different audio feedback: one low warning honk for an error and two short higher beeps for a completed reboot.

## Step architecture

| Step | Outcome | Acceptance test |
|---:|---|---|
| 1 | Understand the finished project and collect materials | Learner can identify the four contacts and explain the game loop |
| 2 | Create and transfer the start prompt, then connect `GND` and `P0` | `A` appears and both bare leads remain securely connected |
| 3 | Code and test the first digital switch | Each separate `P0`-to-`GND` tap displays `1` once; a hold does not repeat |
| 4 | Connect, code, and test `P1` and `P2` | The three bare signal leads reliably enter `1`, `2`, and `3` |
| 5 | Create a display function and play a fixed list | Button A displays `1`, `3`, `2` with visible gaps |
| 6 | Compare bare-lead answers with successive list items | `1`, `3`, `2` completes the test code; a different value fails |
| 7 | Lock input and preserve switch-edge state | Playback contacts are ignored and held contacts count once |
| 8 | Generate and display a five-value random code | Every new game contains exactly five values from 1 to 3 |
| 9 | Acknowledge every accepted contact | Each touch briefly displays the number read, then immediately restores the target |
| 10 | Add game locking, sounds, failure, and success | A cannot overlap games; failure honks and five correct inputs beep twice |
| 11 | Replace numbers with an optional three-symbol code | The complete game still works with learner-designed symbols |
| 12 | Construct four loose contacts and secure the micro:bit | All fastenings are removable, comfortable, and leave controls accessible |
| 13 | Connect and test the completed wearable controller | Finger-to-thumb taps control several complete game attempts reliably |

## Step-size rule

Every learner-facing step contains no more than two `[!TASK]` callouts. Each step is a meaningful milestone rather than a single tiny edit. A callout may contain a small cluster of inseparable changes, such as wiring and configuring equivalent pins. Each step ends with an explicit test of the state just created.

## Required assets before publication

- `en/images/banner.png`: finished improvised controller and illuminated micro:bit
- Finished-project photograph showing all four bands and the wiring
- Materials photograph
- Close photograph of a folded paper contact band and clip tab
- Photograph showing how the chosen band or strap holds the micro:bit
- Wiring photograph or diagram labelled `P0`, `P1`, `P2`, and `GND`
- Short animation showing one finger tap completing a circuit
- Short animation showing a complete five-term code
- MakeCode screenshots only where the rendered blocks are insufficient
- Downloadable MakeCode project or HEX file in `en/solutions/`; the TypeScript reference is already present

All photographs must show crocodile clips attached to external tabs rather than skin. The final hero image should preserve the hacked-together character of the build rather than presenting a fabricated glove or polished enclosure.

The current `en/images/banner.png` is a placeholder copied from the repository template and must be replaced before publication.

## Validation required before publication

- Run the full build on at least two BBC micro:bit V2 boards.
- Test all three contacts for at least 30 taps each, recording missed or duplicate inputs.
- Confirm that touches made during sequence playback do not enter answers.
- Confirm that every new game generates exactly five values from 1 to 3.
- Confirm that every accepted touch displays the number detected exactly once.
- Confirm that button A restarts cleanly after both failure and success.
- Confirm that button A is ignored while a game is active, including during sequence playback.
- Confirm that failure produces one warning honk, success produces two short beeps, and no microphone blocks are present.
- Confirm that the wrist fastening remains secure and comfortable throughout a complete five-term game.
- Confirm that the game can be completed while powered by the specified battery pack.
- Check every Markdown task count, code fence, local image link, step title, and metadata entry.

## Out of scope

- Microphone use
- An edge-connector breakout
- Five independent input pins
- A fabricated glove or sewn wearable
- Wireless multiplayer
- Persistent high scores
- Direct attachment of adhesive or crocodile clips to skin
