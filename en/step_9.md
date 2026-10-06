## Show every recognised touch

Give immediate feedback so the player knows which switch the micro:bit detected.

> [!TASK]
>
> In `checkAnswer`, straight after input is locked, show the answer for `150` milliseconds and clear the display.
>
> ```blocks
> let rebootSequence: number[] = []
> function checkAnswer (answer: number) {
>     if (acceptingInput) {
>         acceptingInput = false
>         // @highlight
>         basic.showNumber(answer)
>         // @highlight
>         basic.pause(150)
>         // @highlight
>         basic.clearScreen()
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

**Test:** Start a game and enter one correct contact and one deliberately wrong contact. Each touch should briefly display the number detected. After a correct tap, the target should come back straight away.
