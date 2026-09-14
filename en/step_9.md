## Play the stored sequence

Display every signal in the list, one after another.

> [!TASK]
>
> Replace `show number` in the button A event with a `for element` loop. Rename the loop's element variable `signal`, then call `show signal` with that value.
>
> ```blocks
> input.onButtonPressed(Button.A, function () {
>     for (let signal of rebootSequence) {
>         showSignal(signal)
>     }
> })
> ```

> [!TIP]
>
> The loop takes each item from the list in turn. The function displays the item and inserts a blank gap before the loop moves to the next one.

**Test:** Press button A. The display should show `1`, then `3`, then `2`, with a short blank gap between the numbers.
