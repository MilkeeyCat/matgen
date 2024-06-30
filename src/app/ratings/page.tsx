'use client';
import { font } from '../menuFont'

export default function Ratings() {
    const ratings = [
        { username: "Nagibator1000", score: 69420 },
        { username: "Alexey_Makarenkoff", score: 5991 },
        { username: "Jolygolf", score: 42069 },
        { username: "DrDisrespect", score: 1337 },
        { username: "AureliusXX", score: 420 },
        { username: "Jia Ten", score: 69 },
        JSON.parse(localStorage.getItem("userScore")!),
    ].sort((a, b) => a.score < b.score ? 1 : -1);

    const textElementStyle: React.CSSProperties = {
        background: 'linear-gradient(#ffd700, #937C00)',
        color: 'transparent',
        backgroundClip: 'text',
        WebkitTextStrokeColor: '#000',
        WebkitTextStrokeWidth: '3px',
    }

    return (
        <div className='w-screen h-screen bg-[url(/assets/menuBackground.png)] uppercase flex flex-col justify-center items-center'>
            <p
                className={`${font.className} text-[8.25rem]`}
                style={textElementStyle}
            >
                Ratings
            </p>
            <div className='flex justify-center items-center'>
                <ul>
                    {ratings.map(({ username }) => (
                        <li className={`${font.className} text-[3.5rem]`} style={textElementStyle}>{username}</li>
                    ))}
                </ul>
                <ul className='ml-[22rem]'>
                    {ratings.map(({ score }) => (
                        <li className={`${font.className} text-[3.5rem]`} style={textElementStyle}>{score}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
