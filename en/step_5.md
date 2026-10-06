## Play a test code

Use a function and a list to display a short test sequence.

> [!TASK]
>
> Make a function called `showSignal` that shows one number from the code, then leaves a short blank gap.
>
> Click **Advanced** at the bottom of the list of block menus to see more menus. Click **Functions**, then **Make a Function...**, and name the function `showSignal`.
>
> Click **Number** to give the function a **parameter**: a value you hand to the function each time you use it. Click the new parameter's name, change it to `signal`, then click **Done**.
>
> Add these blocks to the function. To show the value, drag the `signal` bubble from the top of the function into `show number`.
>
> ```blocks
> function showSignal (signal: number) {
>     basic.showNumber(signal)
>     basic.pause(500)
>     basic.clearScreen()
>     basic.pause(200)
> }
> ```

> [!TASK]
>
> Make a **list** called `rebootSequence` that holds `1`, `3` and `2`. MakeCode calls lists **arrays**.
>
> Open **Advanced** > **Arrays** and drag `set list to array of` into `on start`. Click `list`, choose **Rename variable...** and call it `rebootSequence`. Click the **+** to add a third slot, then make the numbers `1`, `3` and `2`.
>
> Add an `on button A pressed` block. From **Loops**, put a `for element value of list` block inside it and choose `rebootSequence` instead of `list`. Put a `call showSignal` block from **Functions** inside the loop, then drag the loop's `value` bubble into it.
>
> ```blocks
> function showSignal (signal: number) {
>     basic.showNumber(signal)
>     basic.pause(500)
>     basic.clearScreen()
>     basic.pause(200)
> }
> // @highlight
> let rebootSequence = [1, 3, 2]
> // @highlight
> input.onButtonPressed(Button.A, function () {
>     for (let value of rebootSequence) {
>         showSignal(value)
>     }
> })
> ```

**Test:** Press A. The display should show `1`, then `3`, then `2`, with a clear gap between values.

> [!TIP]
>
> A **list** keeps several related values in order. A function parameter lets the same display code work with every value in the list.
