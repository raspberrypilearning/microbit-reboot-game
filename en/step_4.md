## Detect the other switches

Add the inputs for `2` and `3`.

> [!TASK]
>
> Add the highlighted blocks so a tap on P1 displays 2 and a tap on P2 displays 3.
>
> ```microbit
> input.onPinPressed(TouchPin.P0, function () {
>     basic.showNumber(1)
> })
> // @highlight
> input.onPinPressed(TouchPin.P1, function () {
>     basic.showNumber(2)
> })
> // @highlight
> input.onPinPressed(TouchPin.P2, function () {
>     basic.showNumber(3)
> })
> ```

**Test:** Download the program. Touch `P0`, `P1` and `P2` to `GND`, one at a time, to enter `1`, `2`, `3`, then `3`, `2`, `1`. Every separate tap should display the intended number exactly once. All three contacts must work now, because everything after this step relies on them.

> [!DEBUG]
>
> A contact that gives the wrong number has two leads swapped on the edge connector.
>
> A contact that does nothing may have no block watching its pin. If you made the second and third blocks by duplicating the first, check that you changed `P0` in each one.
>
> If two contacts show the same number, check the number inside each block.
