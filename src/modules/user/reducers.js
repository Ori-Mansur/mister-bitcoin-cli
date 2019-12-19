const INITIAL_STATE = {
    user: null,
}


export default function contactReducer(state = INITIAL_STATE, action) { //action : {type: 'SET_CURR_ROBOT', robot:robot}
    switch (action.type) {
        case 'SET_USER':
            // state.currRobot = action.robot //WRONG BECAUSE NOT IMMUTABLE
            return {
                ...state,
                user: action.user
            }
        default:
            return state
    }
}
