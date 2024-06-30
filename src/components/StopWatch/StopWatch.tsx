import { useEffect, useState } from 'react'

export const StopWatch = () => {
	const [seconds, setSeconds] = useState<number>(0.0)
	useEffect(() => {
		const interval = setInterval(
			() => setSeconds(seconds => seconds + 0.1),
			100
		)

		return () => clearInterval(interval)
	}, [])
	return <p>{Math.round(seconds * 10) / 10}</p>
}
