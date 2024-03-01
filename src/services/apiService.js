import axios from "axios"

const url = 'https://api-5uzosi7y6a-uk.a.run.app/v1/rates'

const getRates = async () => {
    const response = await axios.get(url, { timeout: 10000 })
    const data = response.data
    return data
}

export default {getRates}