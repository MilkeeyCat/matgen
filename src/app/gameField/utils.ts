interface IFire {
	speed: number
	time: number
	answer: number
	level: number
}

export const fire = ({ speed, time, answer, level }: IFire) => {
	if (level === 1) {
		if (answer === speed) {
			console.log(1)
			return speed * time
		} else if (answer - speed < 30 && answer - speed > 0) {
			return speed * time + 120
		} else if (speed - answer < 30 && answer - speed > 0) {
			return speed * time - 120
		} else {
			return answer * time
		}
	}
}
