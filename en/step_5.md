## Show a random number

Make button A choose a number for you to remember.

> [!TASK]
>
> Add the following blocks to display a number when you press A. Find the button event in `Input`{:class='microbitinput'} and the display block in `Basic`{:class='microbitbasic'}.
>
> ```microbit
> input.onButtonPressed(Button.A, function () {
>     basic.showNumber(0)
> })
> ```

> [!TASK]
>
> Add `pick random`{:class='microbitmath'} from `Math`{:class='microbitmath'} inside the number space. Set its range from 1 to 3 so each press chooses a random number.
>
> ```microbit
> input.onButtonPressed(Button.A, function () {
>     basic.showNumber(randint(1, 3))
> })
> ```

> [!TASK]
>
> Add the following blocks from `Basic`{:class='microbitbasic'} after the number to pause, clear the display, and leave a short blank gap.
>
> ```microbit
> input.onButtonPressed(Button.A, function () {
>     basic.showNumber(randint(1, 3))
>     basic.pause(500)
>     basic.clearScreen()
>     basic.pause(200)
> })
> ```

**Test**

Download your program and press A several times. Each press should flash 1, 2 or 3 at random, then clear the display. The same number may appear again.

> [!TIP]
>
> The blank gap helps you spot repeated numbers. When the code contains two 2s in a row, you will see two separate flashes.
