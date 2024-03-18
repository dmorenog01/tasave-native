import { Pressable, Animated, Easing } from 'react-native'
import { useRef, useState } from 'react'
import { useDispatch } from 'react-redux'

import { updateRates } from '../../reducers/ratesReducer'
import defaultStyles from '../../utils/defaultStyles'
import ReloadSVG from './ReloadSVG'

export default UpdateRateButton = () => {
	const scaleValue = useRef(new Animated.Value(1)).current
	const rotateAnim = useRef(new Animated.Value(0)).current

	const dispatch = useDispatch()
	const [isLoading, setIsLoading] = useState(false)

	const scaleAnimation = Animated.spring(scaleValue, {
		toValue: 1,
		useNativeDriver: true,
	})

	const loadingAnimation = Animated.loop(
		Animated.timing(rotateAnim, {
			toValue: 1,
			duration: 1000,
			useNativeDriver: true,
		}),
		{ iterations: 1, useNativeDriver: true }
	)

	const degree = rotateAnim.interpolate({
		inputRange: [0, 1],
		outputRange: ['0deg', '360deg'],
	})

	const onTap = () => {
		scaleValue.setValue(0.9)
		scaleAnimation.start()
		if (!isLoading) {
			setIsLoading(true)
			rotateAnim.setValue(0)
			loadingAnimation.start()
			dispatch(updateRates())
			setIsLoading(false)
		}
	}

	return (
		<Pressable onPress={onTap}>
			<Animated.View
				style={[
					{
						height: 44,
						width: 44,
					},
					defaultStyles.button1,
					defaultStyles.button1Shadow,
					{ transform: [{ scale: scaleValue }] },
				]}
			>
				<Animated.View style={{ transform: [{ rotate: degree }] }}>
					<ReloadSVG />
				</Animated.View>
			</Animated.View>
		</Pressable>
	)
}
