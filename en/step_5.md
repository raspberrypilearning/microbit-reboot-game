## Play a test code

Use a function and a list to display a short test sequence.

> [!TASK]
>
> Make a function called `show signal` with a number parameter called `signal`. Show the value, wait, clear the display, and leave a short blank gap.
>
> ```blocks
> function showSignal (signal: number) {
>     basic.showNumber(signal)
>     basic.pause(500)
>     basic.clearScreen()
>     basic.pause(200)
> }
> ```

> [!TASK]
>
> Make a list called `reboot sequence` containing `1`, `3`, and `2`. When button A is pressed, use a `for element` loop to pass every item to `show signal`.
>
> ```blocks
> let rebootSequence = [1, 3, 2]
> input.onButtonPressed(Button.A, function () {
>     for (let signal of rebootSequence) {
>         showSignal(signal)
>     }
> })
> ```

**Test:** Press A. The display should show `1`, then `3`, then `2`, with a clear gap between values. Repeated numbers will also be separated by this gap later.

> [!TIP]
>
> A **list** keeps several related values in order. A function parameter lets the same display code work with every value in the list.
