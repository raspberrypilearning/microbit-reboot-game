let sequenceLength = 5
let playerPosition = 0
let rebootSequence: number[] = []
let acceptingInput = false

function checkAnswer (answer: number) {
    if (acceptingInput) {
        acceptingInput = false
        basic.showNumber(answer)
        basic.pause(150)
        basic.clearScreen()
        if (answer == rebootSequence[playerPosition]) {
            playerPosition += 1
            if (playerPosition == sequenceLength) {
                music.play(music.tonePlayable(Note.C5, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
                basic.pause(80)
                music.play(music.tonePlayable(Note.E5, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
                basic.showIcon(IconNames.Yes)
                basic.showString("ON")
                basic.showIcon(IconNames.Happy)
            } else {
                acceptingInput = true
                basic.showIcon(IconNames.Target)
            }
        } else {
            music.play(music.tonePlayable(Note.C3, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
            basic.showIcon(IconNames.No)
            basic.pause(700)
            basic.showString("A")
            playerPosition = 0
            acceptingInput = true
        }
    }
}

input.onButtonPressed(Button.A, function () {
    acceptingInput = false
    rebootSequence = []
    for (let count = 0; count < sequenceLength; count++) {
        rebootSequence.push(randint(1, 3))
    }
    for (let value of rebootSequence) {
        basic.showNumber(value)
        basic.pause(500)
        basic.clearScreen()
        basic.pause(200)
    }
    playerPosition = 0
    basic.showIcon(IconNames.Target)
    acceptingInput = true
})

input.onPinPressed(TouchPin.P0, function () {
    checkAnswer(1)
})

input.onPinPressed(TouchPin.P1, function () {
    checkAnswer(2)
})

input.onPinPressed(TouchPin.P2, function () {
    checkAnswer(3)
})

basic.showString("A")
