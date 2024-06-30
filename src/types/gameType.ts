export interface IProperties {
	time: number
	speed: number
	distanceBetweenTanks: number
	botPosition: number
	answer: number
	level: number
	gameState: 'prepare' | 'attack' | 'result'
	seconds?: number
	isHalf?: boolean
}
