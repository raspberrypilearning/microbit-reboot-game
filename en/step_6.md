## Test all three inputs

Give each new circuit its own input event and number.

> [!TASK]
>
> Add two more `on pin pressed` events. Make `P1` show `2` and `P2` show `3`.
>
> ```blocks
> input.onPinPressed(TouchPin.P0, function () {
>     basic.showNumber(1)
> })
> input.onPinPressed(TouchPin.P1, function () {
>     basic.showNumber(2)
> })
> input.onPinPressed(TouchPin.P2, function () {
>     basic.showNumber(3)
> })
> ```

> [!TASK]
>
> Download the program to the micro:bit and return to battery power. Use the free `GND` jaw as the common contact. When the test below passes, disconnect the battery and remove all four leads before building the wearable controller.

**Test:** Touch the free `P0`, `P1`, and `P2` jaws to the free `GND` jaw, one at a time. Enter `1`, `2`, `3`, then `3`, `2`, `1`. Check that every contact displays the intended number exactly once before disconnecting the circuit.
