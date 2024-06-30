'use client'
import { IProperties } from '@/types/gameType'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import botTankGif from '../../../public/assets/botTank.gif'
import botTank from '../../../public/assets/botTank.png'
import userTank from '../../../public/assets/userTank.png'
import styles from './GameField.module.scss'
import { getTransform, getTransition } from './utils'

export function GameField({
	time,
	speed,
	distanceBetweenTanks,
	botPosition,
	answer,
	level,
	gameState,
	seconds,

	isCorrectAnswer,
}: IProperties & { isCorrectAnswer: boolean }) {
	const botTankStyle: React.CSSProperties = {
		right: `${botPosition}px`,
	}

	const [isHalf, setIsHalf] = useState<boolean>(false)

	useEffect(() => {
		if (seconds !== undefined) {
			setIsHalf(seconds > time / 2)
		}
	}, [seconds, time])

	const bulletStyle: React.CSSProperties = {
		transform: getTransform({
			time,
			speed,
			distanceBetweenTanks,
			botPosition,
			answer,
			level,
			gameState,
			isHalf,
			seconds,
		}),
		transition: getTransition({
			time,
			speed,
			distanceBetweenTanks,
			botPosition,
			answer,
			level,
			gameState,
			seconds,
		}),
	}

	return (
		<div className={styles.gameField}>
			<Image
				src={userTank}
				className={styles.userTank}
				alt=''
				width={300}
				height={100}
			/>

			{isCorrectAnswer ? (
				<Image
					src={botTankGif}
					className={styles.botTank}
					alt='Bot Tank GIF'
					width={300}
					height={100}
					style={botTankStyle}
				/>
			) : (
				<Image
					src={botTank}
					className={styles.botTank}
					alt=''
					width={300}
					height={100}
					style={botTankStyle}
				/>
			)}

			<div className={`${level === 2 ? styles.rotatedGun : styles.gun}`}></div>

			<div
				style={bulletStyle}
				className={`${level === 2 ? styles.rotatedBullet : styles.bullet}`}
			></div>
		</div>
	)
}
