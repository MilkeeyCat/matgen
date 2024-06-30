'use client'
import { StopWatch } from '@/components/StopWatch/StopWatch'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import star from '../../../public/assets/star.png'
import { GameField } from '../gameField/GameField'
import styles from './Level1.module.scss'
import {
	getProblemText,
	getResultText,
	usePrepare,
	validateAnswer,
} from './utils'

export function Level1() {
	const starImages = Array(3).fill(star)
	const router = useRouter()
	const input = useRef<HTMLInputElement>(null)

	const [gameState, setGameState] = useState<'prepare' | 'attack' | 'result'>(
		'prepare'
	)
	const [level, setLevel] = useState<number>(1.1)
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
						setLevel(prev => Number((prev + 0.1).toFixed(1)))
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
		if (level === 1.4) {
			router.back()
		}
	}, [level, router])

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
						<div className={styles.level}>{level.toFixed(1)}</div>
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
							{getProblemText({
								speed,
								answer,
								time,
								distanceBetweenTanks,
								level,
								botPosition,
								gameState,
							})}
						</p>
					)}

					{gameState === 'result' && !isCorrectAnswer && (
						<p>
							{getResultText({
								speed,
								answer,
								time,
								distanceBetweenTanks,
								level,
								gameState,
								botPosition,
							})}
						</p>
					)}

					{gameState === 'prepare' && (
						<div className={styles.field}>
							<label>
								Enter {level === 1 && 'v'} {level === 2 && 't'}{' '}
								{level === 3 && 's'}
							</label>
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
				isCorrectAnswer={isCorrectAnswer}
			/>
		</div>
	)
}
