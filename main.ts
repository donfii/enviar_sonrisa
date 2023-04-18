input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    radio.sendString("smile")
})
radio.onReceivedString(function (receivedString) {
    basic.showIcon(IconNames.Silly)
})
radio.setGroup(69)
basic.forever(function () {
	
})
