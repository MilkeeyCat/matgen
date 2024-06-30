'use client'
import Image from 'next/image'
import { redirect } from 'next/navigation'
import { useEffect, useState } from 'react'
import star from '../../../public/assets/star.png'
import { GameField } from '../gameField/GameField'
import styles from './Level2.module.scss'

export function Level2() {
	const [level, setLevel] = useState<number>(4)
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
		if (typeof window !== 'undefined' && level === 5) {
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

	const [isClient, setIsClient] = useState(false)

	const handleAttack = () => {
		setIsAttack(true)
		setTimeout(() => {
			setIsAttack(false)
			if (
				answer ===
				Math.floor(Math.abs((2 * 800 - 2 * speed * time * 0.707) / time ** 2))
			) {
				setIsCorrectAnswer(true)
				setTimeout(() => {
					setIsCorrectAnswer(false)
					setLevel(prev => prev + 1)
				}, 3000)
			} else {
				setResultText('Incorrect Answer')
				setTimeout(() => {
					setResultText('')
				}, 8000)
			}
		}, time * 1300)
	}

	return (
		<div className="w-screen h-screen bg-contain bg-[url('/assets/background.png')]">
			<div className={styles.problemSolve}>
				<div className={styles.controller}>
					<button className={styles.controllerBtn}>{'					< back '}</button>
					<div className={styles.level}>2</div>
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
						{resultText ? (
							<p>{resultText}</p>
						) : (
							<p>
								Imagine you're in another planet and met an alien tank, if the
								initial speed of your bullet is {speed} m/s at the angle of 45
								degrees and it will reach enemy in {time} seconds peaking at 800
								meters height, what is the planet's free-fall acceleration?
							</p>
						)}

						{!resultText && (
							<div className={styles.field}>
								<label>G</label>
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
				timer={timer}
			/>
		</div>
	)
}
