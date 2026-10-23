## Check the player's taps

Check each tap against the next number in the code.

> [!TASK]
>
> Create a variable called **playerPosition** to remember which signal the player must match next.

Next, make a function to check the player's answer. A **function** is a named group of blocks you can use from several places.

> [!TASK]
>
> Create a function called **checkAnswer** to check the number from any of the three switches. Open **Advanced** > **Functions** > **Make a Function...**.

> [!TASK]
>
> Give your function a number **parameter** called **answer**, so each switch can pass in its number. Click **Number**, name the parameter, then click **Done**.

> [!TASK]
>
> Add the following blocks to your function to check each tap against the next signal. A correct tap moves the player on, a wrong tap shows a cross, and completing the code shows a tick.
>
> Find the list blocks in **Advanced** > **Arrays**. Click **+** at the bottom of a condition to add an alternative branch.
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
> Add the highlighted blocks after the code plays to return the player to the first signal and show that the game is ready for their taps.
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
> Change the three pin events as shown so each switch sends its number to your answer-checking function. Find the function call in **Functions**.
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

**Test:** Press A and watch the code, then enter it with the bare leads. Nothing changes on the display after a correct answer yet; you will add that in step 8. A tick should appear after the last correct answer. Press A again and deliberately enter a wrong first answer; a cross should appear.

> [!TIP]
>
> List positions start at `0`, so position `0` selects the first item.
