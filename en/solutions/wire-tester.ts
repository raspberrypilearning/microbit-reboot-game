let switchNumber = 0

pins.setPull(DigitalPin.P0, PinPullMode.PullUp)
pins.setPull(DigitalPin.P1, PinPullMode.PullUp)
pins.setPull(DigitalPin.P2, PinPullMode.PullUp)

basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P0) == 0) {
        switchNumber = 1
    } else if (pins.digitalReadPin(DigitalPin.P1) == 0) {
        switchNumber = 2
    } else if (pins.digitalReadPin(DigitalPin.P2) == 0) {
        switchNumber = 3
    } else {
        switchNumber = 0
    }

    if (switchNumber == 0) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . # # # .
            . . . . .
            . . . . .
            `)
    } else {
        basic.showNumber(switchNumber)
    }
})
