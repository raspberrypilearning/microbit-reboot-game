# Reboot Sequence project specification

## Status

Working specification for a Code Club physical-computing project. The learner copy is in `en/step_1.md` to `en/step_19.md`. The October 2026 feedback revision splits long tasks, adds MakeCode and pairing screenshots, and keeps the completed game logic unchanged. Photos and gameplay media are present. The completed default program is in `en/solutions/reboot-sequence.ts`. Fresh physical-board and multi-board validation remain outstanding.

## Product statement

Learners build four loose finger contacts by wrapping kitchen foil around the thumb, index, middle, and ring fingers. The thumb contact connects to `GND`; the index, middle, and ring finger contacts connect to `P0`, `P1`, and `P2`. Touching a finger contact to the thumb contact closes one circuit and enters the number `1`, `2`, or `3`.

The BBC micro:bit generates and displays one reboot code of the learner’s chosen length (five by default). The player repeats that code using the finger contacts. A mistake sends the player back to the first term of the same code; entering all its terms correctly completes the reboot.

## Audience and level

- Code Club learners who have already made at least one simple MakeCode project.
- Intermediate block-based programming.
- No prior experience of lists or functions is assumed.
- The physical prototype provides an early success before the list and game-state code is introduced.

## Learning outcomes

Learners will:

- complete and test low-voltage input circuits using `GND` and pins `P0`, `P1`, and `P2`;
- respond to a physical switch closure with an event block, using quick taps released within one second;
- use a function with a parameter to avoid repeating the same blocks in three event handlers;
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

Each contact is made by wrapping kitchen foil loosely around a finger, leaving enough foil near the base of the finger for a crocodile clip to grip. Every finger has its own separate piece, and each wrap stops before the knuckle where the finger joins the hand, because the fingers press together there and neighbouring contacts would touch. Lead colour, not a written label, identifies which finger carries which signal.

The thumb contact is the common ground. The index, middle, and ring finger contacts carry the three input signals. A card backing and elastic bands hold the micro:bit and its battery pack on the wrist, with small notches cut into the card's edges so the bands cannot slide off, with the display visible and the edge connector accessible. The learner taps and releases one numbered finger against the thumb for each term in the sequence.

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
2. The micro:bit generates the chosen number of random values from 1 to 3 and displays them once, with a gap between values.
3. Tap the matching finger contacts against the thumb contact in the same order.
4. Every registered touch briefly displays the number detected. Touches are ignored while the code plays, while the micro:bit is still answering the previous touch, and after a win.
5. A wrong answer produces a low warning honk, displays a cross, and sends the player back to the first term of the same code.
6. A complete set of correct answers produce two short beeps and display the completed reboot.
7. Press button A at any time to generate a new code of the chosen length.

## Program state

| Name | Type | Purpose |
|---|---|---|
| `rebootSequence` | list of numbers | Stores the ordered values to display and repeat |
| `playerPosition` | number | Identifies the next list item the player must match |
| `sequenceLength` | number | Sets how many random terms are generated for each game |
| `acceptingInput` | Boolean | True only while the micro:bit is waiting for the next touch |
| `value` | loop variable | Carries each list item into the display blocks while the code plays |
| `answer` | function parameter | Carries one touched value into `checkAnswer` |

## Functions

The program has one function. The four blocks that display each signal sit directly inside the
playback loop in `on button A pressed`; an earlier `showSignal(signal)` function wrapped them, but
it was called from one place only, so it cost four blocks and saved none.

### `checkAnswer(answer)`

Ignores the touch unless `acceptingInput` is true. Otherwise it locks input, briefly displays the number recognised, compares `answer` with the list item at `playerPosition`, and then follows one of three paths:

- wrong answer: play one low warning honk, show a cross, show `A`, reset `playerPosition` to `0`, and unlock input;
- correct partial answer: advance `playerPosition` and unlock input, leaving the display blank;
- final correct answer: play two short higher beeps and show the reboot-complete sequence, leaving input locked until button A starts a new game.

## Step architecture

| Step | Outcome | Acceptance check |
|---:|---|---|
| 1 | What you will make | Identify materials and watch the demonstration |
| 2 | Start the controller | A appears after transferring the program |
| 3 | Make the first switch work | A quick tap displays 1; a two-second hold leaves A unchanged |
| 4 | Detect the other switches | Each pin lead displays its matching number |
| 5 | Show a random number | Each A press shows a random number and blank gap |
| 6 | Choose your code length | The start blocks contain the chosen positive length |
| 7 | Generate a reboot code | The list starts empty and is filled by the repeat loop |
| 8 | Play the reboot code | The played code matches the chosen length |
| 9 | Make an answer-checking function | An empty function has its answer parameter |
| 10 | Check your taps | The final correct tap shows a tick; a wrong tap shows a cross |
| 11 | Show each tap | Each tap briefly shows its number |
| 12 | Ignore taps while busy | Playback ignores taps; the target enables them |
| 13 | Check one tap at a time | The next tap waits for feedback; win and failure lock input |
| 14 | Try the same code again | A wrong answer permits a retry of the same code |
| 15 | Add winning and losing sounds | Win and failure produce different sounds |
| 16 | Finish the game display | ON marks success; A offers a new code after a mistake |
| 17 | Build the wearable controls | Contacts stay separate and the controller stays secure |
| 18 | Connect and play | Finger taps control complete games |
| 19 | Challenge: Replace numbers with symbols | The optional symbol code still plays correctly |

## Input design

Switch closures are detected with `input.onPinPressed` (`on pin P0 pressed`), not by polling
`digitalReadPin` in a `forever` loop. The event block does the edge detection and debounce that
the earlier draft did by hand, which removed three remembered-state Boolean variables, a
`rememberSwitchStates` function, three `setPull` calls, a `forever` loop and four loop-local
variables. Step 4 is now a single block.

The `acceptingInput` Boolean is the only input lock. It is `true` only while the micro:bit is
waiting for the next touch: button A sets it to `false` before playing the code and to `true` once
the target appears; `checkAnswer` sets it to `false` as soon as it accepts a touch, and back to
`true` once that touch's number has cleared or once `A` has been shown after a mistake. After the final
correct answer nothing unlocks it, so input stays locked until button A starts a new game.

The lock has to cover each touch's own feedback, not only playback. `checkAnswer` displays the
number before comparing it, and each display waits for the last to finish, so overlapping touches
were compared out of order. In the MakeCode simulator a correct retry started while the cross and
`A` were still showing was marked wrong. The cost is pace: a touch made while the
previous number is still showing is ignored, and the touch after it is then checked against the
ignored one's place. The target therefore appears only once, after the code plays; when it also
followed every correct touch, each touch kept the display busy for about 1.5 seconds and touches
1.2 seconds apart were dropped in the simulator. Button A is never locked: pressing it
mid-game starts a new code.

There is no separate wire tester. A learner-built one is the same nine blocks as steps 3 and 4,
so one of the two steps would have had nothing left to teach, and the 36-block version that adds
a dash for an open circuit needs `setPull` and `digitalReadPin` — the polling concept this project
deliberately removed. Step 3 doubles as the wiring check instead: it is the first input step, it is
three blocks, and a contact that does not register its number is the diagnosis. Steps 3 and 4
carry `[!DEBUG]` callouts naming the three ways the wiring goes wrong.

The cost is that an event cannot report an open circuit, so a learner cannot tell "not touching"
from "broken lead" at a glance. They find out by tapping.

**Not yet verified on hardware:** that pin-press detection fires reliably through the foil
contacts. The wiring is a direct short to `GND`, so it should, but this must be tested on a
board before publication.

## Block rendering

Code fences must be marked `microbit`. The projects site turns a fence into a picture of blocks
only when its `<pre>` has the class `language-microbit`, then sends the code to MakeCode's
renderer. A fence marked `blocks` is shown to learners as plain TypeScript.

Every block in the project comes from the standard micro:bit toolbox. There are no extensions and
no custom blocks. Tones use `play tone ... until done` from **Music**, with lengths picked from the
beat menu. The older `play tone ... for ...` block, with a duration in milliseconds, is marked
deprecated in MakeCode and no longer appears in the Music menu, so a picture of it sends learners
looking for a block they cannot find. Three of the categories used sit behind **Advanced** in the editor: Functions,
Arrays, and Pins. Pins is no longer used anywhere in the project.

MakeCode's renderer falls back to a grey box of literal JavaScript whenever a `microbit` fence
references something it does not declare. A call to a project function renders as
`call checkAnswer (1)` only if that function is defined in the same fence, and
`rebootSequence.push(...)` renders as `add value to end` only if the array is declared in the
same fence. An earlier draft had ten of nineteen fences rendering at least one grey block.

The projects site scales every picture down to the width of the step column, so a wide picture
becomes unreadable. MakeCode lays the top-level blocks of a fence out side by side, which means
every helper declaration widens the picture. Two techniques keep the helpers in the code but out of
the picture:

- A function that a fence defines only so that its `call` block renders gets a `// @hide` line
  directly above it. MakeCode builds the call block from the definition, then drops the
  definition from the picture.
- An array that a fence reads but the task does not change is declared as
  `let rebootSequence: number[] = null`. MakeCode leaves that declaration out of the picture and
  still knows the variable is an array, so `add value to end` renders as a block. Hiding a
  `set` block with `// @hide` does not work for this: it leaves an empty `on start` behind.

When a task adds two separate top-level blocks, give each its own fence so they stack rather than
sit side by side. The widest picture left is `checkAnswer` on its own, at about
830 pixels.

New and edited blocks are marked with a `// @highlight` comment on its own line, directly above
the block, which MakeCode renders as a yellow outline around that block. Three other placements
go wrong:

- A `+` at the start of a line: the renderer parses it as part of the previous expression and the
  block silently disappears from the image.
- A trailing `// @highlight` at the end of a line. On a line ending in `{`, the outline lands on
  the first block inside instead of the `if`, loop or event the line opens. On any other line, the
  block below also gets a stray comment icon.
- A highlight on a `let` that sets a variable to `false` or `0`. MakeCode leaves that block out of
  the picture, so the outline moves onto the next block.

On the projects site the outline is not a reliable signal on its own. The site removes MakeCode's
stylesheet from each picture, and its replacement colours every connection point yellow, so value
slots and notches look outlined too. Task text therefore names each block the learner adds rather
than pointing at "the highlighted block".

Outlining an `if`, loop, event or function outlines everything inside it. When a task wraps
existing blocks in a new `if`, the wrapper is not outlined: the task text names
it, and only the new blocks inside it are outlined.

Highlights mark the lines a task adds or changes, computed against the last fence that showed the
same function or handler. Fences whose every line is new carry no highlights, because an outline
around everything says nothing. Highlights are never placed inside a `showLeds` template literal,
where a comment would become part of the LED pattern.

Two rules keep this from coming back:

1. Every fence declares each project function it calls and each array it reads, using
   `// @hide` and `= null` for the ones the task does not change.
2. The project keeps only one function, `checkAnswer`. Functions called from exactly one place
   were folded into their call site, because each one added a fence that either
   rendered a grey block or had to repeat the definition.

The 26 October 2026 revision was checked by rendering all 41 code examples through
`makecode.microbit.org/--docs?render=1`. All rendered successfully with native blocks.
The final taught function matches the existing solution. Headings, metadata order, local
image paths and image widths were checked. The new MakeCode screenshots were visually
checked, and category styles were confirmed against the live projects site. These checks
do not substitute for physical-board testing.

## Step-size rule

Each `[!TASK]` callout holds one task: one change the learner can tick off. A sequence of actions becomes a sequence of task callouts, never a numbered list or a run of separate jobs inside one callout. A callout may still cover a small cluster of inseparable changes, such as adding the same block for two pins, or building one block together with the blocks inside it. Where several tasks build towards one goal, a plain sentence above them states the goal. A task shows a picture when it changes the program, and the picture shows the program as it stands after that task. Each step is a meaningful milestone rather than a single tiny edit, and ends with an explicit test of the state just created.

## Required assets before publication

- `en/images/banner.png`: finished improvised controller and illuminated micro:bit
- Finished-project photograph showing all four contacts and the wiring (`en/images/finished-controller.jpg`, step 18)
- Materials photograph (`en/images/materials.jpg`, step 1)
- Close photograph of a single foil finger contact (`en/images/finger-band-single.jpg`, step 17) and of all four (`en/images/finger-bands-all.jpg`, step 17)
- Photographs showing how the card backing and elastic bands hold the micro:bit (`en/images/microbit-on-wrist.jpg`) and the battery pack (`en/images/battery-pack-mounted.jpg`), step 17
- Wiring photograph of the bare micro:bit, with the ring labels readable (`en/images/leads-connected.jpg`, step 3)
- "Micro:bit Reboot Game" YouTube Short (`g3qdMucsHjQ`), step 1. Vertical 9:16, embedded in a portrait box (`max-width: 340px`, `padding-top: 177.78%`) rather than the house 16:9 box, which would letterbox it.
- `en/images/microbit-game.gif` (step 18), a complete game. Same footage as the Short above, so the two are redundant if a single asset is preferred.
- `en/images/wires-test.gif` (not used in any step), each contact tapped in turn. Replaces the "Micro:bit Simon Says - Wire test" Short (`jbZNebFAngA`), which is the same footage; that Short's title also still carries the old working name.
- Both GIFs were re-encoded from the 15-16 MB originals to 200px wide, 32 colours, 5fps: 1.2 MB and 2.2 MB.
- MakeCode screenshots only where the rendered blocks are insufficient
- Downloadable MakeCode project or HEX file in `en/solutions/`; the TypeScript reference is already present

The final hero image should preserve the hacked-together character of the build rather than presenting a fabricated glove or polished enclosure. The current banner is an illustration of a hand mid-tap, with the index finger on the thumb and the micro:bit showing `1`.

## Hardware validation still required

- Run the full build on at least two BBC micro:bit V2 boards.
- Test all three contacts for at least 30 taps each, recording missed or duplicate inputs.
- Confirm that touches made during sequence playback, while the previous number or the mistake feedback is showing, and after a win, are ignored.
- Confirm that a correct code tapped at a steady one-second pace is accepted.
- Confirm that every new game generates the chosen number of values from 1 to 3 (test lengths 1, 3, 5 and 8).
- Confirm that every touch displays the number detected exactly once.
- Confirm that button A restarts cleanly after both failure and success.
- Confirm that pressing button A mid-game, including during playback, leads to a playable new code.
- Confirm that after a mistake, the same code can be entered again from its first term.
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
