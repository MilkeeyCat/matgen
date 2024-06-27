'use client'
import Image from 'next/image'
import botTank from '../../../public/assets/botTank.png'
import userTank from '../../../public/assets/userTank.png'
import styles from './GameField.module.scss'

export function GameField() {
	return (
		<div className='w-screen h-screen '>
			<div className='h-1/2 w-full'></div>
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
			</div>
		</div>
	)
}
