import { IProperties } from '@/types/gameType'

export const usePrepare = () => {
	let botPosition = Math.round(
		Math.random() * ((window.innerWidth * 40) / 100) + 1
	)
	let time = Math.round(Math.random() * 4) + 2
	let distanceBetweenTanks = Math.round(
		window.innerWidth - 128 - botPosition - 280
	)
	let speed = Math.round(distanceBetweenTanks / time)

	return { botPosition, time, distanceBetweenTanks, speed }
}

export const getProblemText = ({
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
		return 'Error'
	}
	if (level === 1.1) {
		return `If the distance between two tanks is ${distanceBetweenTanks}meters, what speed should the bullet have to hit the opponent in ${time} seconds?`
	}

	if (level === 1.2) {
		return `If the distance between two tanks is ${distanceBetweenTanks} meters and the speed of th bullet is ${speed} meters per second, what time it will take the bullet to hit the opponent?`
	}
	if (level === 1.3) {
		return `If the bullet hit the opponent tank in ${time} seconds, flying at the speed ${speed} meters per second, what was the distance between tanks?`
	}

	return ''
}

export const validateAnswer = ({
	speed,
	answer,
	time,
	distanceBetweenTanks,
	level,
}: IProperties) => {
	if (level === 1.1) {
		if (Math.round(speed) === answer) {
			return true
		} else {
			return false
		}
	}
	if (level === 1.2) {
		if (Math.floor(time) === answer) {
			return true
		} else {
			return false
		}
	}
	if (level === 1.3) {
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
	if (level === 1.1) {
		return `Your answer is incorrect, if the bullet will fly with the speed ${answer} meters per second as you wrote, then it will go to ${
			answer * time
		} distance with given time `
	}

	if (level === 1.2) {
		return `Your answer is incorrect, if the bullet will fly for ${answer} seconds as you wrote, then the bullet will fly the S equal to ${
			answer * speed
		} meters`
	}
	if (level === 1.3) {
		return `Your answer is incorrect, if the bullet will fly the distance of ${answer} meters as you wrote, then with the current speed it will take it ${
			answer / speed
		} seconds `
	}

	return ''
}
