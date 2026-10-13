## Ignore taps while the code plays

Ignore contacts touched while the code is still playing.

> [!TASK]
>
> Make a variable called `acceptingInput`. It only ever holds `true` or `false`, a kind of value called a **Boolean**.

> [!TASK]
>
> At the top of `on button A pressed`, set `acceptingInput` to `false`. This locks input while the code plays. The `true` and `false` blocks are in **Logic**.
>
> ```microbit
> // @hide
> function showSignal (signal: number) {
>     basic.showNumber(signal)
>     basic.pause(500)
>     basic.clearScreen()
>     basic.pause(200)
> }
> let rebootSequence: number[] = null
> let acceptingInput = false
> input.onButtonPressed(Button.A, function () {
>     // @highlight
>     acceptingInput = false
>     for (let value of rebootSequence) {
>         showSignal(value)
>     }
>     playerPosition = 0
>     basic.showIcon(IconNames.Target)
> })
> ```

> [!TASK]
>
> At the bottom of `on button A pressed`, set `acceptingInput` to `true`. This unlocks input when the target appears.
>
> ```microbit
> // @hide
> function showSignal (signal: number) {
>     basic.showNumber(signal)
>     basic.pause(500)
>     basic.clearScreen()
>     basic.pause(200)
> }
> let rebootSequence: number[] = null
> let acceptingInput = false
> input.onButtonPressed(Button.A, function () {
>     acceptingInput = false
>     for (let value of rebootSequence) {
>         showSignal(value)
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
> Drag the big `if` block out of `checkAnswer`. Leave it on the workspace; you will put it back in a moment.

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
> Put the big `if` block back inside the new one.

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
>         if (answer == rebootSequence[playerPosition]) {
>             playerPosition += 1
>             if (playerPosition == rebootSequence.length) {
>                 basic.showIcon(IconNames.Yes)
>             } else {
>                 basic.showIcon(IconNames.Target)
>                 acceptingInput = true
>             }
>         } else {
>             basic.showIcon(IconNames.No)
>         }
>     }
> }
> ```

> [!TASK]
>
> Add `set acceptingInput to true` under the `show icon` block that shows the target. It unlocks input after a correct answer, so the next tap counts.
>
> ```microbit
> let rebootSequence: number[] = null
> function checkAnswer (answer: number) {
>     if (acceptingInput) {
>         acceptingInput = false
>         if (answer == rebootSequence[playerPosition]) {
>             playerPosition += 1
>             if (playerPosition == rebootSequence.length) {
>                 basic.showIcon(IconNames.Yes)
>             } else {
>                 basic.showIcon(IconNames.Target)
>                 // @highlight
>                 acceptingInput = true
>             }
>         } else {
>             basic.showIcon(IconNames.No)
>         }
>     }
> }
> ```

**Test:** Press A and touch contacts while the code is playing; they should be ignored. Then enter `1`, `3`, `2`; the tick should appear, which shows that input unlocks again after each correct answer. Press A again, enter a wrong answer and touch again; the cross should remain.

> [!TIP]
>
> `acceptingInput` is a gate. Every `on pin pressed` block still runs on every tap, but `checkAnswer` now decides whether that tap counts.
