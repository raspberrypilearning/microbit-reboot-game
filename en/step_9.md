## Show every recognised touch

Give immediate feedback so the player knows which switch the micro:bit detected.

> [!TASK]
>
> Make a function called `show recognised answer` with a number parameter called `answer`. Show the answer for `150` milliseconds, then clear the display.
>
> ```microbit
> function showRecognisedAnswer (answer: number) {
>     basic.showNumber(answer)
>     basic.pause(150)
>     basic.clearScreen()
> }
> ```

> [!TASK]
>
> Call `show recognised answer` immediately after `check answer` locks input. After a correct partial answer, show the target and accept the next input without another animation.
>
> ```microbit
> function checkAnswer (answer: number) {
>     if (acceptingInput) {
>         acceptingInput = false
>         showRecognisedAnswer(answer)
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
