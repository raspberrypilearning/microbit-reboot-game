## Generate a reboot code

Replace the fixed test list with five random signals.

> [!TASK]
>
> In `on start`, click the **–** on `array of 1 3 2` until it says `empty array`.
>
> ```microbit
> let rebootSequence: number[] = []
> ```

> [!TASK]
>
> Make a variable called `sequenceLength` and set it to `5` in `on start`.
>
> ```microbit
> let rebootSequence: number[] = []
> // @highlight
> let sequenceLength = 5
> ```

Next, make button A fill the list with five new random values before the code is displayed.

> [!TASK]
>
> Right-click `set rebootSequence to empty array` in `on start` and choose **Duplicate**. Put the copy in `on button A pressed`, under `set acceptingInput to false`. This empties the old list.
>
> ```microbit
> let rebootSequence: number[] = null
> // @hide
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
>     for (let value of rebootSequence) {
>         showSignal(value)
>     }
>     playerPosition = 0
>     basic.showIcon(IconNames.Target)
>     acceptingInput = true
> })
> ```

> [!TASK]
>
> Under it, add a `repeat` loop that adds a random value from `1` to `3` to the end of the list. `repeat` is in **Loops**: drop `sequenceLength` into it in place of the number. `add value to end` is in **Advanced** > **Arrays**, and `pick random` is in **Math**.
>
> ```microbit
> let rebootSequence: number[] = null
> // @hide
> function showSignal (signal: number) {
>     basic.showNumber(signal)
>     basic.pause(500)
>     basic.clearScreen()
>     basic.pause(200)
> }
> input.onButtonPressed(Button.A, function () {
>     acceptingInput = false
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
