import { View, Text, StyleSheet } from 'react-native'
import theme from '../theme'

const styles = StyleSheet.create({
	container: {
		flexDirection: 'column',
		flexGrow: 1,
		width: '100%',
		justifyContent: 'center',
	},
	text: {
		color: theme.colors.primaryFont,
		textAlign: 'center',
		height: 100,
	},
})

export default LoadingScreen = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>Loading...</Text>
		</View>
	)
}
