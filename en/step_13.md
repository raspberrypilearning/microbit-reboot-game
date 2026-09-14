## Accept one answer at a time

Stop accidental contacts being counted while the micro:bit is displaying or checking something.

> [!TASK]
>
> Make a Boolean variable called `accepting input`. Set it to `false` before button A displays the sequence, then set it to `true` after the target appears.
>
> ```blocks
> let acceptingInput = false
> input.onButtonPressed(Button.A, function () {
>     acceptingInput = false
>     for (let signal of rebootSequence) {
>         showSignal(signal)
>     }
>     playerPosition = 0
>     basic.showIcon(IconNames.Target)
>     acceptingInput = true
> })
> ```

> [!TASK]
>
> Put the answer check inside `if accepting input`. Lock input while checking. Reopen it after a correct partial answer, but leave it locked after a wrong answer or completed round.
>
> ```blocks
> function checkAnswer (answer: number) {
>     if (acceptingInput) {
>         acceptingInput = false
>         if (answer == rebootSequence[playerPosition]) {
>             playerPosition += 1
>             if (playerPosition == rebootSequence.length) {
>                 basic.showIcon(IconNames.Yes)
>             } else {
>                 basic.showIcon(IconNames.SmallDiamond)
>                 basic.pause(150)
>                 acceptingInput = true
>             }
>         } else {
>             basic.showIcon(IconNames.No)
>         }
>     }
> }
> ```

> [!TIP]
>
> `accepting input` describes the game's current **state**. The same physical touch is ignored or checked depending on that state.

**Test:** Press A and touch signal jaws to `GND` while the three numbers are still playing. Those contacts should be ignored. Enter one wrong answer, then make another contact; the display should remain on the cross until you press A again.
