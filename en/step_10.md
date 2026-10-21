## Challenge: Replace numbers with symbols

Make the reboot harder by inventing a visual code.

> [!TASK]
>
> Design three clearly different 5×5 symbols, and decide which one represents each input.

> [!TASK]
>
> In `on button A pressed`, replace the `show number` block inside the `for element value of rebootSequence` loop with an `if`, `else if`, `else` choice that shows your symbols.
>
> Here is one possible symbol set:
>
> ```microbit
> let rebootSequence: number[] = null
> input.onButtonPressed(Button.A, function () {
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

**Test:** Every symbol should always correspond to the same input. Each tap should still show its number, and a mistake, a restart and a five-signal win should work as before.
