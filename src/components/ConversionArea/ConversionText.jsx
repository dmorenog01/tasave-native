import { View, Text, StyleSheet, TextInput } from 'react-native'
import theme from '../../theme'
import { useEffect, useState } from 'react'

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
	input: {
		color: theme.colors.primaryFont,
		fontSize: theme.fontSizes.conversionScreen,
	},
	numberContainer: {
		flexDirection: 'row',
	},
})

export default ConversionText = ({
	currencyLabel,
	currencyAmount,
	currencyPrefix,
	setValue,
}) => {
	const [numberString, setNumberString] = useState('')
	const [isEditing, setIsEditing] = useState(false)

	const toNumber = text => {
		let t = String(text).replace(',', '.')
		return Number(t)
	}

	const onChange = text => {
		if (isEditing) {
			setNumberString(text)
		}
	}

	useEffect(() => {
		const parsedNumber = toNumber(numberString)
		if (!isEditing && !isNaN(parsedNumber)) {
			setNumberString(String(parsedNumber))
		}
	}, [isEditing])

	return (
		<View style={style.container}>
			<Text style={style.text}>{currencyLabel}</Text>
			<View style={style.numberContainer}>
				<Text style={style.text}>{currencyPrefix}</Text>
				<TextInput
					style={style.input}
					value={numberString}
					keyboardType='decimal-pad'
					onChangeText={onChange}
					onFocus={() => setIsEditing(true)}
					onBlur={() => setIsEditing(false)}
				/>
			</View>
		</View>
	)
}
