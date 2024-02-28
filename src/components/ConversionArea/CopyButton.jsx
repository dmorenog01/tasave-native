import { View, Text, StyleSheet, Pressable } from 'react-native'
import theme from '../../theme'
import * as Clipboard from 'expo-clipboard'

const styles = StyleSheet.create({
	shadowUnpressed: {
		shadowRadius: '10',
		shadowColor: 'black',
		shadowOpacity: 1,
		elevation: 5,
	},
	container: {
		flexDirection: 'column',
		width: 124,
		height: 44,
		borderColor: theme.colors.primaryFont,
		borderWidth: 2,
		borderRadius: 5,
		alignItems: 'center',
		backgroundColor: 'rgba(0, 0, 0, 1)',
	},
	text: {
		width: '100%',
		height: '100%',
		textAlign: 'center',
		textAlignVertical: 'center',
		color: theme.colors.primaryFont,
		fontSize: theme.fontSizes.button,
	},
})

export default CopyButton = ({
	buttonLabel = 'Button',
	buttonValue = '0.00',
}) => {
	const copyToClipboard = async () => {
		await Clipboard.setStringAsync(buttonValue)
		console.log('Copied to clipboard!')
	}

	return (
		<Pressable onPress={copyToClipboard}>
			<View style={[styles.container, styles.shadowUnpressed]}>
				<Text style={styles.text}>{buttonLabel}</Text>
			</View>
		</Pressable>
	)
}
