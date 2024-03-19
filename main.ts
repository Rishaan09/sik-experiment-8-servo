let direction = 1
let Angle = 0
pins.servoWritePin(AnalogPin.P0, Angle)
basic.forever(function on_forever() {
    
    Angle += direction
    pins.servoWritePin(AnalogPin.P0, Angle)
    if (Angle >= 180 || Angle <= 0) {
        direction = direction * -1
    }
    
})
