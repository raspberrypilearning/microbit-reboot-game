## Challenge: Replace numbers with symbols

Make the reboot harder by inventing a visual code.

> [!TASK]
>
> Design three clearly different 5×5 symbols, and decide which one represents each input.

> [!TASK]
>
> Replace the `show number` block inside `showSignal` with an `if`, `else if`, `else` choice that shows your symbols.
>
> Here is one possible symbol set:
>
> ```microbit
> function showSignal (signal: number) {
>     // @highlight
>     if (signal == 1) {
>         basic.showLeds(`
>             . . # . .
>             . . # . .
>             # # # # #
>             . . # . .
>             . . # . .
>         `)
>     } else if (signal == 2) {
>         basic.showLeds(`
>             # . . . #
>             . # . # .
>             . . # . .
>             . # . # .
>             # . . . #
>         `)
>     } else {
>         basic.showLeds(`
>             . # # # .
>             . # . # .
>             . # . # .
>             . # # # .
>             . . . . .
>         `)
>     }
>     basic.pause(500)
>     basic.clearScreen()
>     basic.pause(200)
> }
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
