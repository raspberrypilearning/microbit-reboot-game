## Challenge: Replace numbers with symbols

Make the reboot harder by creating a visual code that the player must learn.

> [!TASK]
>
> Design three clearly different 5×5 symbols. Decide which one represents each input number, then replace `show number signal` inside `show signal` with an `if`, `else if`, `else` choice that displays your symbols.
>
> Here is one possible symbol set. You can design your own.
>
> ```blocks
> function showSignal (signal: number) {
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
> Write down your three-symbol key and download the game. Use the key to complete a reboot, then hide it and challenge someone else to learn the signals.

**Test:** Every displayed symbol should always correspond to the same input. Correct sequences, wrong answers, scoring, restarting, and the five-term win must still work exactly as they did with numbers.
