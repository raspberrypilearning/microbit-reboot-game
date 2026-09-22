## Detect the other switches

Add the inputs for `2` and `3`.

> [!TASK]
>
> Add an `on pin pressed` block for `P1` and another for `P2`. Change the pin in each one, and show `2` and `3`.
>
> ```blocks
> input.onPinPressed(TouchPin.P0, function () {
>     basic.showNumber(1)
> })
> input.onPinPressed(TouchPin.P1, function () { // @highlight
>     basic.showNumber(2)
> })
> input.onPinPressed(TouchPin.P2, function () { // @highlight
>     basic.showNumber(3)
> })
> ```

**Test:** Download the program. Touch `P0`, `P1` and `P2` to `GND`, one at a time, to enter `1`, `2`, `3`, then `3`, `2`, `1`. Every separate tap should display the intended number exactly once. All three contacts must work now, because everything after this step relies on them.

> [!DEBUG]
>
> A contact that gives the wrong number has two leads swapped on the edge connector.
>
> If two contacts give the same number, check the pin in each block. If you built the second and third by duplicating the first, it is easy to leave both watching `P0`, and that looks exactly like a broken wire.
