import BitcoinService from './BitcoinService'

const setRate = (rate) => {
    return {type: 'SET_RATE', rate}
}

export const getRate = (coins) => {
    return async (dispatch) => {
        const rate = await BitcoinService.getRate(coins)
        return dispatch(setRate(rate))
    }
}
const setMarketPrice = (marketPrice) => {
    return {type: 'LOAD_MARKET_PRICE', marketPrice}
}

export const getMarketPrice = () => {
    return async (dispatch) => {
        const marketPrice = await BitcoinService.getMarketPrice()
        return dispatch(setMarketPrice(marketPrice))
    }
}