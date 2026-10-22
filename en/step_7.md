## Check the player's taps

Check each tap against the next number in the code.

> [!TASK]
>
> Make a variable called `playerPosition`. It remembers which item in the list the player must match next.

Next, make a function called `checkAnswer`. A **function** is a named group of blocks you can use from several places.

> [!TASK]
>
> Click **Advanced** at the bottom of the list of block menus to see more menus. Click **Functions**, then **Make a Function...**, and name the function `checkAnswer`.

> [!TASK]
>
> Click **Number** to give the function a **parameter**: a value you hand to the function each time you use it. Click the new parameter's name, change it to `answer`, then click **Done**.

> [!TASK]
>
> Add these blocks to `checkAnswer`. They compare the answer with the item at `playerPosition`, move on to the next item after a correct answer, and show a tick once `playerPosition` reaches `sequenceLength`.
>
> `get value at` is in **Advanced** > **Arrays**. To give an `if` block an `else`, click the **+** at its bottom edge.
>
> ```microbit
> let rebootSequence: number[] = null
> let playerPosition = 0
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
> After button A plays the code, reset `playerPosition` and show a target.
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
> In each `on pin pressed` block, replace `show number` with a `call checkAnswer` block from **Functions**, and type in the matching number.
>
> ```microbit
> let rebootSequence: number[] = null
> // @hide
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
> input.onPinPressed(TouchPin.P0, function () {
>     // @highlight
>     checkAnswer(1)
> })
> input.onPinPressed(TouchPin.P1, function () {
>     // @highlight
>     checkAnswer(2)
> })
> input.onPinPressed(TouchPin.P2, function () {
>     // @highlight
>     checkAnswer(3)
> })
> ```

**Test:** Press A and watch the code, then enter it with the bare leads. Nothing changes on the display after a correct answer yet; you will add that in step 8. A tick should appear after the fifth. Press A again and deliberately enter a wrong first answer; a cross should appear.

> [!TIP]
>
> List positions start at `0`, so position `0` selects the first item.
