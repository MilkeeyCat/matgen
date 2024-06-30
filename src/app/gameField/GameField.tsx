'use client'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import botTank from '../../../public/assets/botTank.png'
import userTank from '../../../public/assets/userTank.png'
import styles from './GameField.module.scss'
import { getTransition } from './utils'
interface IGameField {
	time: number
	speed: number
	distanceBetweenTanks: number
	botPosition: number
	answer: number
	level: number
	isAttack: boolean
	timer?: number
}

export function GameField({
	time,
	speed,
	distanceBetweenTanks,
	botPosition,
	answer,
	level,
	isAttack,
	timer,
}: IGameField) {
	const botTankStyle: React.CSSProperties = {
		right: `${botPosition}px`,
	}

	const transitionX =
		getTransition({
			speed,
			time,
			answer,
			distanceBetweenTanks,
			level,
		}) ?? 0

	const [isHalf, setIsHalf] = useState<boolean>(false)

	useEffect(() => {
		if (timer !== undefined) {
			setIsHalf(timer > time / 2)
		}
	}, [timer, time])

	const bulletStyle: React.CSSProperties = {
		transform:
			level === 4
				? isAttack
					? `translateX(${(transitionX / time) * timer}px) translateY(${
							!isHalf ? (-700 / time) * timer : -700 + timer * (700 / time)
					  }px)`
					: `translateX(0) translateY(${isAttack ? 50 : 0})`
				: isAttack
				? `translateX(${transitionX}px)`
				: 'translateX(0)',
		transition: `transform ${
			level === 4 ? (isAttack ? 1 : 0.1) : isAttack ? time : 0.1
		}s linear`,
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

			<div className={`${level === 4 ? styles.rotatedGun : styles.gun}`}></div>

			<div
				style={bulletStyle}
				className={`${level === 4 ? styles.rotatedBullet : styles.bullet}`}
			></div>
		</div>
	)
}
