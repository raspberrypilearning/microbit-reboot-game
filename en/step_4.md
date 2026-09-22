## Make the first switch work

Show `1` the moment the `P0` lead touches the `GND` lead.

> [!TASK]
>
> From the `Input` menu, add an `on pin P0 pressed` block. Inside it, show the number `1`.
>
> ```blocks
> input.onPinPressed(TouchPin.P0, function () {
>     basic.showNumber(1)
> })
> ```

**Test:** Download the program. Tap the free `P0` jaw against the free `GND` jaw five times, separating them after every tap. Each tap should show `1` once. Hold the jaws together for a moment and check that one hold is not counted repeatedly.

> [!TIP]
>
> The wire tester read the pins over and over, because it had to show their state at every moment. Your game only needs to know the moment a contact closes, and `on pin pressed` reports exactly that, once per tap.
