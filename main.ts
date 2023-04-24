input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    radio.sendString("smile")
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "smile") {
        basic.showIcon(IconNames.Silly)
    } else if (receivedString == "sad") {
        basic.showIcon(IconNames.Butterfly)
    } else {
    	
    }
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    radio.sendString("sad")
})
radio.setGroup(69)
basic.forever(function () {
	
})
