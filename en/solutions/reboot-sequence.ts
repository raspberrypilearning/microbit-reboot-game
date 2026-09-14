let targetLength = 5
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

function completeReboot () {
    acceptingInput = false
    gameActive = false
    basic.showIcon(IconNames.Yes)
    basic.pause(500)
    basic.showString("ON")
    basic.showIcon(IconNames.Happy)
}

function startRound () {
    acceptingInput = false
    rebootSequence.push(randint(1, 3))
    for (let signal of rebootSequence) {
        showSignal(signal)
    }
    playerPosition = 0
    basic.showIcon(IconNames.Target)
    acceptingInput = true
}

function checkAnswer (answer: number) {
    if (acceptingInput) {
        acceptingInput = false
        if (answer == rebootSequence[playerPosition]) {
            playerPosition += 1
            if (playerPosition == rebootSequence.length) {
                if (rebootSequence.length == targetLength) {
                    completeReboot()
                } else {
                    basic.showIcon(IconNames.Yes)
                    basic.pause(500)
                    startRound()
                }
            } else {
                basic.showIcon(IconNames.SmallDiamond)
                basic.pause(150)
                acceptingInput = true
            }
        } else {
            acceptingInput = false
            gameActive = false
            basic.showIcon(IconNames.No)
            basic.pause(700)
            basic.showNumber(rebootSequence.length - 1)
            basic.pause(700)
            basic.showString("A")
        }
    }
}

input.onButtonPressed(Button.A, function () {
    if (!(gameActive)) {
        rebootSequence = []
        gameActive = true
        startRound()
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
