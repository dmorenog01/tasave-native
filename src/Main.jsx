import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import Constants from 'expo-constants'

import theme from './theme'
import Logo from './components/Logo'
import ConversionArea from './components/ConversionArea'

export default function Main() {
	return (
		<View style={styles.container}>
			<Logo />
			<ConversionArea />
			<StatusBar style='light' />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: theme.colors.backgroundDark,
		alignItems: 'center',
		paddingTop: Constants.statusBarHeight + 10,
	},
})
