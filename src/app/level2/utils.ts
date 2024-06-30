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

export const validateAnswer = ({
	speed,
	answer,
	time,
	distanceBetweenTanks,
	level,
}: IProperties) => {
	if (
		Math.abs(Math.round((2 * 800 - 2 * speed * time * 0.707) / time ** 2)) ===
		answer
	) {
		return true
	} else {
		return false
	}
}
