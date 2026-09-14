## End the reboot after a mistake

Show the player's score and allow a new game only after the current one ends.

> [!TASK]
>
> Make a Boolean variable called `game active` and set it to `false`. Update the button A event so it starts a game only when `game active` is false. Set `game active` to true before starting the first round.
>
> ```blocks
> let gameActive = false
> input.onButtonPressed(Button.A, function () {
>     if (!(gameActive)) {
>         rebootSequence = []
>         gameActive = true
>         startRound()
>     }
> })
> ```

> [!TASK]
>
> Extend the wrong-answer branch. Set `game active` to false. After the cross, show the number of rounds already completed, then display `A` as the restart prompt.
>
> ```blocks
> else {
>     acceptingInput = false
>     gameActive = false
>     basic.showIcon(IconNames.No)
>     basic.pause(700)
>     basic.showNumber(rebootSequence.length - 1)
>     basic.pause(700)
>     basic.showString("A")
> }
> ```

> [!TIP]
>
> The current list contains the unfinished round too. Subtracting `1` gives the number of rounds the player completed successfully. `game active` stops another press of A from starting a second game while one is already running.

**Test:** Press A again while a sequence is playing; the game should continue unchanged. Complete the first round, then enter a wrong answer during the second. The micro:bit should show a cross, a score of `1`, and `A`. Press A and check that the next game starts with a new one-term sequence.
