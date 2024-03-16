import { Animated, View, Text, StyleSheet, Pressable } from 'react-native'
import theme from '../../utils/theme'
import defaultStyles from '../../utils/defaultStyles'
import * as Clipboard from 'expo-clipboard'
import { useRef } from 'react'

const styles = StyleSheet.create({
	container: {
		width: 124,
		height: 44,
	},
	text: {
		width: '100%',
		height: '100%',
		textAlign: 'center',
		textAlignVertical: 'center',
		color: theme.colors.primaryFont,
		fontSize: theme.fontSizes.button,
		fontFamily: theme.fonts.main,
	},
})

export default CopyButton = ({
	buttonLabel = 'Button',
	buttonValue = '0.00',
}) => {
	// add darker color
	const scaleValue = useRef(new Animated.Value(1)).current
	const scaleAnimation = Animated.spring(scaleValue, {
		toValue: 1,
		useNativeDriver: true,
	})

	const copyToClipboard = async () => {
		scaleValue.setValue(0.9)
		scaleAnimation.start()
		await Clipboard.setStringAsync(String(buttonValue.toFixed(2)))
		console.log('Copied to clipboard!')
	}

	return (
		<Pressable onPress={copyToClipboard}>
			<Animated.View
				style={[
					styles.container,
					defaultStyles.button1,
					defaultStyles.button1Shadow,
					{ transform: [{ scale: scaleValue }] },
				]}
			>
				<Text style={styles.text}>{buttonLabel}</Text>
			</Animated.View>
		</Pressable>
	)
}
