## Follow the whole sequence

Move to the next list position after every correct answer.

> [!TASK]
>
> In the correct branch of `check answer`, change `player position` by `1`. Show a small diamond to acknowledge the answer.
>
> ```blocks
> function checkAnswer (answer: number) {
>     if (answer == rebootSequence[playerPosition]) {
>         playerPosition += 1
>         basic.showIcon(IconNames.SmallDiamond)
>     } else {
>         basic.showIcon(IconNames.No)
>     }
> }
> ```

> [!TIP]
>
> `player position` points to the item the player must enter next. Increasing it moves the comparison through the list without changing the stored sequence.

**Test:** Press A, then enter `1`, `3`, `2`. Each correct input should show a small diamond. Restart and deliberately enter a wrong number; that input should show a cross.
