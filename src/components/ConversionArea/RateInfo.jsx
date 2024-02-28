import { View, Text, StyleSheet } from 'react-native'
import theme from '../../theme'

const styles = StyleSheet.create({
	container: {
		marginTop: 10,
	},
	text: {
		color: theme.colors.accent,
		fontSize: theme.fontSizes.dropdown,
		fontWeight: '700',
	},
})
export default RateInfo = () => {
	const rateNumber = 35.34
	const rate = String(rateNumber)
	return (
		<View style={styles.container}>
			<Text style={styles.text}>27/02/24 Bcv/USD {rate}</Text>
		</View>
	)
}
