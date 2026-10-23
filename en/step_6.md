## Generate a reboot code

Store random signals in a list, then play them one after another. You choose how long the code will be.

> [!TASK]
>
> Create a variable called **sequenceLength**. Add the following block to choose how many signals are in each code.
>
> You can use any whole number greater than 0 instead of 5. Try 3 for a shorter code or 8 for a longer challenge. Choose a length you want to try!
>
> ```microbit
> let sequenceLength = 5
> ```

> [!TASK]
>
> Add the highlighted block to start each game with an empty list for the reboot code. Name the list **rebootSequence**.
>
> MakeCode calls lists **arrays**. Find the blocks in **Advanced** > **Arrays**. Use **Rename variable...** to name your list, and click **–** to remove its starting items.
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
> Add the highlighted blocks to fill the list with random signals. The loop repeats for your chosen code length. Move the random number block from the display into the list-building loop, as shown.
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
> Add the highlighted loop to play every signal in the list, in order. Move your display and pause blocks inside it, as shown. Find the loop in **Loops**.
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

**Test:** Press A several times. Every code should have the number of values you chose for `sequenceLength`, and every value should be `1`, `2` or `3`. Repeated values are allowed; the blank gap shows where one ends and the next begins.

> [!TIP]
>
> A **list** keeps several values in order. `repeat` runs the blocks inside it a set number of times: here, once for each signal. To make the code longer or shorter, change `sequenceLength` in `on start`.
