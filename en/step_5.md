## Show a random signal

Make button A flash a random signal, then leave a short blank gap.

> [!TASK]
>
> Add an `on button A pressed` block. Put a `show number` block inside it. From **Math**, drop `pick random 0 to 10` into `show number`, and change the numbers to `1` and `3`.
>
> ```microbit
> input.onButtonPressed(Button.A, function () {
>     basic.showNumber(randint(1, 3))
> })
> ```

> [!TASK]
>
> Under `show number`, add a `pause (ms)` of `500`, a `clear screen` block, and a `pause (ms)` of `200`. `clear screen` is in **Basic**.
>
> ```microbit
> input.onButtonPressed(Button.A, function () {
>     basic.showNumber(randint(1, 3))
>     // @highlight
>     basic.pause(500)
>     // @highlight
>     basic.clearScreen()
>     // @highlight
>     basic.pause(200)
> })
> ```

**Test:** Download the program and press A several times. Each press should flash `1`, `2` or `3`, then clear the display.

> [!TIP]
>
> The blank gap matters once the micro:bit shows a whole code: it is how the player tells `2`, `2` apart from a single `2`.
