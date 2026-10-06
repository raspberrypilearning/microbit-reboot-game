## Finish the game

Prevent overlapping games and add different feedback for failure and success.

> [!TASK]
>
> Make another `true` or `false` variable called `gameActive`. Then change button A so it starts a game only when no game is already running:
>
> 1. Drag the first block out of `on button A pressed`. All the blocks under it come too.
> 2. Put an `if` block from **Logic** into `on button A pressed`. Replace its `true` with `not` from **Logic**, and drop `gameActive` into the `not`.
> 3. Put your blocks back inside the `if`, and add the highlighted block at the top.
>
> ```blocks
> let rebootSequence: number[] = []
> function showSignal (signal: number) {
>     basic.showNumber(signal)
>     basic.pause(500)
>     basic.clearScreen()
>     basic.pause(200)
> }
> let gameActive = false
> input.onButtonPressed(Button.A, function () {
>     if (!(gameActive)) {
>         // @highlight
>         gameActive = true
>         acceptingInput = false
>         rebootSequence = []
>         for (let count = 0; count < sequenceLength; count++) {
>             rebootSequence.push(randint(1, 3))
>         }
>         for (let value of rebootSequence) {
>             showSignal(value)
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
>                 // @highlight
>                 music.playTone(Note.C5, 100)
>                 // @highlight
>                 basic.pause(80)
>                 // @highlight
>                 music.playTone(Note.E5, 100)
>                 basic.showIcon(IconNames.Yes)
>                 // @highlight
>                 basic.showString("ON")
>                 // @highlight
>                 basic.showIcon(IconNames.Happy)
>                 // @highlight
>                 gameActive = false
>             } else {
>                 basic.showIcon(IconNames.Target)
>                 acceptingInput = true
>             }
>         } else {
>             // @highlight
>             music.playTone(Note.C3, 500)
>             basic.showIcon(IconNames.No)
>             // @highlight
>             basic.pause(700)
>             // @highlight
>             basic.showString("A")
>             // @highlight
>             gameActive = false
>         }
>     }
> }
> ```

**Test:** Press A again during playback; the code should continue without restarting. Enter a wrong value and listen for one low tone. Start again and repeat all five values correctly; the micro:bit should play two tones, display `ON`, and show a happy face.
