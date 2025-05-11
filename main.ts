let power = 0
function car (テキスト: string, 数値: number) {
    if (テキスト == "前") {
        pins.digitalWritePin(DigitalPin.P8, 0)
        pins.digitalWritePin(DigitalPin.P9, 1)
        pins.digitalWritePin(DigitalPin.P14, 0)
        pins.digitalWritePin(DigitalPin.P15, 1)
    } else if (テキスト == "後") {
        pins.digitalWritePin(DigitalPin.P8, 1)
        pins.digitalWritePin(DigitalPin.P9, 0)
        pins.digitalWritePin(DigitalPin.P14, 1)
        pins.digitalWritePin(DigitalPin.P15, 0)
    } else {
    	
    }
    power = 1024 * (数値 / 100)
    pins.analogWritePin(AnalogPin.P13, power)
    pins.analogWritePin(AnalogPin.P16, power)
}
basic.forever(function () {
    car("前", 50)
})
