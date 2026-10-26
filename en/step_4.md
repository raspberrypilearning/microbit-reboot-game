## Detect the other switches

Make the other two pin leads display their numbers.

> [!TASK]
>
> Add the following blocks so a tap between P1 and GND displays 2.
>
> ```microbit
> input.onPinPressed(TouchPin.P1, function () {
>     basic.showNumber(2)
> })
> ```

> [!TASK]
>
> Add the following blocks so a tap between P2 and GND displays 3.
>
> ```microbit
> input.onPinPressed(TouchPin.P2, function () {
>     basic.showNumber(3)
> })
> ```

**Test**

Download your program. Briefly connect each pin lead to GND and check that the correct number appears.

> [!DEBUG]
>
> - Wrong number? Check that each pin event has the matching number.
> - No number? Check that there is an event for that pin and that its lead is firmly connected.
