import { View, Text, StyleSheet } from 'react-native'
import theme from '../../theme'
import Divider from './Divider'
import ConversionText from './ConversionText'
import { useState } from 'react'

const style = StyleSheet.create({
	container: {
		backgroundColor: theme.colors.backgroundLight,
		width: '100%',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		height: '45%',
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
	const [topValue, setTopValue] = useState('3005.12')
	const [bottomValue, setBottomValue] = useState('83.47')

	return (
		<View style={style.container}>
			<ConversionText
				currencyLabel={'Bs.'}
				currencyAmount={topValue}
				setValue={setTopValue}
			/>
			<Spacer />
			<Divider />
			<Spacer />
			<ConversionText
				currencyLabel={'USD'}
				currencyAmount={bottomValue}
				currencyPrefix={'$'}
				setValue={setBottomValue}
			/>
		</View>
	)
}
