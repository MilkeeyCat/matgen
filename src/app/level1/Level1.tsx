'use client'
import { useEffect, useState } from 'react'
import { GameField } from '../gameField/GameField'
import styles from './Level1.module.scss'
import { validate } from './utils'

export function Level1() {
	const [level, setLevel] = useState<number>(1)
	const [distanceBetweenTanks, setDistanceBetweenTanks] = useState<number>(0)
	const [isAttack, setIsAttack] = useState<boolean>(false)
	const [answer, setAnswer] = useState<number>(1000)
	const [botPosition, setBotPosition] = useState<number>(0)
	const [time, setTime] = useState<number>(0)
	const [speed, setSpeed] = useState<number>(0)

	useEffect(() => {
		setBotPosition(
			Math.round(Math.random() * ((window.innerWidth * 40) / 100) + 1)
		)
		setTime(Math.round(Math.random() * 7) + 5)
	}, [])

	useEffect(() => {
		const calculateDistance = () => {
			return window.innerWidth - 128 - botPosition - 290
		}

		const distance = calculateDistance()
		setDistanceBetweenTanks(distance)
		setSpeed(distance / time)
	}, [time])

	const handleAttack = () => {
		setIsAttack(true)
		setTimeout(() => {
			setIsAttack(false)
		}, 750)

		validate({ speed, answer, level })
	}

	return (
		<div className='w-screen h-screen '>
			<div className={styles.problemSolve}>
				{level === 1 && (
					<p className={styles.problemText}>
						DISTANCE: {distanceBetweenTanks} <br />
						TIME: {time} <br />
						VELOCITY: ??? (in integer, rounded to bottom)
					</p>
				)}

				<input
					onChange={e => setAnswer(Number(e.target.value))}
					placeholder='Speed'
					type='number'
					value={answer}
				/>
				<button onClick={() => handleAttack()}>Attack</button>
			</div>

			<GameField
				time={time}
				speed={speed}
				distanceBetweenTanks={distanceBetweenTanks}
				botPosition={botPosition}
				answer={answer}
				level={level}
				isAttack={isAttack}
			/>
		</div>
	)
}
