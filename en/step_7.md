## Check the test code

Compare each switch closure with the next expected item in the list.

> [!TASK]
>
> Make a variable called `playerPosition`. Make a function called `checkAnswer` with a number parameter called `answer`. Compare the answer with the item at `playerPosition`, then move to the next position after a correct answer.
>
> ```blocks
> let rebootSequence = [1, 3, 2]
> let playerPosition = 0 // @highlight
> function checkAnswer (answer: number) { // @highlight
>     if (answer == rebootSequence[playerPosition]) {
>         playerPosition += 1
>         if (playerPosition == rebootSequence.length) {
>             basic.showIcon(IconNames.Yes)
>         } else {
>             basic.showIcon(IconNames.Target)
>         }
>     } else {
>         basic.showIcon(IconNames.No)
>     }
> }
> ```

> [!TASK]
>
> After button A displays the code, reset `playerPosition` and show a target. In each `on pin pressed` block, replace `show number` with a call to `checkAnswer`, passing the matching value.
>
> ```blocks
> function showSignal (signal: number) {
>     basic.showNumber(signal)
>     basic.pause(500)
>     basic.clearScreen()
>     basic.pause(200)
> }
> input.onButtonPressed(Button.A, function () {
>     for (let signal of rebootSequence) {
>         showSignal(signal)
>     }
>     playerPosition = 0 // @highlight
>     basic.showIcon(IconNames.Target) // @highlight
> })
> ```
>
> ```blocks
> let rebootSequence = [1, 3, 2]
> function checkAnswer (answer: number) {
>     if (answer == rebootSequence[playerPosition]) {
>         playerPosition += 1
>         if (playerPosition == rebootSequence.length) {
>             basic.showIcon(IconNames.Yes)
>         } else {
>             basic.showIcon(IconNames.Target)
>         }
>     } else {
>         basic.showIcon(IconNames.No)
>     }
> }
> input.onPinPressed(TouchPin.P0, function () {
>     checkAnswer(1) // @highlight
> })
> input.onPinPressed(TouchPin.P1, function () {
>     checkAnswer(2) // @highlight
> })
> input.onPinPressed(TouchPin.P2, function () {
>     checkAnswer(3) // @highlight
> })
> ```

**Test:** Press A, then enter `1`, `3`, `2` with the bare leads. The target should return after the first two answers and a tick should appear after the third. Restart and deliberately enter a wrong first answer; a cross should appear.

> [!TIP]
>
> List positions start at `0`, so position `0` selects the first item.
