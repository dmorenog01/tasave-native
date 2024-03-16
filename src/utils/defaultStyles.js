import { StyleSheet } from "react-native";
import theme from "./theme";

const defaultStyles = StyleSheet.create({
    button1: {
		flexDirection: 'column',
		borderRadius: 5,
		alignItems: 'center',
        justifyContent: 'center',
		backgroundColor: theme.colors.button2,
    },
    button1Shadow: {
		shadowRadius: '10',
		shadowColor: 'black',
		shadowOpacity: 1,
		elevation: 4,
	},
})

export default defaultStyles