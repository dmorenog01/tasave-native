import { View, Text, StyleSheet } from 'react-native'
import theme from '../../theme'
import Divider from './Divider'
import ConversionText from './ConversionText'

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
	return (
		<View style={style.container}>
			<ConversionText currencyLabel={'Bs.'} currencyAmount={'3005.12'} />
			<Spacer />
			<Divider />
			<Spacer />
			<ConversionText
				currencyLabel={'USD'}
				currencyAmount={'83.47'}
				currencyPrefix={'$'}
			/>
		</View>
	)
}
