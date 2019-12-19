const INITIAL_STATE = {
    rate: null,
    marketPrice: []
}


export default function bitcoinReducer(state = INITIAL_STATE, action) { //action : {type: 'SET_CURR_ROBOT', robot:robot}
    switch (action.type) {
        case 'SET_RATE':
            // state.currRobot = action.robot //WRONG BECAUSE NOT IMMUTABLE
            return {
                ...state,
                rate: action.rate
            }
        case 'LOAD_MARKET_PRICE':            
            return {
                ...state,
                marketPrice: action.marketPrice
            }
        default:
            return state
    }
}