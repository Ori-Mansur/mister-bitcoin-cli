import ContactService from "./ContactService"


const setContact = (contact) => {
    return {type: 'SET_CONTACT', contact}
}

export const loadContact  = (id) => {
    return async (dispatch) => {
        const contact = await ContactService.getContactById(id)
        // DO ANYTHING ASYNC

        return dispatch(setContact(contact))
    }
}

const updateContact = (contact) => {
    return {type: 'UPDATE_CONTACT', contact}
}

export const saveContact = (contact) => {
    return async (dispatch) => {
        const contact = await ContactService.saveContact(contact)
        return dispatch(updateContact(contact))
    }
}

const loadContacts = (contacts) => {
    return {type: 'LOAD_CONTACTS', contacts}
}

export const getContacts = (filterBy) => {
    return async (dispatch) => {
        const contacts = await ContactService.getContacts(filterBy)
        return dispatch(loadContacts(contacts))
    }
}