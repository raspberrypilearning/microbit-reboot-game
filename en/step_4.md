## Test the first circuit

Make pin `P0` respond when its bare test lead touches the `GND` lead.

> [!TASK]
>
> From **Input**, add `on pin P0 pressed`. Put `show number 1` inside it.
>
> ```blocks
> input.onPinPressed(TouchPin.P0, function () {
>     basic.showNumber(1)
> })
> ```

> [!TASK]
>
> Download the updated program. Disconnect the USB cable and connect the battery pack.

**Test:** Hold the insulated covers and tap the free metal jaw from `P0` against the free metal jaw from `GND`, then separate them. The display should show `1` once. Repeat the test at least five times.

> [!TIP]
>
> Touching the two metal jaws closes the circuit between `P0` and `GND`. The pin event is the program's **input**; the number on the LEDs is its **output**.
