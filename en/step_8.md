## Show every recognised touch

Give immediate feedback so the player knows which switch the micro:bit detected.

> [!TASK]
>
> At the top of `checkAnswer`, show the answer for `150` milliseconds and clear the display.
>
> ```microbit
> let rebootSequence: number[] = null
> function checkAnswer (answer: number) {
>     // @highlight
>     basic.showNumber(answer)
>     // @highlight
>     basic.pause(150)
>     // @highlight
>     basic.clearScreen()
>     if (answer == rebootSequence[playerPosition]) {
>         playerPosition += 1
>         if (playerPosition == sequenceLength) {
>             basic.showIcon(IconNames.Yes)
>         } else {
>             basic.showIcon(IconNames.Target)
>         }
>     } else {
>         basic.showIcon(IconNames.No)
>     }
> }
> ```

**Test:** Start a game and enter one correct contact and one deliberately wrong contact. Each touch should briefly display the number detected. After a correct tap, the target should come back straight away.
