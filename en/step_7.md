## Make a signal function

Put the display instructions in one reusable function. Keep testing with the bare leads: touch the free `P0`, `P1`, or `P2` jaw to the free `GND` jaw whenever you need to enter `1`, `2`, or `3`.

> [!TASK]
>
> Open **Functions**, choose **Make a Function**, and call it `show signal`. Add a number parameter called `signal`.
>
> Make the function show its `signal`, wait for `500` milliseconds, clear the screen, and wait for `200` milliseconds. The blank gap separates repeated numbers.
>
> ```blocks
> function showSignal (signal: number) {
>     basic.showNumber(signal)
>     basic.pause(500)
>     basic.clearScreen()
>     basic.pause(200)
> }
> ```

> [!TASK]
>
> Replace the `show number` block in each pin event with a call to `show signal`. Pass `1`, `2`, or `3` to match the pin.
>
> ```blocks
> input.onPinPressed(TouchPin.P0, function () {
>     showSignal(1)
> })
> input.onPinPressed(TouchPin.P1, function () {
>     showSignal(2)
> })
> input.onPinPressed(TouchPin.P2, function () {
>     showSignal(3)
> })
> ```

> [!TIP]
>
> A **parameter** gives a function a value to use. One function can display any of the three signals, so you do not need three copies of the same display code.

**Test:** Download and enter `1`, `1`, `2`, `3`. Each number should disappear before the next number appears.
