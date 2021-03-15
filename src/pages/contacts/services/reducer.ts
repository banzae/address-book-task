import ReduxActionInterface from '../../../interfaces/redux/reduxAction.interface'
import ContactInterface from '../../../interfaces/contact/contact.interface'
import { CREATE_CONTACT, DELETE_CONTACT, SET_CONTACTS, UPDATE_CONTACT } from '../../../config/actionTypes'

export interface IContactsState {
  contacts: ContactInterface[]
}

const initialState = {
  contacts: []
}
const reducer = (state: IContactsState = initialState, action: ReduxActionInterface): IContactsState => {
  switch (action.type) {
    case SET_CONTACTS:
      return {...state, contacts: action.payload}
    case CREATE_CONTACT:
      return {...state, contacts: [...state.contacts, action.payload]}
    case UPDATE_CONTACT:
      const updatedContacts = [...state.contacts]
      const contactIndex = updatedContacts.findIndex(val => val.id === action.payload.id)
      if(contactIndex > -1) updatedContacts[contactIndex] = action.payload
      return {...state, contacts: updatedContacts }
    case DELETE_CONTACT:
      const deletedContact = [...state.contacts]
      const deletedContactIndex = deletedContact.findIndex(val => val.id === action.payload)
      if(deletedContactIndex > -1) deletedContact.splice(deletedContactIndex, 1)
      return {...state, contacts: deletedContact }
    default: return state
  }
}

export default reducer
