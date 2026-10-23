## Make the first switch work

Show `1` when the `P0` lead taps the `GND` lead. This also checks your wiring.

> [!TASK]
>
> Add the following blocks to display 1 when the P0 lead taps the GND lead. Find the pin event in **Input**.
>
> ```microbit
> input.onPinPressed(TouchPin.P0, function () {
>     basic.showNumber(1)
> })
> ```

**Test:** Download the program. Tap the free `P0` jaw against the free `GND` jaw and pull them apart straight away. `1` should appear as the jaws come apart.

Press the reset button on the back of the micro:bit so that `A` shows again. This time, hold the jaws together for two seconds before pulling them apart. Nothing should appear, because a touch longer than a second does not count as a tap.

> [!DEBUG]
>
> If nothing appears after a quick tap, the circuit never closes. Check that one lead is on `P0` and the other on `GND`, and that both jaws are gripping the metal ring rather than the plastic beside it.
>
> A number appearing when you have not touched anything means two jaws are resting against each other.

> [!TIP]
>
> `on pin pressed` runs when the two contacts come apart, and only if they were touching for less than a second. That is why every answer in the game is a quick tap.
