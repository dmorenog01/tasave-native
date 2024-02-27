import { View, Text, StyleSheet } from 'react-native'
import theme from '../theme'

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignSelf: 'flex-start',
		marginLeft: 15,
		marginBottom: 20,
	},
	dot: {
		color: theme.colors.accent,
		fontSize: theme.fontSizes.title,
	},
	main: {
		color: theme.colors.primaryFont,
		fontSize: theme.fontSizes.title,
	},
})

const Logo = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.dot}>.</Text>
			<Text style={styles.main}>tasaVE</Text>
		</View>
	)
}

export default Logo
