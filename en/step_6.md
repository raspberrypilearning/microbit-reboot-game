## Check the test code

Check each tap against the next number in the code.

> [!TASK]
>
> Make a variable called `playerPosition`. It remembers which item in the list the player must match next.
>
> Make a function called `checkAnswer` the same way you made `showSignal`, with a number parameter called `answer`. It compares the answer with the item at `playerPosition`, and moves on to the next item after a correct answer.
>
> `get value at` and `length of array` are in **Advanced** > **Arrays**. To give an `if` block an `else`, click the **+** at its bottom edge.
>
> ```blocks
> let rebootSequence = [1, 3, 2]
> let playerPosition = 0
> // @highlight
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
> ```

> [!TASK]
>
> After button A displays the code, reset `playerPosition` and show a target. In each `on pin pressed` block, replace `show number` with a `call checkAnswer` block from **Functions**, and type in the matching number.
>
> ```blocks
> function showSignal (signal: number) {
>     basic.showNumber(signal)
>     basic.pause(500)
>     basic.clearScreen()
>     basic.pause(200)
> }
> input.onButtonPressed(Button.A, function () {
>     for (let value of rebootSequence) {
>         showSignal(value)
>     }
>     // @highlight
>     playerPosition = 0
>     // @highlight
>     basic.showIcon(IconNames.Target)
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
>     // @highlight
>     checkAnswer(1)
> })
> input.onPinPressed(TouchPin.P1, function () {
>     // @highlight
>     checkAnswer(2)
> })
> input.onPinPressed(TouchPin.P2, function () {
>     // @highlight
>     checkAnswer(3)
> })
> ```

**Test:** Press A, then enter `1`, `3`, `2` with the bare leads. The target should stay on the display after the first two answers, and a tick should appear after the third. Nothing changes on the display after a correct answer yet; you will add that in step 9. Restart and deliberately enter a wrong first answer; a cross should appear.

> [!TIP]
>
> List positions start at `0`, so position `0` selects the first item.
