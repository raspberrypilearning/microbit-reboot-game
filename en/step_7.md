## Make the input reliable

Ignore contacts during playback and prevent one held switch from being counted twice.

> [!TASK]
>
> Make a Boolean variable called `accepting input`. Make a `remember switch states` function. Lock input before playback, then remember the switches and unlock input when the target appears.
>
> ```blocks
> let acceptingInput = false
> function rememberSwitchStates () {
>     p0WasClosed = pins.digitalReadPin(DigitalPin.P0) == 0
>     p1WasClosed = pins.digitalReadPin(DigitalPin.P1) == 0
>     p2WasClosed = pins.digitalReadPin(DigitalPin.P2) == 0
> }
> input.onButtonPressed(Button.A, function () {
>     acceptingInput = false
>     for (let signal of rebootSequence) {
>         showSignal(signal)
>     }
>     playerPosition = 0
>     rememberSwitchStates()
>     basic.showIcon(IconNames.Target)
>     acceptingInput = true
> })
> ```

> [!TASK]
>
> Lock `check answer` while it checks one value. In `forever`, store at most one new answer, update every remembered switch state, and only then call `check answer`.
>
> ```blocks
> function checkAnswer (answer: number) {
>     if (acceptingInput) {
>         acceptingInput = false
>         if (answer == rebootSequence[playerPosition]) {
>             playerPosition += 1
>             if (playerPosition == rebootSequence.length) {
>                 basic.showIcon(IconNames.Yes)
>             } else {
>                 basic.showIcon(IconNames.Target)
>                 acceptingInput = true
>             }
>         } else {
>             basic.showIcon(IconNames.No)
>         }
>     }
> }
> ```
>
> ```blocks
> basic.forever(function () {
>     let p0IsClosed = pins.digitalReadPin(DigitalPin.P0) == 0
>     let p1IsClosed = pins.digitalReadPin(DigitalPin.P1) == 0
>     let p2IsClosed = pins.digitalReadPin(DigitalPin.P2) == 0
>     let recognisedAnswer = 0
>     if (acceptingInput) {
>         if (p0IsClosed && !(p0WasClosed)) {
>             recognisedAnswer = 1
>         } else if (p1IsClosed && !(p1WasClosed)) {
>             recognisedAnswer = 2
>         } else if (p2IsClosed && !(p2WasClosed)) {
>             recognisedAnswer = 3
>         }
>     }
>     p0WasClosed = p0IsClosed
>     p1WasClosed = p1IsClosed
>     p2WasClosed = p2IsClosed
>     if (recognisedAnswer > 0) {
>         checkAnswer(recognisedAnswer)
>     }
>     basic.pause(20)
> })
> ```

**Test:** Hold one contact closed for a moment; it should count once. Touch contacts during playback; they should be ignored. Enter a wrong answer and touch again; the cross should remain.
