import AsyncStorage from '@react-native-async-storage/async-storage';

class RateStorage {
    constructor(namespace = 'rates') {
        this.namespace = namespace
    }

    async getRates() {
        console.log('Loaded from AsyncStorage');
        const rates = await AsyncStorage.getItem(`${this.namespace}:rates`)
        return rates ? JSON.parse(rates) : {}
    }

    async setRates(rates) {
        console.log('Set AsyncStorage');
        await AsyncStorage.setItem(`${this.namespace}:rates`, JSON.stringify(rates))
    }
}

export default RateStorage