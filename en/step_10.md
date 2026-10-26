## Check your taps

Compare each tap with the next number in the code.

> [!TASK]
>
> Add an `if`{:class='microbitlogic'} block from `Logic`{:class='microbitlogic'} inside your function. It will decide whether a tap matches.
>
> ```microbit
> let rebootSequence: number[] = null
> function checkAnswer (answer: number) {
>     if (true) {
>     }
> }
> ```

> [!TASK]
>
> Put an equals comparison from `Logic`{:class='microbitlogic'} into the condition. It checks whether two values match.
>
> ```microbit
> let rebootSequence: number[] = null
> function checkAnswer (answer: number) {
>     if (0 == 0) {
>     }
> }
> ```

> [!TASK]
>
> Drag the function’s `answer`{:class='microbitvariables'} bubble into the left side of the comparison.
>
> ```microbit
> let rebootSequence: number[] = null
> function checkAnswer (answer: number) {
>     if (answer == 0) {
>     }
> }
> ```

> [!TASK]
>
> Put the list’s `get value at`{:class='microbitarrays'} block on the right. Select **rebootSequence** and use **playerPosition** for the position. This selects the number your tap must match.
>
> ```microbit
> let rebootSequence: number[] = null
> function checkAnswer (answer: number) {
>     if (answer == rebootSequence[playerPosition]) {
>     }
> }
> ```

> [!TIP]
>
> List positions start at 0. The value at position 0 is the first number in your code.

> [!TASK]
>
> Add the following block to move to the next position after a correct answer.
>
> ```microbit
> let rebootSequence: number[] = null
> function checkAnswer (answer: number) {
>     if (answer == rebootSequence[playerPosition]) {
>         // @highlight
>         playerPosition += 1
>     }
> }
> ```

> [!TASK]
>
> Add the following condition after the position changes. It shows a tick when you have matched the whole code.
>
> ```microbit
> let rebootSequence: number[] = null
> function checkAnswer (answer: number) {
>     if (answer == rebootSequence[playerPosition]) {
>         playerPosition += 1
>         if (playerPosition == sequenceLength) {
>             basic.showIcon(IconNames.Yes)
>         }
>     }
> }
> ```

> [!TASK]
>
> Click **+** on the outer comparison to add an `else`{:class='microbitlogic'} branch. Add a cross there to show a wrong answer.
>
> ```microbit
> let rebootSequence: number[] = null
> function checkAnswer (answer: number) {
>     if (answer == rebootSequence[playerPosition]) {
>         playerPosition += 1
>         if (playerPosition == sequenceLength) {
>             basic.showIcon(IconNames.Yes)
>         }
>     } else {
>         basic.showIcon(IconNames.No)
>     }
> }
> ```

> [!TASK]
>
> Add the following blocks at the end of the button A event to start checking from the first number and show a target when it is your turn.
>
> ```microbit
> let rebootSequence: number[] = null
> input.onButtonPressed(Button.A, function () {
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
>     // @highlight
>     playerPosition = 0
>     // @highlight
>     basic.showIcon(IconNames.Target)
> })
> ```

> [!TASK]
>
> Replace the number display inside each pin event with a function call from `Functions`{:class='microbitfunctions'}. Give each call the matching number.
>
> ```microbit
> // @hide
> function checkAnswer (answer: number) {
>     basic.showNumber(answer)
> }
> input.onPinPressed(TouchPin.P0, function () {
>     checkAnswer(1)
> })
> ```
>
> ```microbit
> // @hide
> function checkAnswer (answer: number) {
>     basic.showNumber(answer)
> }
> input.onPinPressed(TouchPin.P1, function () {
>     checkAnswer(2)
> })
> ```
>
> ```microbit
> // @hide
> function checkAnswer (answer: number) {
>     basic.showNumber(answer)
> }
> input.onPinPressed(TouchPin.P2, function () {
>     checkAnswer(3)
> })
> ```

**Test**

Download your program, press A and repeat the code with the pin leads.

- A correct tap before the last number leaves the display unchanged. Feedback for each tap comes next.
- The final correct tap should show a tick.
- Press A again and enter a wrong first number. A cross should appear.
