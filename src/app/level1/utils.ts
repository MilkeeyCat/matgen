interface IProperties {
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
}: IProperties) => {
	if (level === 1) {
		if (Math.floor(speed) === answer) {
			return true
		} else {
			return false
		}
	}
	if (level === 2) {
		if (Math.floor(time) === answer) {
			return true
		} else {
			return false
		}
	}
	if (level === 3) {
		if (Math.abs(Math.floor(distanceBetweenTanks) - answer) < 10) {
			return true
		} else {
			return false
		}
	}
}

export const getResultText = ({
	speed,
	answer,
	time,
	distanceBetweenTanks,
	level,
}: IProperties): string => {
	if (
		typeof speed !== 'number' ||
		typeof time !== 'number' ||
		typeof distanceBetweenTanks !== 'number' ||
		typeof level !== 'number' ||
		typeof answer !== 'number'
	) {
		return 'Invalid input'
	}
	if (level === 1) {
		return `Your answer is incorrect, if the bullet will fly with the speed ${answer} meters per second as you wrote, then it will go to ${
			answer * time
		} distance with given time `
	}

	if (level === 2) {
		return `Your answer is incorrect, if the bullet will fly for ${answer} seconds as you wrote, then the bullet will fly the S equal to ${
			answer * speed
		} meters`
	}
	if (level === 3) {
		return `Your answer is incorrect, if the bullet will fly the distance of ${answer} meters as you wrote, then with the current speed it will take it ${
			answer / speed
		} seconds `
	}

	return ''
}
