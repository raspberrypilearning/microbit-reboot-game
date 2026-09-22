## Finish the game

Prevent overlapping games and add different feedback for failure and success.

> [!TASK]
>
> Make a Boolean variable called `gameActive`. Change button A so it starts a game only when another game is not already active.
>
> ```blocks
> let rebootSequence: number[] = []
> function showSignal (signal: number) {
>     basic.showNumber(signal)
>     basic.pause(500)
>     basic.clearScreen()
>     basic.pause(200)
> }
> let gameActive = false // @highlight
> input.onButtonPressed(Button.A, function () {
>     if (!(gameActive)) { // @highlight
>         gameActive = true
>         acceptingInput = false
>         rebootSequence = []
>         for (let count = 0; count < sequenceLength; count++) {
>             rebootSequence.push(randint(1, 3))
>         }
>         for (let signal of rebootSequence) {
>             showSignal(signal)
>         }
>         playerPosition = 0
>         basic.showIcon(IconNames.Target)
>         acceptingInput = true
>     }
> })
> ```

> [!TASK]
>
> Finish both result branches in `checkAnswer`. A mistake plays one low tone, shows a cross and offers a restart. Five correct answers play two high tones and complete the reboot.
>
> ```blocks
> let rebootSequence: number[] = []
> function checkAnswer (answer: number) {
>     if (acceptingInput) {
>         acceptingInput = false
>         basic.showNumber(answer)
>         basic.pause(150)
>         basic.clearScreen()
>         if (answer == rebootSequence[playerPosition]) {
>             playerPosition += 1
>             if (playerPosition == rebootSequence.length) {
>                 music.playTone(Note.C5, 100) // @highlight
>                 basic.pause(80) // @highlight
>                 music.playTone(Note.E5, 100) // @highlight
>                 basic.showIcon(IconNames.Yes)
>                 basic.showString("ON") // @highlight
>                 basic.showIcon(IconNames.Happy) // @highlight
>                 gameActive = false // @highlight
>             } else {
>                 basic.showIcon(IconNames.Target)
>                 acceptingInput = true
>             }
>         } else {
>             music.playTone(Note.C3, 500) // @highlight
>             basic.showIcon(IconNames.No)
>             basic.pause(700) // @highlight
>             basic.showString("A") // @highlight
>             gameActive = false // @highlight
>         }
>     }
> }
> ```

**Test:** Press A again during playback; the code should continue without restarting. Enter a wrong value and listen for one low tone. Start again and repeat all five values correctly; the micro:bit should play two tones, display `ON`, and show a happy face.
