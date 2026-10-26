## Show each tap

Show the number for each tap so you know which pin lead was detected.

> [!TASK]
>
> Add the following blocks at the start of your function to briefly display each tap’s number before checking it.
>
> ```microbit
> let rebootSequence: number[] = null
> function checkAnswer (answer: number) {
>     // @highlight
>     basic.showNumber(answer)
>     // @highlight
>     basic.pause(150)
>     // @highlight
>     basic.clearScreen()
>     if (answer == rebootSequence[playerPosition]) {
>         playerPosition += 1
>         if (playerPosition == sequenceLength) {
>             basic.showIcon(IconNames.Yes)
>         }
>     } else {
>         basic.showIcon(IconNames.No)
>     }
> }
> ```

**Test**

Start a game and enter a correct number, then a wrong number. Each tap should briefly show its number. A correct tap clears the display for the next one. A wrong tap ends with a cross.
