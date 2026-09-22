## Show every recognised touch

Give immediate feedback so the player knows which switch the micro:bit detected.

> [!TASK]
>
> In `checkAnswer`, straight after input is locked, show the answer for `150` milliseconds and clear the display. After a correct partial answer, show the target and accept the next input without another animation.
>
> ```blocks
> let rebootSequence: number[] = []
> function checkAnswer (answer: number) {
>     if (acceptingInput) {
>         acceptingInput = false
>         basic.showNumber(answer) // @highlight
>         basic.pause(150) // @highlight
>         basic.clearScreen() // @highlight
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

**Test:** Start a game and enter one correct contact and one deliberately wrong contact. Each touch should briefly display the number detected. The target should return immediately after a correct partial answer.
