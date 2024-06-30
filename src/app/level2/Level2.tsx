'use client'
import { StopWatch } from '@/components/StopWatch/StopWatch'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import star from '../../../public/assets/star.png'
import { GameField } from '../gameField/GameField'
import styles from './Level2.module.scss'
import { usePrepare, validateAnswer } from './utils'

export function Level2() {
	const starImages = Array(3).fill(star)
	const router = useRouter()
	const input = useRef<HTMLInputElement>(null)

	const [gameState, setGameState] = useState<'prepare' | 'attack' | 'result'>(
		'prepare'
	)
	const [level, setLevel] = useState<number>(2)
	const [botPosition, setBotPosition] = useState<number>(0)
	const [time, setTime] = useState<number>(0)
	const [distanceBetweenTanks, setDistanceBetweenTanks] = useState<number>(0)
	const [speed, setSpeed] = useState<number>(0)

	useEffect(() => {
		if (gameState === 'prepare') {
			const { botPosition, time, distanceBetweenTanks, speed } = usePrepare()
			setSpeed(speed)
			setBotPosition(botPosition)
			setTime(time)
			setDistanceBetweenTanks(distanceBetweenTanks)
		}
	}, [gameState])

	const [answer, setAnswer] = useState<number>(0)
	const [isCorrectAnswer, setIsCorrectAnswer] = useState<boolean>(false)

	const handleAttack = () => {
		if (input.current) {
			const enteredValue = Number(input.current.value)
			setAnswer(enteredValue)

			setGameState('attack')
			setTimeout(() => {
				setGameState('result')
				if (
					validateAnswer({
						speed,
						answer: enteredValue,
						time,
						distanceBetweenTanks,
						level,
						gameState,
						botPosition,
					})
				) {
					setIsCorrectAnswer(true)
					setTimeout(() => {
						setIsCorrectAnswer(false)
						setGameState('prepare')
						setLevel(prev => Number(prev + 1))
					}, 3000)
				} else {
					setTimeout(() => {
						setGameState('prepare')
					}, 8000)
				}
			}, time * 1000)
		}
	}

	useEffect(() => {
		if (level === 3) {
			router.back()
		}
	}, [level, router])

	const [seconds, setSeconds] = useState<number>(0.0)

	useEffect(() => {
		if (gameState === 'attack') {
			const interval = setInterval(
				() => setSeconds(seconds => seconds + 0.1),
				100
			)

			return () => clearInterval(interval)
		}
	}, [gameState])

	return (
		<div className="w-screen h-screen bg-contain bg-[url('/assets/background.png')]">
			<div className={styles.problemSolve}>
				{gameState === 'prepare' && (
					<div className={styles.controller}>
						<button
							onClick={() => router.back()}
							className={styles.controllerBtn}
						>
							{'< back '}
						</button>
						<div className={styles.level}>{level}</div>
						<button
							className={styles.controllerBtn}
							onClick={() => handleAttack()}
						>
							{'fire >'}
						</button>
					</div>
				)}

				{gameState === 'result' && isCorrectAnswer && (
					<div className={styles.congratsText}>
						<p>GOOD JOB!</p>
						<div className={styles.stars}>
							{starImages.map((src, index) => (
								<Image
									key={index}
									src={src}
									className={styles.starImg}
									alt='Star Image'
									width={150}
									height={150}
								/>
							))}
						</div>
					</div>
				)}

				{gameState === 'attack' && <StopWatch />}

				<div className={styles.mainInfo}>
					{gameState === 'prepare' && (
						<p>
							Imagine you're in another planet and met an alien tank, if the
							initial speed of your bullet is {speed} m/s at the angle of 45
							degrees and it will reach enemy in {time} seconds peaking at 800
							meters height, what is the planet's free-fall acceleration?
						</p>
					)}

					{gameState === 'result' && !isCorrectAnswer && (
						<p>Your answer is incorrect.</p>
					)}

					{gameState === 'prepare' && (
						<div className={styles.field}>
							<label>Enter G </label>
							<input ref={input} type='number' />
						</div>
					)}
				</div>
			</div>

			<GameField
				time={time}
				speed={speed}
				distanceBetweenTanks={distanceBetweenTanks}
				botPosition={botPosition}
				answer={answer}
				level={level}
				gameState={gameState}
				seconds={seconds}
				isCorrectAnswer={isCorrectAnswer}
			/>
		</div>
	)
}
