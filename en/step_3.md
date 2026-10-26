## Make the first switch work

Connect the leads and make your first tap display a number.

> [!INFO]
>
> Never connect 3V to GND. Keep clips clear of neighbouring rings.

> [!TASK]
>
> Disconnect the USB cable and battery pack before adding the leads.

> [!TASK]
>
> Connect one crocodile lead to GND, one to P0, one to P1 and one to P2.
>
> ![Four leads connected to 0, 1, 2 and GND. The 3V ring is left clear.](images/leads-connected.jpg){:width="450px"}

> [!TASK]
>
> Spread the free metal jaws apart so they cannot connect accidentally.

> [!TASK]
>
> Add the following blocks to display 1 when the P0 lead taps the GND lead. Find the pin event in `Input`{:class='microbitinput'}.
>
> ```microbit
> input.onPinPressed(TouchPin.P0, function () {
>     basic.showNumber(1)
> })
> ```

> [!TASK]
>
> Reconnect USB and download your program.

**Test**

Quickly connect the free P0 jaw to the free GND jaw, then pull them apart. The display should show 1.

> [!TASK]
>
> Try a longer connection. Reset the micro:bit, then hold the jaws together for two seconds before pulling them apart. A should stay on the display.
>
> `on pin pressed`{:class='microbitinput'} responds when the contacts separate, but only if they were connected for less than a second. Use quick taps to play.

> [!DEBUG]
>
> If a quick tap does nothing, check that the clips grip the metal rings at P0 and GND.
>
> If a number appears by itself, check that the free jaws are not resting against each other.
