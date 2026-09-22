let sequenceLength = 5
let gameActive = false
let acceptingInput = false
let playerPosition = 0
let rebootSequence: number[] = []

function showSignal (signal: number) {
    basic.showNumber(signal)
    basic.pause(500)
    basic.clearScreen()
    basic.pause(200)
}

function checkAnswer (answer: number) {
    if (acceptingInput) {
        acceptingInput = false
        basic.showNumber(answer)
        basic.pause(150)
        basic.clearScreen()
        if (answer == rebootSequence[playerPosition]) {
            playerPosition += 1
            if (playerPosition == rebootSequence.length) {
                music.playTone(Note.C5, 100)
                basic.pause(80)
                music.playTone(Note.E5, 100)
                basic.showIcon(IconNames.Yes)
                basic.showString("ON")
                basic.showIcon(IconNames.Happy)
                gameActive = false
            } else {
                basic.showIcon(IconNames.Target)
                acceptingInput = true
            }
        } else {
            music.playTone(Note.C3, 500)
            basic.showIcon(IconNames.No)
            basic.pause(700)
            basic.showString("A")
            gameActive = false
        }
    }
}

input.onButtonPressed(Button.A, function () {
    if (!(gameActive)) {
        gameActive = true
        acceptingInput = false
        rebootSequence = []
        for (let count = 0; count < sequenceLength; count++) {
            rebootSequence.push(randint(1, 3))
        }
        for (let signal of rebootSequence) {
            showSignal(signal)
        }
        playerPosition = 0
        basic.showIcon(IconNames.Target)
        acceptingInput = true
    }
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
