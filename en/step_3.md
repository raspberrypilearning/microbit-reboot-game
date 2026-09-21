## Make the first switch work

Detect the moment when the `P0` lead touches the `GND` lead.

> [!TASK]
>
> Make a Boolean variable called `p0 was closed` and set it to `false`. Set the pull of `P0` to `up`.
>
> ```blocks
> let p0WasClosed = false
> pins.setPull(DigitalPin.P0, PinPullMode.PullUp)
> ```

> [!TASK]
>
> In a `forever` loop, read `P0`. Show `1` only when the circuit has just changed from open to closed, then remember its latest state.
>
> ```blocks
> basic.forever(function () {
>     let p0IsClosed = pins.digitalReadPin(DigitalPin.P0) == 0
>     if (p0IsClosed && !(p0WasClosed)) {
>         basic.showNumber(1)
>     }
>     p0WasClosed = p0IsClosed
>     basic.pause(20)
> })
> ```

**Test:** Download the program. Tap the free `P0` jaw against the free `GND` jaw five times, separating them after every tap. Each tap should show `1` once. Hold the jaws together briefly and check that one hold is not counted repeatedly.

> [!TIP]
>
> The pull-up keeps an open input at `1`. Closing the circuit to `GND` changes the reading to `0`. Remembering the previous reading lets the program detect one new closure.
