## Play the reboot code

Show every number in your list, one after another.

> [!TASK]
>
> Add `for element value of list`{:class='microbitloops'} from `Loops`{:class='microbitloops'} underneath the repeat loop. It will work through the saved numbers in order.

> [!TASK]
>
> Choose **rebootSequence** in the new loop’s list menu.
>
> ```microbit
> let rebootSequence: number[] = null
> input.onButtonPressed(Button.A, function () {
>     rebootSequence = []
>     for (let count = 0; count < sequenceLength; count++) {
>         rebootSequence.push(randint(1, 3))
>     }
>     for (let value of rebootSequence) {
>     }
>     basic.showNumber(0)
>     basic.pause(500)
>     basic.clearScreen()
>     basic.pause(200)
> })
> ```

> [!TASK]
>
> Move your four display and pause blocks inside the new loop so they run for each number.
>
> ```microbit
> let rebootSequence: number[] = null
> input.onButtonPressed(Button.A, function () {
>     rebootSequence = []
>     for (let count = 0; count < sequenceLength; count++) {
>         rebootSequence.push(randint(1, 3))
>     }
>     for (let value of rebootSequence) {
>         basic.showNumber(0)
>         basic.pause(500)
>         basic.clearScreen()
>         basic.pause(200)
>     }
> })
> ```

> [!TASK]
>
> Drag the loop’s `value`{:class='microbitvariables'} bubble into `show number`{:class='microbitbasic'}. The display will now show each saved number.
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
> })
> ```

**Test**

Download your program and press A several times.

- Count the numbers. Each code should match your chosen length.
- Each number should be 1, 2 or 3.
- Repeated numbers should have a blank gap between them.
