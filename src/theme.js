import Constants from 'expo-constants';

const isGoBuild = Constants.appOwnership === 'expo';

const theme = {
    colors: {
        primaryFont: '#FFFFFF',
        secondaryFont: '#D9D9D9',
        backgroundLight: '#232A2D',
        backgroundDark: '#171b1d',
        accent: '#00F327',
        button: '#354850'
    },
    fonts: {
        main: isGoBuild ? 'System font': 'CascadiaMono',
        bold: isGoBuild ? 'System font':'CascadiaMono-Bold',
        semibold: isGoBuild ? 'System font':'CascadiaMono-SemiBold',
        semilight: isGoBuild ? 'System font':'CascadiaMono-SemiLight'
    },
    fontSizes: {
        conversionScreen: 40,
        conversionScreenCurrency: 30,
        title: 32,
        button: 20,
        dropdown: 18
    }
}

export default theme