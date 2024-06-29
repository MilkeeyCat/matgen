'use client'
import { redirect } from 'next/navigation'
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
	}, [level])

	useEffect(() => {
		if (typeof window !== 'undefined' && level === 4) {
			redirect('/')
		}

		const calculateDistance = () => {
			return window.innerWidth - 128 - botPosition - 280
		}

		const distance = calculateDistance()
		setDistanceBetweenTanks(distance)
		setSpeed(Math.floor(Number(distance / time)))
	}, [time, level, botPosition])

	const handleAttack = () => {
		setIsAttack(true)
		setTimeout(() => {
			setIsAttack(false)
			if (validate({ speed, answer, time, distanceBetweenTanks, level }))
				setLevel(prev => prev + 1)
		}, time * 1000)
	}

	return (
		<div className="w-screen h-screen bg-contain bg-[url('/assets/background.png')]">
			<div className={styles.problemSolve}>
				<div className={styles.controller}>
					<button className={styles.controllerBtn}>{'					< back '}</button>
					<div className={styles.level}>1.{level}</div>
					<button
						className={styles.controllerBtn}
						onClick={() => handleAttack()}
					>
						{'fire >'}
					</button>
				</div>
				<div className={styles.problemText}>
					{level === 1 && (
						<p>
							If the distance between two tanks is {distanceBetweenTanks}{' '}
							meters, what speed should the bullet have to hit the opponent in{' '}
							{time} seconds?
						</p>
					)}
					{level === 2 && (
						<p>
							If the distance between two tanks is {distanceBetweenTanks} meters
							and the speed of th bullet is {speed} meters per second, what time
							it will take the bullet to hit the opponent?
						</p>
					)}
					{level === 3 && (
						<p>
							If the bullet hit the opponent tank in {time} seconds, flying at
							the speed {speed} meters per second, what was the distance between
							tanks?
						</p>
					)}
					<div className={styles.field}>
						<label>
							Enter {level === 1 && 'v'} {level === 2 && 't'}{' '}
							{level === 3 && 's'}
						</label>
						<input
							onChange={e => setAnswer(Number(e.target.value))}
							type='number'
							value={answer}
						/>
					</div>
				</div>
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
