const toNumber = text => {
    let t = String(text).replace(',', '.')
    return Number(t)
}

const removeZerosFromLeft = text => {
    let sliceFrom = 0
    while (sliceFrom < text.length) {
        if (text.charAt(sliceFrom) !== '0') {
            break
        }
        sliceFrom += 1
    }
    return text.substring(sliceFrom)
}

const formatFloat = num => {
    return num.toFixed(3)
}

const getOptions = rates => {
    const options = []
    Object.keys(rates).forEach(fromCurrency => {
        Object.keys(rates[fromCurrency]).forEach(toCurrency => {
            options.push(`${fromCurrency}-${toCurrency}`)
        })
    })
    return options
}

const getCurrenciesFromString = str => {
    const [fromCurrency, toCurrency] = str.split('-')
    return { fromCurrency, toCurrency }
}

const parseFirestoreDate = dateObject => {
    const date = new Date(dateObject._seconds * 1000 + dateObject._nanoseconds / 1000000)
    // Convert to UTC-4
    return new Date(date.getTime() + 14400000)
}

const dateInSecondsToString = dateObject => {
    // Convert firestore date object  to venezuela date
    const date = parseFirestoreDate(dateObject)
    const formattedDate = date.toLocaleDateString();
    return formattedDate
}

export default { toNumber, removeZerosFromLeft, formatFloat, getOptions, getCurrenciesFromString, dateInSecondsToString }