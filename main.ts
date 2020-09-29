let score = 0
input.onGesture(Gesture.Shake, function () {
    score = randint(80, 100)
    basic.showNumber(score)
    if (score <= 84) {
        basic.showString("A-")
    } else if (score <= 89) {
        basic.showString("A")
    } else if (score <= 100) {
        basic.showString("A+")
    }
})
basic.forever(function () {
	
})
