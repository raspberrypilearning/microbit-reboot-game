## Check your wiring

Before you write any of the game, prove that all three switches work. Then if a tap goes wrong later, you will know the fault is in your code and not in your wiring.

> [!TASK]
>
> Open the [wire tester](https://makecode.microbit.org/){:target="_blank"} in a second MakeCode tab and download it to your micro:bit. It shows a dash while every switch is open, and the number of whichever switch is closed.
>
> ```blocks
> let switchNumber = 0
> pins.setPull(DigitalPin.P0, PinPullMode.PullUp)
> pins.setPull(DigitalPin.P1, PinPullMode.PullUp)
> pins.setPull(DigitalPin.P2, PinPullMode.PullUp)
> basic.forever(function () {
>     if (pins.digitalReadPin(DigitalPin.P0) == 0) {
>         switchNumber = 1
>     } else if (pins.digitalReadPin(DigitalPin.P1) == 0) {
>         switchNumber = 2
>     } else if (pins.digitalReadPin(DigitalPin.P2) == 0) {
>         switchNumber = 3
>     } else {
>         switchNumber = 0
>     }
>     if (switchNumber == 0) {
>         basic.showLeds(`
>             . . . . .
>             . . . . .
>             . # # # .
>             . . . . .
>             . . . . .
>             `)
>     } else {
>         basic.showNumber(switchNumber)
>     }
> })
> ```

> [!TASK]
>
> Hold the `GND` jaw against the `P0` jaw and check that `1` appears. Repeat with `P1` for `2` and `P2` for `3`. Separate the jaws each time and check the dash comes back.

**Test:** Every switch must give its own number, and only that number. A switch that never responds has a lead on the wrong ring or a jaw that is not gripping. A switch that reads the wrong number has two leads swapped.

> [!TIP]
>
> Keep this tab open. If a tap stops working later in the project, download the wire tester again to find out whether the problem is the hardware or the program.
