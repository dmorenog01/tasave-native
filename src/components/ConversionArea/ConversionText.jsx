import { View, Text, StyleSheet, TextInput } from 'react-native'
import theme from '../../theme'
import utils from '../../utils'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

const style = StyleSheet.create({
	container: {
		paddingHorizontal: 40,
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-around',
		width: '100%',
	},
	text: {
		color: theme.colors.primaryFont,
		fontSize: theme.fontSizes.conversionScreen,
		fontFamily: theme.fonts.main,
	},
	input: {
		color: theme.colors.primaryFont,
		fontSize: theme.fontSizes.conversionScreen,
		fontFamily: theme.fonts.main,
	},
	numberContainer: {
		flexDirection: 'row',
		flexGrow: 1,
		justifyContent: 'flex-end',
	},
	leftText: {
		fontSize: theme.fontSizes.conversionScreenCurrency,
		textAlignVertical: 'center',
		textAlign: 'left',
	},
})

export default ConversionText = ({
	currencyLabel,
	currencyAmount,
	currencyPrefix,
	action,
	convertAction,
}) => {
	const dispatch = useDispatch()
	const [isEditing, setIsEditing] = useState(false)

	const onChange = text => {
		const num = utils.toNumber(text)
		if (!isNaN(num)) {
			dispatch(action(text))
		}
	}

	useEffect(() => {
		const parsedNumber = utils.toNumber(currencyAmount)
		if (!isEditing && !isNaN(parsedNumber)) {
			const numStr = utils.removeZerosFromLeft(String(parsedNumber))
			dispatch(action(numStr))
			dispatch(convertAction(numStr))
		}
	}, [isEditing])

	return (
		<View style={style.container}>
			<Text style={[style.text, style.leftText]}>{currencyLabel}</Text>
			<View style={style.numberContainer}>
				<Text style={style.text}>{currencyPrefix}</Text>
				<TextInput
					style={style.input}
					value={currencyAmount}
					keyboardType='decimal-pad'
					onChangeText={onChange}
					onFocus={() => setIsEditing(true)}
					onBlur={() => setIsEditing(false)}
					selectTextOnFocus
				/>
			</View>
		</View>
	)
}
