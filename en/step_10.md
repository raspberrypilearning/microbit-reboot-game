## Finish the game

Add different feedback for failure and success to your answer-checking function.

Start with the branch that runs after the last correct answer.

> [!TASK]
>
> Add the highlighted blocks before the tick to play two short high tones when the player completes the code. Find the sound blocks in **Music**.
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
>                 // @highlight
>                 music.play(music.tonePlayable(Note.C5, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
>                 // @highlight
>                 basic.pause(80)
>                 // @highlight
>                 music.play(music.tonePlayable(Note.E5, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
>                 basic.showIcon(IconNames.Yes)
>             } else {
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
> Add the highlighted blocks after the tick to display ON and a happy face, showing that the reboot worked.
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
>             basic.showIcon(IconNames.No)
>         }
>     }
> }
> ```

Next, finish the branch that runs after a wrong answer.

> [!TASK]
>
> Add the highlighted sound block before the cross to play a low warning tone after a wrong answer.
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
>             // @highlight
>             music.play(music.tonePlayable(Note.C3, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
>             basic.showIcon(IconNames.No)
>         }
>     }
> }
> ```

> [!TASK]
>
> Add the highlighted blocks to pause after the cross, then display A as a reminder that the player can press button A for a new code.
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
>             // @highlight
>             basic.pause(700)
>             // @highlight
>             basic.showString("A")
>         }
>     }
> }
> ```

> [!TASK]
>
> Add the highlighted block to return the player to the first signal after a mistake, ready to try the same code again.
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
>             basic.showString("A")
>             // @highlight
>             playerPosition = 0
>         }
>     }
> }
> ```

> [!TASK]
>
> Add the highlighted block to accept taps again after a mistake, so the player can retry the code.
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
>             basic.showString("A")
>             playerPosition = 0
>             // @highlight
>             acceptingInput = true
>         }
>     }
> }
> ```

**Test:** Press A and enter a wrong value; you should hear one low tone. When `A` appears, enter the same code from its first number; the micro:bit should play two tones, display `ON`, and show a happy face. Press A again; a new code should play.

> [!TIP]
>
> After a mistake, the player can wait for `A`, then try the same code again from the start, or press A for a new one.
