## Make the first switch work

Show `1` the moment the `P0` lead touches the `GND` lead. This is also how you check your wiring, so do it before you write any of the game.

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

> [!DEBUG]
>
> Nothing at all means the circuit never closes. Check that one lead is on `P0` and the other on `GND`, and that both jaws are gripping the metal ring rather than the plastic beside it.
>
> A number appearing when you have not touched anything means two jaws are resting against each other.

> [!TIP]
>
> `on pin pressed` runs the moment the circuit closes, once per tap. It ignores the tiny bounces a metal contact makes as it closes, so a single tap never counts twice.
