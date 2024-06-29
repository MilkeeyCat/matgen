'use client'
import Image from 'next/image'
import { redirect } from 'next/navigation'
import { useEffect, useState } from 'react'
import star from '../../../public/assets/star.png'
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
	const [resultText, setResultText] = useState<string>('')
	const [isCorrectAnswer, setIsCorrectAnswer] = useState<boolean>(false)
	const [timer, setTimer] = useState<number>(0.0)

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

	useEffect(() => {
		if (isAttack) {
			const interval = setInterval(() => setTimer(prev => prev + 0.1), 100)

			return () => clearInterval(interval)
		} else {
			setTimer(0.0)
		}
	}, [isAttack])

	const handleAttack = () => {
		setIsAttack(true)
		setTimeout(() => {
			setIsAttack(false)
			if (validate({ speed, answer, time, distanceBetweenTanks, level })) {
				setIsCorrectAnswer(true)
				setTimeout(() => {
					setIsCorrectAnswer(false)
					setLevel(prev => prev + 1)
				}, 3000)
			} else {
				if (level === 1) {
					setResultText(
						`Your answer is incorrect, if the bullet will fly with the speed ${answer} meters per second as you wrote, then it will go to ${
							answer * time
						} distance with given time `
					)
				} else if (level === 2) {
					;`Your answer is incorrect, if the bullet will fly for ${answer} seconds as you wrote, then the bullet will fly the S equal to ${
						answer * speed
					} meters`
				} else {
					;`Your answer is incorrect, if the bullet will fly the distance of ${answer} meters as you wrote, then with the current speed it will take it ${
						answer / speed
					} seconds `
				}
				setTimeout(() => {
					setResultText('')
				}, 8000)
			}
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
				{isCorrectAnswer && (
					<div className={styles.congratsText}>
						<p>GOOD JOB!</p>
						<div className={styles.stars}>
							<Image
								src={star}
								className={styles.starImg}
								alt=''
								width={150}
								height={150}
							/>
							<Image
								src={star}
								className={styles.starImg}
								alt=''
								width={150}
								height={150}
							/>
							<Image
								src={star}
								className={styles.starImg}
								alt=''
								width={150}
								height={150}
							/>
						</div>
					</div>
				)}

				{isAttack && <p>{Math.round(timer * 10) / 10}</p>}

				{!isCorrectAnswer && !isAttack && (
					<div className={styles.problemText}>
						{level === 1 &&
							(resultText ? (
								<p>{resultText}</p>
							) : (
								<p>
									If the distance between two tanks is {distanceBetweenTanks}{' '}
									meters, what speed should the bullet have to hit the opponent
									in {time} seconds?
								</p>
							))}
						{level === 2 &&
							(resultText ? (
								<p>{resultText}</p>
							) : (
								<p>
									If the distance between two tanks is {distanceBetweenTanks}{' '}
									meters and the speed of th bullet is {speed} meters per
									second, what time it will take the bullet to hit the opponent?
								</p>
							))}

						{level === 3 &&
							(resultText ? (
								<p>{resultText}</p>
							) : (
								<p>
									If the bullet hit the opponent tank in {time} seconds, flying
									at the speed {speed} meters per second, what was the distance
									between tanks?
								</p>
							))}
						{!resultText && (
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
						)}
					</div>
				)}
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
