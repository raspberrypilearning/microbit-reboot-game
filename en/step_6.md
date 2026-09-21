## Check the test code

Compare each switch closure with the next expected item in the list.

> [!TASK]
>
> Make a variable called `player position`. Make a function called `check answer` with a number parameter called `answer`. Compare the answer with the item at `player position`, then move to the next position after a correct answer.
>
> ```microbit
> let playerPosition = 0
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
> After button A displays the code, reset `player position` and show a target. In `forever`, replace the three `show number` blocks with calls to `check answer`, passing the matching value.
>
> ```microbit
> input.onButtonPressed(Button.A, function () {
>     for (let signal of rebootSequence) {
>         showSignal(signal)
>     }
>     playerPosition = 0
>     basic.showIcon(IconNames.Target)
> })
> ```

**Test:** Press A, then enter `1`, `3`, `2` with the bare leads. The target should return after the first two answers and a tick should appear after the third. Restart and deliberately enter a wrong first answer; a cross should appear.

> [!TIP]
>
> List positions start at `0`, so position `0` selects the first item.
