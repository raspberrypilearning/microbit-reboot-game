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
>     if (signal == 1) { // @highlight
>         basic.showLeds(`
>             . . # . .
>             . . # . .
>             # # # # #
>             . . # . .
>             . . # . .
>         `)
>     } else if (signal == 2) { // @highlight
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

**Test:** Every symbol should always correspond to the same input. Touch acknowledgement, failure, restarting and the five-signal win must still work as they did with numbers.
