'use client'
import Image from 'next/image'
import botTank from '../../../public/assets/botTank.png'
import userTank from '../../../public/assets/userTank.png'
import styles from './GameField.module.scss'
import { fire } from './utils'

interface IGameField {
	time: number
	speed: number
	distanceBetweenTanks: number
	botPosition: number
	answer: number
	level: number
	isAttack: boolean
}

export function GameField({
	time,
	speed,
	distanceBetweenTanks,
	botPosition,
	answer,
	level,
	isAttack,
}: IGameField) {
	const botTankStyle: React.CSSProperties = {
		right: `${botPosition}px`,
	}

	const bulletStyle: React.CSSProperties = {
		transform: isAttack
			? `translateX(${fire({
					speed,
					time,
					answer,
					distanceBetweenTanks,
					level,
			  })}px)`
			: 'translateX(0)',
		transition: `transform ${isAttack ? time : 0.1}s ease-in-out`,
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

			<Image
				src={botTank}
				className={styles.botTank}
				alt=''
				width={300}
				height={100}
				style={botTankStyle}
			/>

			<div className={styles.gun}></div>

			<div style={bulletStyle} className={styles.bullet}></div>
		</div>
	)
}
