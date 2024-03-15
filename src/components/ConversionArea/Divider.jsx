import { View } from 'react-native'
import theme from '../../utils/theme'

export default Divider = () => {
	return (
		<View
			style={{
				width: '90%',
				height: 4,
				backgroundColor: theme.colors.accent,
			}}
		/>
	)
}
