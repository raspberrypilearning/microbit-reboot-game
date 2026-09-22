# Reboot Sequence project specification

## Status

Working specification for a Code Club physical-computing project. The learner copy is drafted in `en/step_1.md` to `en/step_14.md`, and `en/solutions/reboot-sequence.ts` records the tested completed logic. One-board physical testing is in progress; photography, a downloadable MakeCode project, multi-board validation, and publication assets remain outstanding.

## Product statement

Learners build four loose finger contacts by wrapping kitchen foil around the thumb, index, middle, and ring fingers. The thumb contact connects to `GND`; the index, middle, and ring finger contacts connect to `P0`, `P1`, and `P2`. Touching a finger contact to the thumb contact closes one circuit and enters the number `1`, `2`, or `3`.

The BBC micro:bit generates and displays one five-number reboot code. The player repeats that code using the finger contacts. A mistake ends the attempt; entering all five terms correctly completes the reboot.

## Audience and level

- Code Club learners who have already made at least one simple MakeCode project.
- Intermediate block-based programming.
- No prior experience of lists or functions is assumed.
- The physical prototype provides an early success before the list and game-state code is introduced.

## Learning outcomes

Learners will:

- complete and test low-voltage input circuits using `GND` and pins `P0`, `P1`, and `P2`;
- respond to a physical switch closure with an event block, so a held contact counts once;
- use a function with a parameter to avoid repeated code, and call it from a loop;
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
- Kitchen foil
- Thin card, such as a cereal box or a piece of cardboard
- Three or four elastic bands or hair bands
- Ordinary masking tape or sticky tape
- Scissors
- Optional paper clips or other conductive scrap for experimentation

The project never uses the `3V` ring. Learners connect only `P0`, `P1`, `P2`, and `GND`.

## Physical design

The complete game is coded and tested first by touching the free `P0`, `P1`, or `P2` crocodile jaw to the free `GND` jaw. The foil contacts and wrist fastening are made only after the program works, so the learner's hands remain free while using the computer.

Each contact is made by wrapping kitchen foil loosely around a finger, leaving enough foil near the base of the finger for a crocodile clip to grip. Lead colour, not a written label, identifies which finger carries which signal.

The thumb contact is the common ground. The index, middle, and ring finger contacts carry the three input signals. A card backing and elastic bands hold the micro:bit and its battery pack on the wrist, with the display visible and the edge connector accessible. The learner taps and releases one numbered finger against the thumb for each term in the sequence.

### Wiring map

| Contact | micro:bit ring | Game value |
|---|---|---:|
| Thumb | `GND` | Common contact |
| Index finger | `P0` | 1 |
| Middle finger | `P1` | 2 |
| Ring finger | `P2` | 3 |

## Safety and robustness

- Foil contacts and the wrist fastening must be loose enough to remove immediately and must not restrict circulation.
- Clips must not overlap neighbouring micro:bit rings.
- The wrist fastening must hold the micro:bit securely without restricting circulation; it is not wrapped over the display, buttons, or edge connector.
- Learners must never connect `3V` directly to `GND`.
- Program over USB, then use the battery pack for play so the controller is not tethered to a computer.
- Each input is a tap and release, not a held contact.
- Connect, code, and test all three bare crocodile-lead circuits before constructing or wearing any foil contacts.

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
| 2 | Create and transfer the start prompt, then connect all four leads | `A` appears and all four bare leads remain securely connected |
| 3 | Prove the hardware with a ready-made wire tester | Each jaw touched to `GND` shows its own number; an open circuit shows a dash |
| 4 | Respond to the first switch with `on pin P0 pressed` | Each separate `P0`-to-`GND` tap displays `1` once; a hold does not repeat |
| 5 | Add `on pin pressed` for `P1` and `P2` | The three bare signal leads reliably enter `1`, `2`, and `3` |
| 6 | Create a display function and play a fixed list | Button A displays `1`, `3`, `2` with visible gaps |
| 7 | Compare bare-lead answers with successive list items | `1`, `3`, `2` completes the test code; a different value fails |
| 8 | Gate input with a Boolean while the code plays | Contacts touched during playback are ignored |
| 9 | Generate and display a five-value random code with `repeat` | Every new game contains exactly five values from 1 to 3 |
| 10 | Acknowledge every accepted contact | Each touch briefly displays the number read, then immediately restores the target |
| 11 | Add game locking, tones, failure, and success | A cannot overlap games; failure plays one low tone and five correct inputs play two |
| 12 | Replace numbers with an optional three-symbol code | The complete game still works with learner-designed symbols |
| 13 | Construct four loose contacts and secure the micro:bit | All fastenings are removable, comfortable, and leave controls accessible |
| 14 | Connect and test the completed wearable controller | Finger-to-thumb taps control several complete game attempts reliably |

## Input design

Switch closures are detected with `input.onPinPressed` (`on pin P0 pressed`), not by polling
`digitalReadPin` in a `forever` loop. The event block does the edge detection and debounce that
the earlier draft did by hand, which removed three remembered-state Boolean variables, a
`rememberSwitchStates` function, three `setPull` calls, a `forever` loop and four loop-local
variables. Step 4 is now a single block. The only remaining input machinery is the
`acceptingInput` Boolean, which exists solely to ignore taps made while the code is playing back.

Step 3's wire tester still polls `digitalReadPin` with pull-ups, because a diagnostic has to show
the live state of each pin, including "open", which an event cannot report. Step 4 has a tip
explaining that difference.

**Not yet verified on hardware:** that pin-press detection fires reliably through the foil
contacts. The wiring is a direct short to `GND`, so it should, but this must be tested on a
board before publication.

## Block rendering

Every block in the project comes from the standard micro:bit toolbox. There are no extensions and
no custom blocks. Three of the categories used sit behind **Advanced** in the editor: Functions,
Arrays, and Pins. Pins appears only in step 3's ready-made wire tester, which learners download
rather than build.

MakeCode's renderer falls back to a grey box of literal JavaScript whenever a `blocks` fence
references something it does not declare. A call to a project function renders as
`call showSignal (signal)` only if that function is defined in the same fence, and
`rebootSequence.length` renders as `length of array rebootSequence` only if the array is declared
in the same fence. An earlier draft had ten of nineteen fences rendering at least one grey block.

New and edited blocks are marked with a trailing `// @highlight` comment, which MakeCode renders
as a yellow outline around that block. A `+` at the start of a line does **not** work: the
renderer parses it as part of the previous expression and the block silently disappears from the
image.

Highlights mark the lines a task adds or changes, computed against the last fence that showed the
same function or handler. Fences whose every line is new carry no highlights, because an outline
around everything says nothing. Step 3's wire tester carries none either, since learners download
it rather than build it. Highlights are never placed inside a `showLeds` template literal, where a
comment would become part of the LED pattern.

Two rules keep this from coming back:

1. Every fence declares each project function it calls and each array it reads.
2. The project keeps only two functions, `showSignal` and `checkAnswer`. Functions called from
   exactly one place were folded into their call site, because each one added a fence that either
   rendered a grey block or had to repeat the definition.

Verified by rendering all seventeen fences through MakeCode's own renderer; none produces a grey
block.

## Step-size rule

Every learner-facing step contains no more than two `[!TASK]` callouts. Each step is a meaningful milestone rather than a single tiny edit. A callout may contain a small cluster of inseparable changes, such as wiring and configuring equivalent pins. Each step ends with an explicit test of the state just created.

## Required assets before publication

- `en/images/banner.png`: finished improvised controller and illuminated micro:bit
- Finished-project photograph showing all four contacts and the wiring (`en/images/finished-controller.jpg`, step 13)
- Materials photograph (`en/images/materials.jpg`, step 1)
- Close photograph of a single foil finger contact (`en/images/finger-band-single.jpg`, step 12) and of all four (`en/images/finger-bands-all.jpg`, step 12)
- Photographs showing how the card backing and elastic bands hold the micro:bit (`en/images/microbit-on-wrist.jpg`) and the battery pack (`en/images/battery-pack-mounted.jpg`), step 12
- Wiring photograph (`en/images/leads-connected.jpg`, step 4); pin labels `P0`, `P1`, `P2`, and `GND` are not yet annotated on the photograph
- Short animation showing a complete five-term code (`en/images/five-signal-code.gif`, step 13), cut from 3.2s to 9.0s of `PXL_20260921_122235907`
- "Micro:bit Reboot Game" YouTube Short (`g3qdMucsHjQ`), step 1. Vertical 9:16, embedded in a portrait box (`max-width: 340px`, `padding-top: 177.78%`) rather than the house 16:9 box, which would letterbox it.
- `en/images/microbit-game.gif` (step 14), a complete game. Same footage as the Short above, so the two are redundant if a single asset is preferred.
- `en/images/wires-test.gif` (step 14), each contact tapped in turn. Replaces the "Micro:bit Simon Says - Wire test" Short (`jbZNebFAngA`), which is the same footage; that Short's title also still carries the old working name.
- Both GIFs were re-encoded from the 15-16 MB originals to 200px wide, 32 colours, 5fps: 1.2 MB and 2.2 MB.
- Step 3's wire tester has no animation. Both GIFs show the finished worn controller, which does not exist at that point in the project.
- MakeCode screenshots only where the rendered blocks are insufficient
- Downloadable MakeCode project or HEX file in `en/solutions/`; the TypeScript reference is already present

The final hero image should preserve the hacked-together character of the build rather than presenting a fabricated glove or polished enclosure.

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
