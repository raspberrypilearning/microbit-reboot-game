## Ignore taps between games

Make the micro:bit ignore taps while it is busy: while the code plays, while it answers a tap, and after a win.

> [!TASK]
>
> Make a variable called `acceptingInput`. It only ever holds `true` or `false`, a kind of value called a **Boolean**.

> [!TASK]
>
> At the top of `on button A pressed`, set `acceptingInput` to `false`. This locks input while the code plays. The `true` and `false` blocks are in **Logic**.
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
> At the bottom of `on button A pressed`, set `acceptingInput` to `true`. This unlocks input when the target appears after the code.
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

Next, make `checkAnswer` ignore every tap unless input is unlocked.

> [!TASK]
>
> Drag `show number` out of `checkAnswer`. All the blocks under it come too. Leave them on the workspace; you will put them back in a moment.

> [!TASK]
>
> Put a new `if` block from **Logic** into `checkAnswer`. Replace its `true` with `acceptingInput` from **Variables**.
>
> ```microbit
> function checkAnswer (answer: number) {
>     // @highlight
>     if (acceptingInput) {
>     }
> }
> ```

> [!TASK]
>
> Put your blocks back inside the new `if`.

> [!TASK]
>
> Add `set acceptingInput to false` as the first block inside the new `if`. It locks input while one tap is checked.
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
> Click the **+** at the bottom of the `if playerPosition = sequenceLength` block to give it an `else`. Put `set acceptingInput to true` in the `else`. It unlocks input after a correct answer that does not finish the code, so the next tap counts.
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
