## Finish the game display

Add messages and icons for winning and trying again.

> [!TASK]
>
> Add the following display blocks after the tick. ON means the reboot worked. The happy face stays on the display until you start a new game.
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
>             if (playerPosition == sequenceLength) {
>                 music.play(music.tonePlayable(Note.C5, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
>                 basic.pause(80)
>                 music.play(music.tonePlayable(Note.E5, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
>                 basic.showIcon(IconNames.Yes)
>                 // @highlight
>                 basic.showString("ON")
>                 // @highlight
>                 basic.showIcon(IconNames.Happy)
>             } else {
>                 acceptingInput = true
>             }
>         } else {
>             music.play(music.tonePlayable(Note.C3, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
>             basic.showIcon(IconNames.No)
>             basic.pause(700)
>             playerPosition = 0
>             acceptingInput = true
>         }
>     }
> }
> ```

> [!TASK]
>
> Add the following block after the pause below the cross. A reminds you that button A gives you a new code. You can also start tapping to retry the same code.
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
>             if (playerPosition == sequenceLength) {
>                 music.play(music.tonePlayable(Note.C5, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
>                 basic.pause(80)
>                 music.play(music.tonePlayable(Note.E5, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
>                 basic.showIcon(IconNames.Yes)
>                 basic.showString("ON")
>                 basic.showIcon(IconNames.Happy)
>             } else {
>                 acceptingInput = true
>             }
>         } else {
>             music.play(music.tonePlayable(Note.C3, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
>             basic.showIcon(IconNames.No)
>             basic.pause(700)
>             // @highlight
>             basic.showString("A")
>             playerPosition = 0
>             acceptingInput = true
>         }
>     }
> }
> ```

**Test**

Download your program.

- Make a mistake. After the warning sound and cross, A should appear.
- Retry the same code from the start. A win should play your sounds, display ON and show a happy face.
- Press A again. A new code should play.
