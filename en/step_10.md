## Finish the game

Prevent overlapping games and add different feedback for failure and success.

> [!TASK]
>
> Make `game active` and the two sound functions. Change button A so it starts a game only when another game is not already active.
>
> ```blocks
> let gameActive = false
> function playCorrectSound () {
>     music.playTone(Note.C5, 100)
>     basic.pause(80)
>     music.playTone(Note.E5, 100)
> }
> function playErrorSound () {
>     music.playTone(Note.C3, 500)
> }
> input.onButtonPressed(Button.A, function () {
>     if (!(gameActive)) {
>         gameActive = true
>         startGame()
>     }
> })
> ```

> [!TASK]
>
> Make a `complete reboot` function. Finish both result branches in `check answer`: a mistake honks, shows a cross and offers a restart; five correct answers beep twice and complete the reboot.
>
> ```blocks
> function completeReboot () {
>     acceptingInput = false
>     playCorrectSound()
>     basic.showIcon(IconNames.Yes)
>     basic.pause(500)
>     basic.showString("ON")
>     basic.showIcon(IconNames.Happy)
>     gameActive = false
> }
> ```
>
> ```blocks
> function checkAnswer (answer: number) {
>     if (acceptingInput) {
>         acceptingInput = false
>         showRecognisedAnswer(answer)
>         if (answer == rebootSequence[playerPosition]) {
>             playerPosition += 1
>             if (playerPosition == rebootSequence.length) {
>                 completeReboot()
>             } else {
>                 basic.showIcon(IconNames.Target)
>                 acceptingInput = true
>             }
>         } else {
>             acceptingInput = false
>             playErrorSound()
>             basic.showIcon(IconNames.No)
>             basic.pause(700)
>             basic.showString("A")
>             gameActive = false
>         }
>     }
> }
> ```

**Test:** Press A again during playback; the code should continue without restarting. Enter a wrong value and listen for one warning honk. Start again and repeat all five values correctly; the micro:bit should beep twice, display `ON`, and show a happy face.
