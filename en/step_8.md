## Make the input reliable

Ignore contacts touched while the code is still playing.

> [!TASK]
>
> Make a Boolean variable called `acceptingInput`. Lock input before playback and unlock it when the target appears.
>
> ```blocks
> function showSignal (signal: number) {
>     basic.showNumber(signal)
>     basic.pause(500)
>     basic.clearScreen()
>     basic.pause(200)
> }
> let acceptingInput = false // @highlight
> input.onButtonPressed(Button.A, function () {
>     acceptingInput = false // @highlight
>     for (let signal of rebootSequence) {
>         showSignal(signal)
>     }
>     playerPosition = 0
>     basic.showIcon(IconNames.Target)
>     acceptingInput = true // @highlight
> })
> ```

> [!TASK]
>
> Make `checkAnswer` do nothing unless input is unlocked, and lock it again while it checks one value.
>
> ```blocks
> let rebootSequence = [1, 3, 2]
> function checkAnswer (answer: number) {
>     if (acceptingInput) { // @highlight
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

**Test:** Touch contacts while the code is playing; they should be ignored. Enter a wrong answer and touch again; the cross should remain.

> [!TIP]
>
> `acceptingInput` is a gate. Every `on pin pressed` block still runs on every tap, but `checkAnswer` now decides whether that tap counts.
