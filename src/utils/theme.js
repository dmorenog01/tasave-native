import Constants from 'expo-constants';

const isGoBuild = Constants.appOwnership === 'expo';

const theme = {
    colors: {
        primaryFont: '#FFFFFF',
        secondaryFont: '#D9D9D9',
        backgroundLight: '#232A2D',
        backgroundDark: '#171b1d',
        accent: '#00F327',
        button: '#354850',
        button2: '#232A2D',
    },
    fonts: {
        main: isGoBuild ? 'System': 'CascadiaMono',
        bold: isGoBuild ? 'System':'CascadiaMono-Bold',
        semibold: isGoBuild ? 'System':'CascadiaMono-SemiBold',
        semilight: isGoBuild ? 'System':'CascadiaMono-SemiLight'
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