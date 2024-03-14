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
	const [editingString, setEditingString] = useState('0')
	const currencyAmountString = String(currencyAmount.toFixed(2))

	const onChange = text => {
		const replacedText = text.replace(',', '.')
		const num = utils.toNumber(replacedText)
		if (!isNaN(num)) {
			setEditingString(replacedText)
		}
	}

	useEffect(() => {
		console.log('run use effect')
		setEditingString(currencyAmountString)
	}, [currencyAmountString])

	useEffect(() => {
		const parsedNumber = utils.toNumber(currencyAmount)
		if (!isEditing && !isNaN(parsedNumber)) {
			const numStr = utils.removeZerosFromLeft(String(parsedNumber))
			dispatch(convertAction(numStr))
			setEditingString(currencyAmountString)
		}
	}, [isEditing])

	return (
		<View style={style.container}>
			<Text style={[style.text, style.leftText]}>{currencyLabel}</Text>
			<View style={style.numberContainer}>
				<Text style={style.text}>{currencyPrefix}</Text>
				<TextInput
					style={style.input}
					value={isEditing ? editingString : currencyAmountString}
					keyboardType='decimal-pad'
					onChangeText={onChange}
					onFocus={() => {
						setIsEditing(true)
						setEditingString(currencyAmountString)
					}}
					onBlur={() => {
						setIsEditing(false)
						dispatch(action(editingString))
					}}
					selectTextOnFocus
				/>
			</View>
		</View>
	)
}
