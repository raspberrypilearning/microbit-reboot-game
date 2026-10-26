## Ignore taps while busy

Allow taps only when the micro:bit is ready for your answers.

> [!TASK]
>
> Create a variable called **acceptingInput**. It will remember whether taps should count.

> [!TASK]
>
> Add a set-variable block at the top of the button A event and select **acceptingInput**. You will set its value in the next task.
>
> ```microbit
> input.onButtonPressed(Button.A, function () {
>     acceptingInput = 0
> })
> ```
>
> Keep your existing button A blocks underneath it.

> [!TASK]
>
> Replace its number with `false`{:class='microbitlogic'} from `Logic`{:class='microbitlogic'} to stop taps counting while the code plays. True and false are **Boolean** values.
>
> ```microbit
> let rebootSequence: number[] = null
> input.onButtonPressed(Button.A, function () {
>     // @highlight
>     acceptingInput = false
>     rebootSequence = []
>     for (let count = 0; count < sequenceLength; count++) {
>         rebootSequence.push(randint(1, 3))
>     }
>     for (let value of rebootSequence) {
>         basic.showNumber(value)
>         basic.pause(500)
>         basic.clearScreen()
>         basic.pause(200)
>     }
>     playerPosition = 0
>     basic.showIcon(IconNames.Target)
> })
> ```

> [!TASK]
>
> Add the following block at the end of the button A event. Choose `true`{:class='microbitlogic'} to allow taps once the target appears.
>
> ```microbit
> let rebootSequence: number[] = null
> input.onButtonPressed(Button.A, function () {
>     acceptingInput = false
>     rebootSequence = []
>     for (let count = 0; count < sequenceLength; count++) {
>         rebootSequence.push(randint(1, 3))
>     }
>     for (let value of rebootSequence) {
>         basic.showNumber(value)
>         basic.pause(500)
>         basic.clearScreen()
>         basic.pause(200)
>     }
>     playerPosition = 0
>     basic.showIcon(IconNames.Target)
>     // @highlight
>     acceptingInput = true
> })
> ```

> [!TASK]
>
> Add an `if`{:class='microbitlogic'} block from `Logic`{:class='microbitlogic'} to your function. Put `acceptingInput`{:class='microbitvariables'} in its condition, then move all your existing function blocks inside it. Now taps are checked only when input is allowed.
>
> The empty condition looks like this.
>
> ```microbit
> function checkAnswer (answer: number) {
>     if (acceptingInput) {
>     }
> }
> ```
>
> Your whole function should then look like this.
>
> ```microbit
> let rebootSequence: number[] = null
> function checkAnswer (answer: number) {
>     if (acceptingInput) {
>         basic.showNumber(answer)
>         basic.pause(150)
>         basic.clearScreen()
>         if (answer == rebootSequence[playerPosition]) {
>             playerPosition += 1
>             if (playerPosition == sequenceLength) {
>                 basic.showIcon(IconNames.Yes)
>             }
>         } else {
>             basic.showIcon(IconNames.No)
>         }
>     }
> }
> ```

**Test**

Download your program.

- Press A and tap while the code plays. Your taps should not interrupt its numbers.
- Wait for the target, then tap a pin lead. Its number should appear.

Next you will also ignore taps while answering a tap and after a win.
