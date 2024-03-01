import { View, Text, StyleSheet } from 'react-native'
import { useSelector } from 'react-redux'
import {
	updateFromValue,
	updateToValue,
	calculateNewFrom,
	calculateNewTo,
} from '../../reducers/conversionReducer'

import theme from '../../theme'
import Divider from './Divider'
import ConversionText from './ConversionText'
import RateInfo from './RateInfo'
import CopyButton from './CopyButton'
import RatePicker from '../RatePicker'

const style = StyleSheet.create({
	parent: {
		display: 'flex',
		flexDirection: 'column',
		width: '100%',
		alignItems: 'center',
	},
	container: {
		backgroundColor: theme.colors.backgroundLight,
		width: '100%',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		height: 300,
	},
	text: {
		color: theme.colors.primaryFont,
		fontSize: theme.fontSizes.conversionScreen,
		fontFamily: theme.fonts.main,
	},
	spacer: {
		height: 10,
	},
	buttonsContainer: {
		flexDirection: 'row',
		width: '100%',
		justifyContent: 'space-evenly',
		marginTop: 10,
	},
})

const Spacer = () => <View style={style.spacer} />

export default ConversionArea = () => {
	const { fromCurrency, toCurrency, toValue, fromValue } = useSelector(
		state => state.conversions
	)
	return (
		<View style={style.parent}>
			<View style={style.container}>
				<ConversionText
					currencyLabel={fromCurrency}
					currencyAmount={fromValue}
					action={updateFromValue}
					convertAction={calculateNewTo}
				/>
				<Spacer />
				<Divider />
				<Spacer />
				<ConversionText
					currencyPrefix={'$'}
					currencyLabel={toCurrency}
					currencyAmount={toValue}
					action={updateToValue}
					convertAction={calculateNewFrom}
				/>
			</View>
			<RatePicker />
			<RateInfo />
			<View style={style.buttonsContainer}>
				<CopyButton buttonLabel={fromCurrency} buttonValue={fromValue} />
				<CopyButton buttonLabel={toCurrency} buttonValue={toValue} />
			</View>
		</View>
	)
}
