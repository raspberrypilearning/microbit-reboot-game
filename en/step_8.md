## Store a reboot sequence

Use a list to keep several signals in their order.

> [!TASK]
>
> Open **Advanced**, then **Arrays**. Make a list called `reboot sequence` containing `1`, `3`, and `2`, in that order.
>
> ```blocks
> let rebootSequence = [1, 3, 2]
> ```

> [!TASK]
>
> Add an `on button A pressed` event. Make it show the length of `reboot sequence`.
>
> ```blocks
> input.onButtonPressed(Button.A, function () {
>     basic.showNumber(rebootSequence.length)
> })
> ```

> [!TIP]
>
> A **list** stores several related values in one variable. The order of its items is preserved.

**Test:** Press button A. The micro:bit should display `3` because the list contains three items.
