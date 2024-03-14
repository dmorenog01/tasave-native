import { Animated, View, Text, StyleSheet, Pressable } from 'react-native'
import theme from '../../theme'
import * as Clipboard from 'expo-clipboard'
import { useRef } from 'react'

const styles = StyleSheet.create({
	shadowUnpressed: {
		shadowRadius: '10',
		shadowColor: 'black',
		shadowOpacity: 1,
		elevation: 4,
	},
	container: {
		flexDirection: 'column',
		width: 124,
		height: 44,
		borderRadius: 5,
		alignItems: 'center',
		backgroundColor: theme.colors.button,
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
		await Clipboard.setStringAsync(buttonValue)
		console.log('Copied to clipboard!')
	}

	return (
		<Pressable onPress={copyToClipboard}>
			<Animated.View
				style={[
					styles.container,
					styles.shadowUnpressed,
					{ transform: [{ scale: scaleValue }] },
				]}
			>
				<Text style={styles.text}>{buttonLabel}</Text>
			</Animated.View>
		</Pressable>
	)
}
