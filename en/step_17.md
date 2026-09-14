## Complete the reboot

Finish the game after the player repeats a five-term sequence.

> [!TASK]
>
> Make a variable called `target length` and set it to `5`. Make a `complete reboot` function that shows a tick, `ON`, and a happy face.
>
> ```blocks
> let targetLength = 5
> function completeReboot () {
>     acceptingInput = false
>     gameActive = false
>     basic.showIcon(IconNames.Yes)
>     basic.pause(500)
>     basic.showString("ON")
>     basic.showIcon(IconNames.Happy)
> }
> ```

> [!TASK]
>
> When a round is complete, compare the list length with `target length`. Complete the reboot at the target; otherwise, start the next round.
>
> ```blocks
> if (playerPosition == rebootSequence.length) {
>     if (rebootSequence.length == targetLength) {
>         completeReboot()
>     } else {
>         basic.showIcon(IconNames.Yes)
>         basic.pause(500)
>         startRound()
>     }
> } else {
>     basic.showIcon(IconNames.SmallDiamond)
>     basic.pause(150)
>     acceptingInput = true
> }
> ```

**Test:** For a quicker test, temporarily set `target length` to `2`. Complete both rounds with the bare leads and check that the micro:bit displays `ON` and a happy face. Set it back to `5`, download again, and complete the full reboot.

> [!TIP]
>
> The sequence becoming one term longer after every success is the game's **progression**. The target length is its **win condition**.
