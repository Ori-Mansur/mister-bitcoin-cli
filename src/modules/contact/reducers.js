const INITIAL_STATE = {
    currContact: null,
    contacts: []
}


export default function contactReducer(state = INITIAL_STATE, action) { //action : {type: 'SET_CURR_ROBOT', robot:robot}
    switch (action.type) {
        case 'SET_CONTACT':
            // state.currRobot = action.robot //WRONG BECAUSE NOT IMMUTABLE
            return {
                ...state,
                currContact: action.contact
            }
        case 'LOAD_CONTACTS':
            return {
                ...state,
                contacts: action.contacts
            }
        case 'UPDATE_CONTACT':
            const idx = state.contacts.findIndex(currContact => {
                return currContact.id === action.contact.id
            })
            return {
                ...state,
                contacts: [
                    ...state.contacts.slice(0, idx),
                    action.contact,
                    ...state.contacts.slice(idx + 1)
                ]

            }
        default:
            return state
    }
}
