led.plotBrightness(2, 2, 255)
basic.forever(function () {
    if (input.rotation(Rotation.Pitch) >= 30) {
        led.plotBrightness(2, 0, 0)
        led.plotBrightness(2, 1, 255)
        basic.setLedColor(0xffff00)
    } else if (input.rotation(Rotation.Pitch) >= 50) {
        led.plotBrightness(2, 0, 255)
        led.plotBrightness(2, 1, 0)
        basic.setLedColor(0xff0000)
        music.ringTone(262)
    } else {
        led.plotBrightness(2, 3, 0)
    }
})
