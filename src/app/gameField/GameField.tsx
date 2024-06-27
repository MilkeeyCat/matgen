'use client'
import Image from 'next/image'
import { useState } from 'react'
import botTank from '../../../public/assets/botTank.png'
import userTank from '../../../public/assets/userTank.png'
import styles from './GameField.module.scss'

export function GameField() {
	const [isAttack, setIsAttack] = useState<boolean>(false)

	const [movement, setMovement] = useState<number>(1000)

	const handleAttack = () => {
		setIsAttack(true)
		setTimeout(() => {
			setIsAttack(false)
		}, 2000)
	}

	const bulletStyle: React.CSSProperties = {
		position: 'absolute',
		backgroundColor: '#f00',
		bottom: 116,
		left: 208, // Example background color
		width: '16px',
		height: '16px',
		borderRadius: '50%',
		transition: 'transform 0.3s ',
		transform: isAttack ? `translateX(${movement}px)` : 'translateX(0)',
	}

	return (
		<div className='w-screen h-screen '>
			<div className={styles.problemSolve}>
				<p className={styles.problemText}>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum
					architecto maiores magni debitis tempore perferendis, quo
					necessitatibus tenetur culpa. Accusamus consequuntur voluptates totam,
					maiores sint eum tempora nulla velit iste, illo culpa debitis autem
					ipsum delectus sit soluta commodi. Explicabo, molestias. Ullam quia
					beatae ad, animi nulla quae quam porro.
				</p>

				<input
					onChange={e => setMovement(Number(e.target.value))}
					placeholder='Speed'
					value={movement}
				/>
				<button onClick={() => handleAttack()}>Attack</button>
			</div>
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
				/>
				<div className={styles.gun}></div>

				<div style={bulletStyle}></div>
			</div>
		</div>
	)
}
