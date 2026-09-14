## Start with a random signal

Replace the fixed test sequence with one unpredictable value.

> [!TASK]
>
> Change the starting value of `reboot sequence` to an empty list. At the start of the button A event, empty the list again and add a random number from `1` to `3`.
>
> ```blocks
> let rebootSequence: number[] = []
> input.onButtonPressed(Button.A, function () {
>     acceptingInput = false
>     rebootSequence = []
>     rebootSequence.push(randint(1, 3))
>     for (let signal of rebootSequence) {
>         showSignal(signal)
>     }
>     playerPosition = 0
>     basic.showIcon(IconNames.Target)
>     acceptingInput = true
> })
> ```

> [!TIP]
>
> Emptying the list starts a new game. `add value to end` stores one random signal without replacing any value already there.

**Test:** Press A several times. Each new game should show exactly one number, and that number should always be `1`, `2`, or `3`.
