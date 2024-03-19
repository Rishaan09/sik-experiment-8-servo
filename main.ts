let Angle = 0
let direction = 1
pins.servoWritePin(AnalogPin.P0, Angle)
basic.forever(function () {
    Angle += direction
    pins.servoWritePin(AnalogPin.P0, Angle)
    if (Angle >= 180 || Angle <= 0) {
        direction = direction * -1
    }
})
