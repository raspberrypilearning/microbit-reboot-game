## Generate a reboot code

Replace the fixed test list with five random signals.

> [!TASK]
>
> Change `rebootSequence` to an empty list and make `sequenceLength` equal `5`.
>
> ```blocks
> let sequenceLength = 5
> let rebootSequence: number[] = []
> ```

> [!TASK]
>
> In the button A event, empty the old list, then use a `repeat` loop to add five random values from `1` to `3` before the code is displayed.
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
>     rebootSequence = [] // @highlight
>     for (let count = 0; count < sequenceLength; count++) { // @highlight
>         rebootSequence.push(randint(1, 3))
>     }
>     for (let signal of rebootSequence) {
>         showSignal(signal)
>     }
>     playerPosition = 0
>     basic.showIcon(IconNames.Target)
>     acceptingInput = true
> })
> ```

**Test:** Press A several times. Every game should display exactly five values, and every value should be `1`, `2`, or `3`. Repeated values are allowed.

> [!TIP]
>
> `repeat` runs the blocks inside it a set number of times. Here it runs five times, adding one random signal to the list each time.
