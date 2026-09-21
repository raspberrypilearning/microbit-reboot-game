## Start the controller

Create the MakeCode project, then connect the first pair of test leads.

> [!TASK]
>
> Open [Microsoft MakeCode for micro:bit](https://makecode.microbit.org/){:target="_blank"} and create a project called `Reboot Sequence`.
>
> In `on start`, show the string `A`. Download the program to your micro:bit.
>
> ```blocks
> basic.showString("A")
> ```

> [!TASK]
>
> Disconnect the USB cable and battery pack. Connect one crocodile lead to `GND` and another to `P0`. Arrange the free metal jaws so they cannot touch accidentally.

**Test:** Reconnect USB and reset the micro:bit. `A` should appear and stay on the display. Gently move both leads; they should remain attached to the correct rings without touching `3V` or a neighbouring ring.
