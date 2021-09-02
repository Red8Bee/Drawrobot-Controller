input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . . . .
        . # . # .
        . . # . .
        . # . # .
        . . . . .
        `)
    radio.sendString("right")
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        . . . . .
        . # . . .
        . . # . .
        . . . # .
        . . . . .
        `)
    radio.sendString("stop")
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . . . .
        . . . # .
        . . # . .
        . # . . .
        . . . . .
        `)
    radio.sendString("left")
})
radio.setGroup(1)
