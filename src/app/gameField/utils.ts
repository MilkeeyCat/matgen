import { IProperties } from '@/types/gameType'
const validateTransition = ({
	speed,
	time,
	distanceBetweenTanks,
	answer,
	level,
}: IProperties) => {
	if (level === 1.1) {
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
	if (level === 1.2) {
		if (answer === time) {
			return speed * time
		}
	}
	if (level === 1.3) {
		return distanceBetweenTanks
	}

	if (level === 2) {
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

export const getTransition = ({ level, gameState, time }: IProperties) => {
	if (level === 2) {
		return `transform ${gameState === 'attack' ? 1 : 0.1}s linear`
	} else {
		return `transform ${gameState === 'attack' ? time : 0.1}s linear`
	}
}

export const getTransform = ({
	speed,
	time,
	distanceBetweenTanks,
	answer,
	level,
	botPosition,
	gameState,
	seconds,
	isHalf,
}: IProperties) => {
	const transitionX =
		validateTransition({
			speed,
			time,
			distanceBetweenTanks,
			answer,
			level,
			botPosition,
			gameState,
		}) ?? 0
	if (level === 2) {
		if (gameState === 'attack') {
			const translateX = (transitionX / time) * ((seconds ?? 0) + 0.1)
			const translateY = !isHalf
				? (-700 / time) * (seconds ?? 0)
				: -700 + (seconds ?? 0) * (700 / time)
			return `translateX(${translateX}px) translateY(${translateY}px)`
		} else {
			return `translateX(0) translateY(0px)`
		}
	} else {
		return gameState === 'attack'
			? `translateX(${transitionX}px)`
			: 'translateX(0)'
	}
}
