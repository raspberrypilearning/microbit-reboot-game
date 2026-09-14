## Check the first answer

Compare a bare-lead input with the first item in the list.

> [!TASK]
>
> Make a variable called `player position` and set it to `0` after button A displays the sequence.
>
> Make a function called `check answer` with a number parameter called `answer`. If `answer` matches the item at `player position` in `reboot sequence`, show a tick. Otherwise, show a cross.
>
> ```blocks
> let playerPosition = 0
> function checkAnswer (answer: number) {
>     if (answer == rebootSequence[playerPosition]) {
>         basic.showIcon(IconNames.Yes)
>     } else {
>         basic.showIcon(IconNames.No)
>     }
> }
> ```

> [!TASK]
>
> Update button A so it resets `player position` and displays a target after the sequence. Replace the `show signal` call in each pin event with `check answer`, passing that pin's number.
>
> ```blocks
> input.onButtonPressed(Button.A, function () {
>     for (let signal of rebootSequence) {
>         showSignal(signal)
>     }
>     playerPosition = 0
>     basic.showIcon(IconNames.Target)
> })
> input.onPinPressed(TouchPin.P0, function () {
>     checkAnswer(1)
> })
> input.onPinPressed(TouchPin.P1, function () {
>     checkAnswer(2)
> })
> input.onPinPressed(TouchPin.P2, function () {
>     checkAnswer(3)
> })
> ```

> [!TIP]
>
> List positions start at `0`, so `player position` `0` selects the first item.

**Test:** Press A and watch `1`, `3`, `2`. Touch the `P0` jaw to `GND`: a tick should appear. Press A again, then touch `P1` or `P2` to `GND` first: a cross should appear.
