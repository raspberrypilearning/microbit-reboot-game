## Finish the game

Prevent overlapping games and add different feedback for failure and success.

> [!TASK]
>
> Make another `true` or `false` variable called `gameActive`.

Next, change button A so it starts a game only when no game is already running.

> [!TASK]
>
> Drag the first block out of `on button A pressed`. All the blocks under it come too. Leave them on the workspace; you will put them back in a moment.

> [!TASK]
>
> Put an `if` block from **Logic** into `on button A pressed`. Replace its `true` with `not` from **Logic**, and drop `gameActive` into the `not`.
>
> ```microbit
> input.onButtonPressed(Button.A, function () {
>     // @highlight
>     if (!(gameActive)) {
>     }
> })
> ```

> [!TASK]
>
> Put your blocks back inside the `if`.

> [!TASK]
>
> Add `set gameActive to true` at the top, inside the `if`.
>
> ```microbit
> let rebootSequence: number[] = null
> // @hide
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

Next, finish the two ways a game can end in `checkAnswer`.

> [!TASK]
>
> In the branch that runs after the fifth correct answer, play two short high tones before the tick. After the tick, show `ON` and a happy face, then set `gameActive` to `false` so that a new game can start.
>
> ```microbit
> let rebootSequence: number[] = null
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
>             basic.showIcon(IconNames.No)
>         }
>     }
> }
> ```

> [!TASK]
>
> In the branch that runs after a wrong answer, play one long low tone before the cross. After the cross, pause, show `A` to offer a restart, then set `gameActive` to `false`.
>
> ```microbit
> let rebootSequence: number[] = null
> function checkAnswer (answer: number) {
>     if (acceptingInput) {
>         acceptingInput = false
>         basic.showNumber(answer)
>         basic.pause(150)
>         basic.clearScreen()
>         if (answer == rebootSequence[playerPosition]) {
>             playerPosition += 1
>             if (playerPosition == rebootSequence.length) {
>                 music.playTone(Note.C5, 100)
>                 basic.pause(80)
>                 music.playTone(Note.E5, 100)
>                 basic.showIcon(IconNames.Yes)
>                 basic.showString("ON")
>                 basic.showIcon(IconNames.Happy)
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
