interface IGetTransition {
	speed: number
	time: number
	distanceBetweenTanks: number
	answer: number
	level: number
}

export const getTransition = ({
	speed,
	time,
	distanceBetweenTanks,
	answer,
	level,
}: IGetTransition) => {
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

	if (level === 4) {
		if (
			answer <
			Math.floor(Math.abs((2 * 800 - 2 * speed * time * 0.707) / time ** 2))
		) {
			return speed * time + 150
		} else if (
			answer >
			Math.floor(Math.abs((2 * 800 - 2 * speed * time * 0.707) / time ** 2))
		) {
			return speed * time - 350
		} else {
			return speed * time - 100
		}
	}
}
