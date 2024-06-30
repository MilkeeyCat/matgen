import Image from 'next/image'
import theory1_1 from '../../../../public/assets/theory1_1.png'
import theory1_2 from '../../../../public/assets/theory1_2.png'
import theory1_3 from '../../../../public/assets/theory1_3.png'
import { Carlito } from 'next/font/google'
import { font as menuFont } from '../../menuFont'
import Link from 'next/link'
import styles from './theory.module.scss'

const font = Carlito({ subsets: ['latin'], weight: ['400'] })

export default function Level1Theory() {
    const practiceLinkStyle: React.CSSProperties = {
        background: 'linear-gradient(#ffd700, #937C00)',
        color: 'transparent',
        backgroundClip: 'text',
        WebkitTextStrokeColor: '#000',
        WebkitTextStrokeWidth: '3px',
    };

    return (
        <article className={`${font.className} w-[960px] mx-auto pt-[60px] pb-[217px] text-2xl ${styles.theory}`}>
            <p>1.1</p>
            <p>Imagine you're riding your bike to your friend's house. Just like calculating your travel time with the formula</p>
            <center>time = distance / speed</center>
            <p>you can figure out how long it will take. For example, if you're biking at 5 m/s and the distance is 100 m, you can calculate the time as follows: time = distance / speed = 100 m / 5 m/s = 20 seconds.</p>
            <p>This same principle applies to other scenarios, such as a bullet flying through the air (assuming no air resistance or gravity effects over short distances). This intuitive formula allows for straightforward calculation in such cases.</p>
            <p>It should also be noted that in Physics all the quantities has their own symbols, in this case</p>
            <center>
                <span>distance = S</span><br />
                <span>speed = v</span><br />
                <span>time = t</span><br />
            </center>
            <p>and their own standardized units</p>
            <center>
                <span>time -{'>'} s (seconds)</span><br />
                <span>istance -{'>'} m(meters)</span><br />
                <span>peed -{'>'} m/s(meters per second)</span><br />
            </center>
            <p>Let’s look at the example, below it can be extracted that S = 100m, and v = 10 m/s and we need to find the time it will take the bullet.</p>
            <p>Using the formula above (t = S/v) we can conclude that t = 100 / 10 which is 10s.</p>
            <center>
                <Image
                    src={theory1_1}
                    alt='theory1_1'
                    width={960}
                    height={540}
                />
            </center>
            <p>1.2</p>
            <p>Imagine you want to estimate the distance between two cities. If you know the speed of a train that connects these cities and the duration of its journey, you can easily calculate the distance. For instance, if the train travels at 200 km/h and the journey takes 2 hours, you calculate the distance using the formula</p>
            <center>distance = speed x time</center>
            <p>Therefore, distance = 200 km/h × 2 hours = 400 km. This formula is derived from the same principle used in the earlier task of calculating travel time, demonstrating its versatility in various scenarios involving speed, time, and distance.</p>
            <p>In the example below we are given that t = 5s, v = 15m/s and the S is unknown. Using formula above (S = v x t), S = 5 x 15 = 75</p>
            <center>
                <Image
                    src={theory1_2}
                    alt='theory1_2'
                    width={960}
                    height={540}
                />
            </center>
            <p>1.3</p>
            <p>Imagine you're running late for school. Class starts in 5 minutes (300 seconds), and you're currently at home, which is 1 kilometer away from school. To calculate how fast you need to run to arrive on time, you use the formula</p>
            <center><span>speed = distance / time</span></center>
            <p>So, speed = 1 km / 300 seconds = 1 km / 300 s ≈ 3.33 meters per second (m/s).</p>
            <p>This intuitive formula applies similarly to scenarios like a bullet traveling in a straight line with no air resistance or gravity, simplifying calculations in such situations.</p>
            <p>Again, we need to extract info from the text, this time, S = 50m, t = 10s and v is not given. So, from the formula(v = S/t), v = 50/10 = 5.</p>
            <center className='mb-[173px]'>
                <Image
                    src={theory1_3}
                    alt='theory1_3'
                    width={960}
                    height={540}
                />
            </center>
            <Link
                href='/level1'
                className={`${menuFont.className} text-[3.5rem] inline ml-[100%]`}
                style={practiceLinkStyle}
            >
                Practice
            </Link>
        </article>
    )
}
