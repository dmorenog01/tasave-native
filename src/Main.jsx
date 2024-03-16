import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import Constants from 'expo-constants'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { initializeRates } from './reducers/ratesReducer'

import theme from './utils/theme'
import Logo from './components/Logo'
import ConversionArea from './components/ConversionArea'
import LoadingScreen from './components/LoadingScreen'

export default function Main() {
	const dispatch = useDispatch()
	const { loading, error } = useSelector(state => state.rates)

	useEffect(() => {
		dispatch(initializeRates())
	}, [])

	return (
		<View style={styles.container}>
			<Logo />
			{loading ? <LoadingScreen /> : <ConversionArea />}
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
