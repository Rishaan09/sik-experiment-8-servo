direction = 1
Angle = 0
pins.servo_write_pin(AnalogPin.P0, Angle)

def on_forever():
    global Angle, direction
    Angle += direction
    pins.servo_write_pin(AnalogPin.P0, Angle)
    if Angle >= 180 or Angle <= 0:
        direction = direction * -1
basic.forever(on_forever)
