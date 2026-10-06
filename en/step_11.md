## Challenge: Replace numbers with symbols

Make the reboot harder by inventing a visual code.

> [!TASK]
>
> Design three clearly different 5×5 symbols. Decide which one represents each input, then replace the `show number` block inside `showSignal` with an `if`, `else if`, `else` choice.
>
> Here is one possible symbol set:
>
> ```blocks
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
> Write down your three-symbol key and download the game. Complete one reboot using the key, then hide it and challenge someone else to learn the symbols.

**Test:** Every symbol should always correspond to the same input. Each tap should still show its number, and a mistake, a restart and a five-signal win should work as before.
