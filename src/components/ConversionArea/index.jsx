import { View, Text, StyleSheet } from 'react-native'
import theme from '../../theme'
import Divider from './Divider'
import ConversionText from './ConversionText'
import RateInfo from './RateInfo'
import { useSelector } from 'react-redux'
import {
	updateFromValue,
	updateToValue,
	calculateNewFrom,
	calculateNewTo,
} from '../../reducers/conversionReducer'

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
	},
	spacer: {
		height: 10,
	},
})

const Spacer = () => <View style={style.spacer} />

export default ConversionArea = () => {
	const { fromCurrency, toCurrency, toValue, fromValue } = useSelector(
		state => state.conversions
	)
	console.log('current values', fromValue, toValue)
	return (
		<View style={style.parent}>
			<View style={style.container}>
				<ConversionText
					currencyLabel={fromCurrency}
					currencyAmount={fromValue}
					currencyPrefix={'$'}
					action={updateFromValue}
					convertAction={calculateNewTo}
				/>
				<Spacer />
				<Divider />
				<Spacer />
				<ConversionText
					currencyLabel={toCurrency}
					currencyAmount={toValue}
					action={updateToValue}
					convertAction={calculateNewFrom}
				/>
			</View>
			<RateInfo />
		</View>
	)
}
