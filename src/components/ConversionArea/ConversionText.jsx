import { View, Text, StyleSheet } from 'react-native'
import theme from '../../theme'

const style = StyleSheet.create({
	parent: {
		width: '100%',
	},
	container: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-around',
		width: '100%',
	},
	text: {
		color: theme.colors.primaryFont,
		fontSize: theme.fontSizes.conversionScreen,
	},
})

export default ConversionText = ({
	currencyLabel,
	currencyAmount,
	currencyPrefix,
}) => {
	return (
		<View style={style.container}>
			<Text style={style.text}>{currencyLabel}</Text>
			<Text style={style.text}>
				{currencyPrefix}
				{currencyAmount}
			</Text>
		</View>
	)
}
