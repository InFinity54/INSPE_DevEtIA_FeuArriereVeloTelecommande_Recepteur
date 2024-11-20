radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        basic.showArrow(ArrowNames.West)
        basic.pause(5000)
    } else if (receivedNumber == 2) {
        basic.showArrow(ArrowNames.East)
        basic.pause(5000)
    } else {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    }
})
basic.showLeds(`
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    `)
radio.setGroup(2)
