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

export default { toNumber, removeZerosFromLeft }