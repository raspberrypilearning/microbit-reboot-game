## Generate a reboot code

Store five random signals in a list, then play them one after another.

> [!TASK]
>
> Make a **list** called `rebootSequence`. MakeCode calls lists **arrays**.
>
> Open **Advanced** > **Arrays** and drag `set list to array of` into `on start`. Click `list`, choose **Rename variable...** and call it `rebootSequence`. Click the **–** until it says `empty array`.
>
> ```microbit
> let rebootSequence: number[] = []
> ```

> [!TASK]
>
> Make a variable called `sequenceLength` and set it to `5` in `on start`. It decides how many signals are in each code.
>
> ```microbit
> let rebootSequence: number[] = []
> // @highlight
> let sequenceLength = 5
> ```

Next, make button A fill the list with five new random values, then play them.

> [!TASK]
>
> Right-click `set rebootSequence to empty array` in `on start` and choose **Duplicate**. Put the copy at the top of `on button A pressed`. This empties the old list.
>
> ```microbit
> let rebootSequence: number[] = null
> input.onButtonPressed(Button.A, function () {
>     // @highlight
>     rebootSequence = []
>     basic.showNumber(randint(1, 3))
>     basic.pause(500)
>     basic.clearScreen()
>     basic.pause(200)
> })
> ```

> [!TASK]
>
> Under it, add a `repeat` loop that adds a random value to the end of the list. `repeat` is in **Loops**: drop `sequenceLength` into it in place of the number. `add value to end` is in **Advanced** > **Arrays**: choose `rebootSequence` instead of `list`, then drag `pick random 1 to 3` out of `show number` and into `add value to end`.
>
> ```microbit
> let rebootSequence: number[] = null
> input.onButtonPressed(Button.A, function () {
>     rebootSequence = []
>     // @highlight
>     for (let count = 0; count < sequenceLength; count++) {
>         rebootSequence.push(randint(1, 3))
>     }
>     basic.showNumber(0)
>     basic.pause(500)
>     basic.clearScreen()
>     basic.pause(200)
> })
> ```

> [!TASK]
>
> From **Loops**, add a `for element value of list` block under the `repeat` loop and choose `rebootSequence` instead of `list`. Drag `show number` into it; the three blocks under it come too. Then drag the loop's `value` bubble into `show number`.
>
> ```microbit
> let rebootSequence: number[] = null
> input.onButtonPressed(Button.A, function () {
>     rebootSequence = []
>     for (let count = 0; count < sequenceLength; count++) {
>         rebootSequence.push(randint(1, 3))
>     }
>     // @highlight
>     for (let value of rebootSequence) {
>         basic.showNumber(value)
>         basic.pause(500)
>         basic.clearScreen()
>         basic.pause(200)
>     }
> })
> ```

**Test:** Press A several times. Every code should have exactly five values, and every value should be `1`, `2` or `3`. Repeated values are allowed; the blank gap shows where one ends and the next begins.

> [!TIP]
>
> A **list** keeps several values in order. `repeat` runs the blocks inside it a set number of times: here, once for each signal. To make the code longer or shorter, change `sequenceLength` in `on start`.
