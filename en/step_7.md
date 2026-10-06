## Ignore taps while the code plays

Ignore contacts touched while the code is still playing.

> [!TASK]
>
> Make a variable called `acceptingInput`. It only ever holds `true` or `false`, a kind of value called a **Boolean**. The `true` and `false` blocks are in **Logic**.
>
> Lock input before the code plays, and unlock it when the target appears.
>
> ```blocks
> function showSignal (signal: number) {
>     basic.showNumber(signal)
>     basic.pause(500)
>     basic.clearScreen()
>     basic.pause(200)
> }
> let acceptingInput = false
> input.onButtonPressed(Button.A, function () {
>     // @highlight
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

> [!TASK]
>
> Make `checkAnswer` ignore every tap unless input is unlocked:
>
> 1. Drag the big `if` block out of `checkAnswer`.
> 2. Put a new `if` block from **Logic** into `checkAnswer`. Replace its `true` with `acceptingInput` from **Variables**.
> 3. Put the big `if` block back inside the new one.
> 4. Add the two highlighted blocks. The first locks input while one tap is checked. The second unlocks it after a correct answer, so the next tap counts.
>
> ```blocks
> let rebootSequence = [1, 3, 2]
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
