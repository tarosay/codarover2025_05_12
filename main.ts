let 動く右 = 0
let 動く左 = 0
let P13_PWM = 0
let P16_PWM = 0
function 動く (右タイヤ: number, 左タイヤ: number) {
    if (右タイヤ >= 0) {
        pins.digitalWritePin(DigitalPin.P8, 0)
        pins.digitalWritePin(DigitalPin.P9, 1)
        動く右 = 右タイヤ
    } else {
        pins.digitalWritePin(DigitalPin.P8, 1)
        pins.digitalWritePin(DigitalPin.P9, 0)
        動く右 = 0 - 右タイヤ
    }
    if (左タイヤ >= 0) {
        pins.digitalWritePin(DigitalPin.P14, 0)
        pins.digitalWritePin(DigitalPin.P15, 1)
        動く左 = 左タイヤ
    } else {
        pins.digitalWritePin(DigitalPin.P14, 1)
        pins.digitalWritePin(DigitalPin.P15, 0)
        動く左 = 0 - 左タイヤ
    }
    P13_PWM = 1023 * (動く左 / 100)
    if (P13_PWM > 1023) {
        P13_PWM = 1023
    }
    P16_PWM = 1023 * (動く右 / 100)
    if (P16_PWM > 1023) {
        P16_PWM = 1023
    }
    pins.analogWritePin(AnalogPin.P13, P13_PWM)
    pins.analogWritePin(AnalogPin.P16, P16_PWM)
}
basic.forever(function () {
    動く(900, 900)
    basic.pause(200)
    動く(0, 0)
    basic.pause(500)
    動く(-900, -900)
    basic.pause(200)
    動く(0, 0)
    basic.pause(500)
    動く(900, -900)
    basic.pause(1000)
    動く(0, 0)
    basic.pause(500)
    動く(-900, 900)
    basic.pause(1000)
    動く(0, 0)
    basic.pause(500)
})
