## Ignore taps between games

Make the micro:bit ignore taps while it is busy: while the code plays, while it answers a tap, and after a win.

> [!TASK]
>
> Create a variable called **acceptingInput** to remember whether taps should count. It holds true or false, a kind of value called a **Boolean**.

> [!TASK]
>
> Add the highlighted block at the start of the button A event to stop taps counting while the code plays. Find true and false in **Logic**.
>
> ```microbit
> let rebootSequence: number[] = null
> let acceptingInput = false
> input.onButtonPressed(Button.A, function () {
>     // @highlight
>     acceptingInput = false
>     rebootSequence = []
>     for (let count = 0; count < sequenceLength; count++) {
>         rebootSequence.push(randint(1, 3))
>     }
>     for (let value of rebootSequence) {
>         basic.showNumber(value)
>         basic.pause(500)
>         basic.clearScreen()
>         basic.pause(200)
>     }
>     playerPosition = 0
>     basic.showIcon(IconNames.Target)
> })
> ```

> [!TASK]
>
> Add the highlighted block at the end of the button A event to accept taps once the code has finished playing and the target appears.
>
> ```microbit
> let rebootSequence: number[] = null
> let acceptingInput = false
> input.onButtonPressed(Button.A, function () {
>     acceptingInput = false
>     rebootSequence = []
>     for (let count = 0; count < sequenceLength; count++) {
>         rebootSequence.push(randint(1, 3))
>     }
>     for (let value of rebootSequence) {
>         basic.showNumber(value)
>         basic.pause(500)
>         basic.clearScreen()
>         basic.pause(200)
>     }
>     playerPosition = 0
>     basic.showIcon(IconNames.Target)
>     // @highlight
>     acceptingInput = true
> })
> ```

Next, make the answer-checking function ignore taps when input is disabled.

> [!TASK]
>
> Move all the blocks out of your answer-checking function to make room for a new condition. Drag the first block out; the rest come with it. Keep them on the workspace.

> [!TASK]
>
> Add the following condition from **Logic** around all your function's blocks so taps are checked only when input is enabled. Put the blocks you moved inside it, as shown.
>
> ```microbit
> let rebootSequence: number[] = null
> function checkAnswer (answer: number) {
>     // @highlight
>     if (acceptingInput) {
>         basic.showNumber(answer)
>         basic.pause(150)
>         basic.clearScreen()
>         if (answer == rebootSequence[playerPosition]) {
>             playerPosition += 1
>             if (playerPosition == sequenceLength) {
>                 basic.showIcon(IconNames.Yes)
>             }
>         } else {
>             basic.showIcon(IconNames.No)
>         }
>     }
> }
> ```

> [!TASK]
>
> Add the highlighted block to ignore further taps while the micro:bit responds to the current one.
>
> ```microbit
> let rebootSequence: number[] = null
> function checkAnswer (answer: number) {
>     if (acceptingInput) {
>         // @highlight
>         acceptingInput = false
>         basic.showNumber(answer)
>         basic.pause(150)
>         basic.clearScreen()
>         if (answer == rebootSequence[playerPosition]) {
>             playerPosition += 1
>             if (playerPosition == sequenceLength) {
>                 basic.showIcon(IconNames.Yes)
>             }
>         } else {
>             basic.showIcon(IconNames.No)
>         }
>     }
> }
> ```

> [!TASK]
>
> Add the highlighted block in an alternative branch so the next tap can count after a correct answer, unless the code is complete. Click **+** on the condition that checks whether the player has finished.
>
> ```microbit
> let rebootSequence: number[] = null
> function checkAnswer (answer: number) {
>     if (acceptingInput) {
>         acceptingInput = false
>         basic.showNumber(answer)
>         basic.pause(150)
>         basic.clearScreen()
>         if (answer == rebootSequence[playerPosition]) {
>             playerPosition += 1
>             if (playerPosition == sequenceLength) {
>                 basic.showIcon(IconNames.Yes)
>             } else {
>                 // @highlight
>                 acceptingInput = true
>             }
>         } else {
>             basic.showIcon(IconNames.No)
>         }
>     }
> }
> ```

**Test:** Press A and tap the contacts while the code plays; no numbers should appear. Enter the code, waiting for each number to disappear before the next tap; a tick should appear. Tap a contact again; nothing should happen until you press A. Start a new game and enter a wrong value; the cross should stay, whatever you tap, until you press A.

> [!TIP]
>
> `acceptingInput` is a gate. It is `true` only while the micro:bit is waiting for your next tap. Every `on pin pressed` block still runs on every tap, but `checkAnswer` now decides whether that tap counts.
