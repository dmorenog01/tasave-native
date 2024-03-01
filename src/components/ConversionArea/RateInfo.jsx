import { View, Text, StyleSheet } from 'react-native'
import { useSelector } from 'react-redux'
import theme from '../../theme'
import utils from '../../utils'

const styles = StyleSheet.create({
	container: {
		marginTop: 10,
	},
	text: {
		color: theme.colors.accent,
		fontSize: theme.fontSizes.dropdown,
		textAlign: 'center',
		fontFamily: theme.fonts.main,
	},
	topText: {
		fontFamily: theme.fonts.bold,
	},
})
export default RateInfo = () => {
	const { fromCurrency, toCurrency } = useSelector(state => state.conversions)
	const rate = useSelector(state => state.rates.rates[fromCurrency][toCurrency])
	const rateString = String(rate['rate'].toFixed(2))
	const dateString = utils.dateInSecondsToString(rate['rate_date'])

	return (
		<View style={styles.container}>
			<Text style={[styles.text, styles.topText]}>{rateString}</Text>
			<Text style={styles.text}>{dateString}</Text>
		</View>
	)
}
