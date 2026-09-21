let sequenceLength = 5
let gameActive = false
let acceptingInput = false
let playerPosition = 0
let rebootSequence: number[] = []
let p0WasClosed = false
let p1WasClosed = false
let p2WasClosed = false

pins.setPull(DigitalPin.P0, PinPullMode.PullUp)
pins.setPull(DigitalPin.P1, PinPullMode.PullUp)
pins.setPull(DigitalPin.P2, PinPullMode.PullUp)

function showSignal (signal: number) {
    basic.showNumber(signal)
    basic.pause(500)
    basic.clearScreen()
    basic.pause(200)
}

function playCorrectSound () {
    music.playTone(Note.C5, 100)
    basic.pause(80)
    music.playTone(Note.E5, 100)
}

function playErrorSound () {
    music.playTone(Note.C3, 500)
}

function rememberSwitchStates () {
    p0WasClosed = pins.digitalReadPin(DigitalPin.P0) == 0
    p1WasClosed = pins.digitalReadPin(DigitalPin.P1) == 0
    p2WasClosed = pins.digitalReadPin(DigitalPin.P2) == 0
}

function showRecognisedAnswer (answer: number) {
    basic.showNumber(answer)
    basic.pause(150)
    basic.clearScreen()
}

function completeReboot () {
    acceptingInput = false
    playCorrectSound()
    basic.showIcon(IconNames.Yes)
    basic.pause(500)
    basic.showString("ON")
    basic.showIcon(IconNames.Happy)
    gameActive = false
}

function startGame () {
    acceptingInput = false
    rebootSequence = []
    for (let count = 0; count < sequenceLength; count++) {
        rebootSequence.push(randint(1, 3))
    }
    for (let signal of rebootSequence) {
        showSignal(signal)
    }
    playerPosition = 0
    rememberSwitchStates()
    basic.showIcon(IconNames.Target)
    acceptingInput = true
}

function checkAnswer (answer: number) {
    if (acceptingInput) {
        acceptingInput = false
        showRecognisedAnswer(answer)
        if (answer == rebootSequence[playerPosition]) {
            playerPosition += 1
            if (playerPosition == rebootSequence.length) {
                completeReboot()
            } else {
                basic.showIcon(IconNames.Target)
                acceptingInput = true
            }
        } else {
            acceptingInput = false
            playErrorSound()
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
        startGame()
    }
})

basic.forever(function () {
    let p0IsClosed = pins.digitalReadPin(DigitalPin.P0) == 0
    let p1IsClosed = pins.digitalReadPin(DigitalPin.P1) == 0
    let p2IsClosed = pins.digitalReadPin(DigitalPin.P2) == 0
    let recognisedAnswer = 0

    if (acceptingInput) {
        if (p0IsClosed && !(p0WasClosed)) {
            recognisedAnswer = 1
        } else if (p1IsClosed && !(p1WasClosed)) {
            recognisedAnswer = 2
        } else if (p2IsClosed && !(p2WasClosed)) {
            recognisedAnswer = 3
        }
    }

    p0WasClosed = p0IsClosed
    p1WasClosed = p1IsClosed
    p2WasClosed = p2IsClosed

    if (recognisedAnswer > 0) {
        checkAnswer(recognisedAnswer)
    }
    basic.pause(20)
})

basic.showString("A")
