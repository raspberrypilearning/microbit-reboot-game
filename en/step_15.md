## Grow the sequence

Add one new term after every completed round while preserving the earlier terms.

> [!TASK]
>
> Make a function called `start round`. Move the code that adds and displays signals from button A into it. Leave only the list reset and function call in button A.
>
> ```blocks
> function startRound () {
>     acceptingInput = false
>     rebootSequence.push(randint(1, 3))
>     for (let signal of rebootSequence) {
>         showSignal(signal)
>     }
>     playerPosition = 0
>     basic.showIcon(IconNames.Target)
>     acceptingInput = true
> }
> input.onButtonPressed(Button.A, function () {
>     rebootSequence = []
>     startRound()
> })
> ```

> [!TASK]
>
> In `check answer`, start another round after the player completes the current sequence. Leave the wrong-answer branch unchanged.
>
> ```blocks
> if (playerPosition == rebootSequence.length) {
>     basic.showIcon(IconNames.Yes)
>     basic.pause(500)
>     startRound()
> } else {
>     basic.showIcon(IconNames.SmallDiamond)
>     basic.pause(150)
>     acceptingInput = true
> }
> ```

**Test:** Press A and complete three rounds. The sequences should contain one, then two, then three terms. Every new sequence must begin with all the terms from the previous round in the same order.
