## Challenge: Replace numbers with symbols

Make the reboot harder by inventing a visual code.

> [!TASK]
>
> Design three clearly different 5×5 symbols, and decide which one represents each input.

> [!TASK]
>
> Replace the number display in your playback loop with the following blocks so each number shows a different symbol.
>
> Here is one possible symbol set.
>
> ```microbit
> let rebootSequence: number[] = null
> let acceptingInput = false
> input.onButtonPressed(Button.A, function () {
>     acceptingInput = false
>     rebootSequence = []
>     for (let count = 0; count < sequenceLength; count++) {
>         rebootSequence.push(randint(1, 3))
>     }
>     for (let value of rebootSequence) {
>         // @highlight
>         if (value == 1) {
>             basic.showLeds(`
>                 . . # . .
>                 . . # . .
>                 # # # # #
>                 . . # . .
>                 . . # . .
>             `)
>         } else if (value == 2) {
>             basic.showLeds(`
>                 # . . . #
>                 . # . # .
>                 . . # . .
>                 . # . # .
>                 # . . . #
>             `)
>         } else {
>             basic.showLeds(`
>                 . # # # .
>                 . # . # .
>                 . # . # .
>                 . # # # .
>                 . . . . .
>             `)
>         }
>         basic.pause(500)
>         basic.clearScreen()
>         basic.pause(200)
>     }
>     playerPosition = 0
>     basic.showIcon(IconNames.Target)
>     acceptingInput = true
> })
> ```

> [!TASK]
>
> Write down your three-symbol key.

> [!TASK]
>
> Download the game and complete one reboot using the key.

> [!TASK]
>
> Hide the key and challenge someone else to learn the symbols.

**Test**

 Every symbol should always correspond to the same input. Each tap should still show its number, and a mistake, a restart and completing the code should work as before.
