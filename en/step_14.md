## Try the same code again

A mistake gives you another chance to remember the code.

> [!TASK]
>
> Add the following blocks after the cross to pause briefly, then return to the first number in the same code.
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
>                 basic.showIcon(IconNames.Yes)
>             } else {
>                 acceptingInput = true
>             }
>         } else {
>             basic.showIcon(IconNames.No)
>             // @highlight
>             basic.pause(700)
>             // @highlight
>             playerPosition = 0
>         }
>     }
> }
> ```

> [!TASK]
>
> Add the following block after the position reset to accept taps again.
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
>                 basic.showIcon(IconNames.Yes)
>             } else {
>                 acceptingInput = true
>             }
>         } else {
>             basic.showIcon(IconNames.No)
>             basic.pause(700)
>             playerPosition = 0
>             // @highlight
>             acceptingInput = true
>         }
>     }
> }
> ```

**Test**

Download your program and start a game.

- Make a mistake and wait a second.
- Try the same code again from its first number. You should be able to finish it.
- Press A whenever you want a new code.
