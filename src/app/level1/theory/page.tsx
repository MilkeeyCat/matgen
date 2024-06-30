import Image from 'next/image'
import gene from '../../../../public/assets/gene.png'
import { Tiro_Devanagari_Marathi } from 'next/font/google'
import { font as menuFont } from '../../menuFont'
import Link from 'next/link'

const font = Tiro_Devanagari_Marathi({ subsets: ['latin'], weight: ['400'] })

export default function Level1Theory() {
    const practiceLinkStyle: React.CSSProperties = {
        background: 'linear-gradient(#ffd700, #937C00)',
        color: 'transparent',
        backgroundClip: 'text',
        WebkitTextStrokeColor: '#000',
        WebkitTextStrokeWidth: '3px',
    };

    return (
        <article className={`${font.className} w-[960px] mx-auto pt-[60px] pb-[217px] text-2xl`}>
            <p>
                1.1 Imagine you’re riding your bike to your friend’s house. If you know how far away your friend’s house is and how fast you’re biking, you can calculate how long it will take to get there. For instance, if you’re traveling at a speed of 5 m/s and the distance is 100 m, you can use the formula:
                <math display="block">
                    <mfrac>
                        <msup>
                            <mi>distance</mi>
                        </msup>
                        <mn>time</mn>
                    </mfrac>
                </math>
                This gives us a time of 20 seconds. Similarly, this formula can be applied to a bullet flying (assuming no air drag or gravity) to calculate the time it takes to cover a certain distance.
            </p>
            <p>
                1.2 Now let’s consider estimating the distance between two cities. Suppose you know the speed of a train that connects these cities and the duration of the ride. For example, if the train travels at 200 km/h and goes for 2 hours, you can find the distance using the formula:
                <math display="block">distance = speed × time</math>
                In this case, the distance would be 400 km. You could also derive this formula from the previous task’s formula.
            </p>

            <p>
                1.3 Imagine you’re running late for school, and class starts in 5 minutes (300 seconds). You’re at home, which is 1 kilometer away from school. How fast should you run to be on time? Intuitively, the speed can be calculated using the formula:
                <math display="block">
                    speed=
                    <mfrac>
                        <msup>
                            <mi>distance</mi>
                        </msup>
                        <mn>time</mn>
                    </mfrac>
                </math>
                speed=imedistance
                Again, assuming a straight path with no air drag or gravity, this formula applies.🏃‍♂️💨
            </p>
            <Link
                href='/level1'
                className={`${menuFont.className} text-[3.5rem] inline-block mt-[173px] ml-[100%]`}
                style={practiceLinkStyle}
            >
                Practice
            </Link>
        </article>
    )
}
