interface IFire {
	speed: number
	time: number
	distanceBetweenTanks: number
	answer: number
	level: number
}

export const fire = ({
	speed,
	time,
	distanceBetweenTanks,
	answer,
	level,
}: IFire) => {
	if (level === 1) {
		if (answer === speed) {
			return speed * time
		} else if (answer - speed < 30 && answer - speed > 0) {
			return speed * time + 120
		} else if (speed - answer < 30 && answer - speed > 0) {
			return speed * time - 120
		} else {
			return answer * time
		}
	}
	if (level === 2) {
		if (answer === time) {
			return speed * time
		}
	}
	if (level === 3) {
		return distanceBetweenTanks
	}
}
