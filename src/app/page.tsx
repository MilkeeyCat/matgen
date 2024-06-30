'use client';
import Link from 'next/link'
import styles from './menu.module.scss'
import { font } from './menuFont'

const gameOptions = [
    ['solo', '/levels'],
    ['multiplayer(soon)', null],
    ['ratings', '/ratings'],
]

export default function Home() {
    const textElementStyle: React.CSSProperties = {
        display: 'inline',
        position: 'relative',
        background: 'linear-gradient(#ffd700, #937C00)',
        color: 'transparent',
        backgroundClip: 'text',
        WebkitTextStrokeColor: '#000',
        WebkitTextStrokeWidth: '3px',
    }

    if (!localStorage.getItem("userScore")) {
        localStorage.setItem("userScore", JSON.stringify({ username: "gabenewel62", score: 0 }))
    }

    return (
        <div className='w-screen h-screen bg-[url(/assets/menuBackground.png)] uppercase flex flex-col justify-center items-center'>
            <span style={{ ...textElementStyle, WebkitTextStrokeWidth: '2px' }} className={`${font.className} !absolute top-2 right-10 text-[2rem]`}>{JSON.parse(localStorage.getItem("userScore")!).username}</span>
            <p
                className={`${font.className} text-[8.25rem]`}
                style={textElementStyle}
            >
                Battle City
            </p>
            <div className='flex flex-col gap-14'>
                {gameOptions.map(item => (
                    <>
                        {item[1] != null ? (
                            <Link
                                href={item[1]}
                                className={`${styles.menuItem} ${font.className} text-[3.5rem]`}
                                style={textElementStyle}
                            >
                                {item[0]}
                            </Link>
                        ) : (
                            <p
                                className={`${styles.menuItem} ${font.className} text-[3.5rem]`}
                                style={textElementStyle}
                            >
                                {item[0]}
                            </p>
                        )}
                    </>
                ))}
            </div>
        </div>
    )
}
