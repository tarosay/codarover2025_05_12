let power = 0
function car (テキスト: string, 数値: number) {
    if (テキスト == "前") {
    	
    } else if (テキスト == "後") {
        pins.digitalWritePin(DigitalPin.P8, 1)
        pins.digitalWritePin(DigitalPin.P9, 0)
        pins.digitalWritePin(DigitalPin.P14, 1)
        pins.digitalWritePin(DigitalPin.P15, 0)
    } else {
    	
    }
    power = 1024 * (数値 / 100)
}
basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P8, 0)
    pins.digitalWritePin(DigitalPin.P9, 1)
    pins.digitalWritePin(DigitalPin.P14, 1)
    pins.digitalWritePin(DigitalPin.P15, 0)
    pins.analogWritePin(AnalogPin.P13, 512)
    pins.analogWritePin(AnalogPin.P16, 512)
    basic.pause(2000)
    pins.analogWritePin(AnalogPin.P13, 0)
    pins.analogWritePin(AnalogPin.P16, 0)
    basic.pause(1000)
    pins.digitalWritePin(DigitalPin.P8, 1)
    pins.digitalWritePin(DigitalPin.P9, 0)
    pins.digitalWritePin(DigitalPin.P14, 0)
    pins.digitalWritePin(DigitalPin.P15, 1)
    pins.analogWritePin(AnalogPin.P13, 512)
    pins.analogWritePin(AnalogPin.P16, 512)
    basic.pause(2000)
    pins.analogWritePin(AnalogPin.P13, 0)
    pins.analogWritePin(AnalogPin.P16, 0)
    basic.pause(1000)
})
