interface IValidate {
	speed: number
	time: number
	distanceBetweenTanks: number
	answer: number
	level: number
}

export const validate = ({
	speed,
	answer,
	time,
	distanceBetweenTanks,
	level,
}: IValidate) => {
	if (level === 1) {
		if (Math.floor(speed) == answer) {
			return true
		} else {
			return false
		}
	}
	if (level === 2) {
		if (Math.floor(time) == answer) {
			return true
		} else {
			return false
		}
	}
	if (level === 3) {
		if (Math.floor(distanceBetweenTanks) == answer) {
			return true
		} else {
			return false
		}
	}
}
