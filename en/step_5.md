## Show a random signal

Make button A flash a random signal, then leave a short blank gap.

> [!TASK]
>
> Add the following blocks so pressing button A displays a random number from 1 to 3. Find the random number block in **Math**.
>
> ```microbit
> input.onButtonPressed(Button.A, function () {
>     basic.showNumber(randint(1, 3))
> })
> ```

> [!TASK]
>
> Add the highlighted blocks to pause after the signal, then clear the display and leave a short blank gap. Find these blocks in **Basic**.
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
