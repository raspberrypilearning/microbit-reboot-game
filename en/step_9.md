## Finish the game

Add different feedback for failure and success in `checkAnswer`.

Start with the branch that runs after the fifth correct answer.

> [!TASK]
>
> Before the tick, add two `play tone` blocks from **Music**, with a `pause (ms)` of `80` between them. Set the first tone to `High C` and the second to `High E`, each for `1/4` beat.
>
> ```microbit
> let rebootSequence: number[] = null
> function checkAnswer (answer: number) {
>     basic.showNumber(answer)
>     basic.pause(150)
>     basic.clearScreen()
>     if (answer == rebootSequence[playerPosition]) {
>         playerPosition += 1
>         if (playerPosition == sequenceLength) {
>             // @highlight
>             music.play(music.tonePlayable(Note.C5, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
>             // @highlight
>             basic.pause(80)
>             // @highlight
>             music.play(music.tonePlayable(Note.E5, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
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
> After the tick, show the string `ON`, then the happy face icon.
>
> ```microbit
> let rebootSequence: number[] = null
> function checkAnswer (answer: number) {
>     basic.showNumber(answer)
>     basic.pause(150)
>     basic.clearScreen()
>     if (answer == rebootSequence[playerPosition]) {
>         playerPosition += 1
>         if (playerPosition == sequenceLength) {
>             music.play(music.tonePlayable(Note.C5, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
>             basic.pause(80)
>             music.play(music.tonePlayable(Note.E5, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
>             basic.showIcon(IconNames.Yes)
>             // @highlight
>             basic.showString("ON")
>             // @highlight
>             basic.showIcon(IconNames.Happy)
>         } else {
>             basic.showIcon(IconNames.Target)
>         }
>     } else {
>         basic.showIcon(IconNames.No)
>     }
> }
> ```

Next, finish the branch that runs after a wrong answer.

> [!TASK]
>
> Before the cross, add a `play tone` block. Set it to `Low C` and leave it at `1` beat.
>
> ```microbit
> let rebootSequence: number[] = null
> function checkAnswer (answer: number) {
>     basic.showNumber(answer)
>     basic.pause(150)
>     basic.clearScreen()
>     if (answer == rebootSequence[playerPosition]) {
>         playerPosition += 1
>         if (playerPosition == sequenceLength) {
>             music.play(music.tonePlayable(Note.C5, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
>             basic.pause(80)
>             music.play(music.tonePlayable(Note.E5, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
>             basic.showIcon(IconNames.Yes)
>             basic.showString("ON")
>             basic.showIcon(IconNames.Happy)
>         } else {
>             basic.showIcon(IconNames.Target)
>         }
>     } else {
>         // @highlight
>         music.play(music.tonePlayable(Note.C3, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
>         basic.showIcon(IconNames.No)
>     }
> }
> ```

> [!TASK]
>
> After the cross, pause for `700` milliseconds, then show the string `A` to offer a new code.
>
> ```microbit
> let rebootSequence: number[] = null
> function checkAnswer (answer: number) {
>     basic.showNumber(answer)
>     basic.pause(150)
>     basic.clearScreen()
>     if (answer == rebootSequence[playerPosition]) {
>         playerPosition += 1
>         if (playerPosition == sequenceLength) {
>             music.play(music.tonePlayable(Note.C5, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
>             basic.pause(80)
>             music.play(music.tonePlayable(Note.E5, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
>             basic.showIcon(IconNames.Yes)
>             basic.showString("ON")
>             basic.showIcon(IconNames.Happy)
>         } else {
>             basic.showIcon(IconNames.Target)
>         }
>     } else {
>         music.play(music.tonePlayable(Note.C3, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
>         basic.showIcon(IconNames.No)
>         // @highlight
>         basic.pause(700)
>         // @highlight
>         basic.showString("A")
>     }
> }
> ```

> [!TASK]
>
> Under `show string "A"`, set `playerPosition` to `0`. After a mistake, the next tap starts the code again from the first number.
>
> ```microbit
> let rebootSequence: number[] = null
> function checkAnswer (answer: number) {
>     basic.showNumber(answer)
>     basic.pause(150)
>     basic.clearScreen()
>     if (answer == rebootSequence[playerPosition]) {
>         playerPosition += 1
>         if (playerPosition == sequenceLength) {
>             music.play(music.tonePlayable(Note.C5, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
>             basic.pause(80)
>             music.play(music.tonePlayable(Note.E5, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
>             basic.showIcon(IconNames.Yes)
>             basic.showString("ON")
>             basic.showIcon(IconNames.Happy)
>         } else {
>             basic.showIcon(IconNames.Target)
>         }
>     } else {
>         music.play(music.tonePlayable(Note.C3, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
>         basic.showIcon(IconNames.No)
>         basic.pause(700)
>         basic.showString("A")
>         // @highlight
>         playerPosition = 0
>     }
> }
> ```

**Test:** Press A and enter a wrong value; you should hear one low tone. Now enter the same code from its first number; the micro:bit should play two tones, display `ON`, and show a happy face. Press A again; a new code should play.

> [!TIP]
>
> After a mistake, the player can try the same code again from the start, or press A for a new one.
