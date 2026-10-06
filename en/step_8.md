## Generate a reboot code

Replace the fixed test list with five random signals.

> [!TASK]
>
> In `on start`, click the **–** on `array of 1 3 2` until it says `empty array`. Make a variable called `sequenceLength` and set it to `5` in `on start`.
>
> ```blocks
> let sequenceLength = 5
> let rebootSequence: number[] = []
> ```

> [!TASK]
>
> In the button A event, empty the old list, then use a `repeat` loop to add five random values from `1` to `3` before the code is displayed.
>
> To empty the list, right-click `set rebootSequence to empty array` in `on start`, choose **Duplicate**, and put the copy under `set acceptingInput to false`. `repeat` is in **Loops**: drop `sequenceLength` into it in place of the number. `add value to end` is in **Advanced** > **Arrays**, and `pick random` is in **Math**.
>
> ```blocks
> let rebootSequence: number[] = []
> function showSignal (signal: number) {
>     basic.showNumber(signal)
>     basic.pause(500)
>     basic.clearScreen()
>     basic.pause(200)
> }
> input.onButtonPressed(Button.A, function () {
>     acceptingInput = false
>     // @highlight
>     rebootSequence = []
>     // @highlight
>     for (let count = 0; count < sequenceLength; count++) {
>         rebootSequence.push(randint(1, 3))
>     }
>     for (let value of rebootSequence) {
>         showSignal(value)
>     }
>     playerPosition = 0
>     basic.showIcon(IconNames.Target)
>     acceptingInput = true
> })
> ```

**Test:** Press A several times. Every game should display exactly five values, and every value should be `1`, `2`, or `3`. Repeated values are allowed; the blank gap shows where one ends and the next begins.

> [!TIP]
>
> `repeat` runs the blocks inside it a set number of times. Here it runs five times, adding one random signal to the list each time. To make the code longer or shorter, change `sequenceLength` in `on start`.
