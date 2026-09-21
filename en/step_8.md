## Generate a reboot code

Replace the fixed test list with five random signals.

> [!TASK]
>
> Change `reboot sequence` to an empty list and make `sequence length` equal `5`. Make a `start game` function that empties the old list, adds five random values from `1` to `3`, and displays them.
>
> ```microbit
> let sequenceLength = 5
> let rebootSequence: number[] = []
> function startGame () {
>     acceptingInput = false
>     rebootSequence = []
>     for (let count = 0; count < sequenceLength; count++) {
>         rebootSequence.push(randint(1, 3))
>     }
>     for (let signal of rebootSequence) {
>         showSignal(signal)
>     }
>     playerPosition = 0
>     rememberSwitchStates()
>     basic.showIcon(IconNames.Target)
>     acceptingInput = true
> }
> ```

> [!TASK]
>
> Replace the code inside the button A event with a call to `start game`.
>
> ```microbit
> input.onButtonPressed(Button.A, function () {
>     startGame()
> })
> ```

**Test:** Press A several times. Every game should display exactly five values, and every value should be `1`, `2`, or `3`. Repeated values are allowed.
