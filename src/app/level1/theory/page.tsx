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
        <article className={`${font.className} w-[960px] mx-auto pt-[60px] pb-[217px]`}>
            <h1 className='text-[60px]'>Uniform linear motion</h1>
            <p className='text-2xl mt-[87px]'>
                “Linear motion” means that an object moves in a straight line. "Uniform" means that the acceleration is 0 during the motion. In other words, the velocity is always the same number(constant).
            </p>
            <Image
                className='mt-[450px]'
                src={gene}
                alt='gene'
                width={960}
                height={540}
            />
            <p className='text-2xl mt-[87px]'>
                A lobotomy (from Greek λοβός (lobos) 'lobe', and τομή (tomē) 'cut, slice') or leucotomy is a discredited form of neurosurgical treatment for psychiatric disorder or neurological disorder (e.g. epilepsy, depression) that involves severing connections in the brain's prefrontal cortex.[1] The surgery causes most of the connections to and from the prefrontal cortex, the anterior part of the frontal lobes of the brain, to be severed.
                In the past, this treatment was used for treating psychiatric disorders as a mainstream procedure in some countries. The procedure was controversial from its initial use, in part due to a lack of recognition of the severity and chronicity of severe and enduring psychiatric illnesses, so it was said to be an inappropriate treatment.[2]
            </p>
            <Image
                className='mt-[157px]'
                src={gene}
                alt='gene'
                width={960}
                height={540}
            />
            <p className='text-2xl mt-[87px]'>
                A lobotomy (from Greek λοβός (lobos) 'lobe', and τομή (tomē) 'cut, slice') or leucotomy is a discredited form of neurosurgical treatment for psychiatric disorder or neurological disorder (e.g. epilepsy, depression) that involves severing connections in the brain's prefrontal cortex.[1] The surgery causes most of the connections to and from the prefrontal cortex, the anterior part of the frontal lobes of the brain, to be severed.
                In the past, this treatment was used for treating psychiatric disorders as a mainstream procedure in some countries. The procedure was controversial from its initial use, in part due to a lack of recognition of the severity and chronicity of severe and enduring psychiatric illnesses, so it was said to be an inappropriate treatment.[2]
            </p>
            <Image
                className='mt-[157px]'
                src={gene}
                alt='gene'
                width={960}
                height={540}
            />
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
