import { View, StyleSheet } from 'react-native'
import theme from '../theme'
import { useSelector, useDispatch } from 'react-redux'
import { Picker } from '@react-native-picker/picker'
import { updateSelectedCurrencies } from '../reducers/conversionReducer'
import utils from '../utils'

const styles = StyleSheet.create({
	picker: {
		color: theme.colors.primaryFont,
		fontFamily: theme.fonts.main,
	},
	container: {
		width: '50%',
		backgroundColor: 'black',
		borderColor: theme.colors.primaryFont,
		borderWidth: 3,
		borderRadius: 5,
		marginTop: 10,
	},
})

export default RatePicker = () => {
	const dispatch = useDispatch()
	const { fromCurrency, toCurrency } = useSelector(state => state.conversions)
	const rates = useSelector(state => state.rates.rates)
	const selectedPair = `${fromCurrency}-${toCurrency}`

	const options = utils.getOptions(rates)

	return (
		<View style={styles.container}>
			<Picker
				selectedValue={selectedPair}
				mode='dropdown'
				style={styles.picker}
				onValueChange={value => {
					const currencies = utils.getCurrenciesFromString(value)
					dispatch(updateSelectedCurrencies(currencies))
				}}
				dropdownIconColor={theme.colors.accent}
				dropdownIconRippleColor={'rgba(0,0,0,0)'}
			>
				{options.map(option => (
					<Picker.Item
						style={{ fontFamily: theme.fonts.main }}
						label={option}
						value={option}
						key={option}
						fontFamily={theme.fonts.main}
					/>
				))}
			</Picker>
		</View>
	)
}
