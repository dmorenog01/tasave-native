import { View, StyleSheet } from 'react-native'
import theme from '../theme'
import SvgDot from './SvgDot'

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		flexGrow: 1,
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center',
	},
	text: {
		color: theme.colors.primaryFont,
		textAlign: 'center',
		height: 100,
	},
})

const VerticalSpacer = ({ width = 10 }) => {
	return <View style={{ width }}></View>
}

export default LoadingScreen = () => {
	return (
		<View style={styles.container}>
			<SvgDot />
			<VerticalSpacer />
			<SvgDot delay={100} />
			<VerticalSpacer />
			<SvgDot delay={200} />
		</View>
	)
}
