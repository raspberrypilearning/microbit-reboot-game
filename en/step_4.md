## Add the other switches

Connect and test the inputs for `2` and `3`.

> [!TASK]
>
> Disconnect all power. Leave the leads on `GND` and `P0`, then connect another lead to `P1` and another to `P2`. Keep all four free jaws apart.

> [!TASK]
>
> Add remembered-state variables and pull-ups for `P1` and `P2`. Expand `forever` to read all three pins and show the matching number.
>
> ```blocks
> let p0WasClosed = false
> let p1WasClosed = false
> let p2WasClosed = false
> pins.setPull(DigitalPin.P0, PinPullMode.PullUp)
> pins.setPull(DigitalPin.P1, PinPullMode.PullUp)
> pins.setPull(DigitalPin.P2, PinPullMode.PullUp)
> basic.forever(function () {
>     let p0IsClosed = pins.digitalReadPin(DigitalPin.P0) == 0
>     let p1IsClosed = pins.digitalReadPin(DigitalPin.P1) == 0
>     let p2IsClosed = pins.digitalReadPin(DigitalPin.P2) == 0
>     if (p0IsClosed && !(p0WasClosed)) {
>         basic.showNumber(1)
>     } else if (p1IsClosed && !(p1WasClosed)) {
>         basic.showNumber(2)
>     } else if (p2IsClosed && !(p2WasClosed)) {
>         basic.showNumber(3)
>     }
>     p0WasClosed = p0IsClosed
>     p1WasClosed = p1IsClosed
>     p2WasClosed = p2IsClosed
>     basic.pause(20)
> })
> ```

**Test:** Download the program. Touch `P0`, `P1` and `P2` to `GND`, one at a time, to enter `1`, `2`, `3`, then `3`, `2`, `1`. Every separate tap should display the intended number exactly once.
