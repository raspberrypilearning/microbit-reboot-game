## Add winning and losing sounds

Give your game sounds for winning and losing.

> [!TASK]
>
> Add the following sound blocks from `Music`{:class='microbitmusic'} before the tick to celebrate a win. Use the settings shown or experiment with your own sounds.
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
>             basic.pause(700)
>             playerPosition = 0
>             acceptingInput = true
>         }
>     }
> }
> ```

> [!TASK]
>
> Add the following sound block before the cross to give a wrong answer a different sound.
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
>             } else {
>                 acceptingInput = true
>             }
>         } else {
>             // @highlight
>             music.play(music.tonePlayable(Note.C3, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
>             basic.showIcon(IconNames.No)
>             basic.pause(700)
>             playerPosition = 0
>             acceptingInput = true
>         }
>     }
> }
> ```

**Test**

Download your program.

- Make a mistake and listen for the warning sound.
- Retry the code and complete it. Listen for your winning sound.
