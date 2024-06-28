interface IValidate {
	speed: number
	answer: number
	level: number
}

export const validate = ({ speed, answer, level }: IValidate) => {
	if (level === 1) {
		if (Math.floor(speed) == answer) {
			console.log('congratulations')
		} else {
			console.log('Try again')
		}
	}
}
