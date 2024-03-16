import { useEffect, useRef } from 'react'
import Svg, { Circle } from 'react-native-svg'
import { Animated, Easing } from 'react-native'

const SvgDot = ({ delay = 0 }) => {
	const animatedY = useRef(new Animated.Value(0)).current

	const upAnimation = Animated.timing(animatedY, {
		delay,
		toValue: -20,
		duration: 300,
		useNativeDriver: 'true',
	})

	const downAnimation = Animated.timing(animatedY, {
		delay: 100,
		toValue: 0,
		duration: 300,
		useNativeDriver: 'true',
	})

	const animation = Animated.loop(
		Animated.sequence([upAnimation, downAnimation, Animated.delay(300 - delay)])
	)

	useEffect(() => {
		animation.start()
	}, [])

	return (
		<Animated.View style={{ transform: [{ translateY: animatedY }] }}>
			<Svg width={21} height={21} fill='none'>
				<Circle
					cx={10}
					cy={10} // Center the circle vertically
					r={10}
					fill='#00F327'
				/>
			</Svg>
		</Animated.View>
	)
}

export default SvgDot
