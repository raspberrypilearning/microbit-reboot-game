## Finish a round

Show different feedback after the final correct answer.

> [!TASK]
>
> After increasing `player position`, check whether it equals the length of `reboot sequence`. Show a tick when the positions are equal; otherwise, show the small diamond.
>
> ```blocks
> function checkAnswer (answer: number) {
>     if (answer == rebootSequence[playerPosition]) {
>         playerPosition += 1
>         if (playerPosition == rebootSequence.length) {
>             basic.showIcon(IconNames.Yes)
>         } else {
>             basic.showIcon(IconNames.SmallDiamond)
>         }
>     } else {
>         basic.showIcon(IconNames.No)
>     }
> }
> ```

**Test:** Press A and enter `1`, `3`, `2`. The first two answers should show a small diamond. The third should show a tick to mark the end of the round.
