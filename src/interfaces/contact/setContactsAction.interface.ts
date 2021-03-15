import { Action } from 'redux'
import { SET_CONTACTS } from '../../config/actionTypes'
import ContactInterface from './contact.interface'

interface SetContactsActionInterface extends Action<typeof SET_CONTACTS>{payload: ContactInterface[]}

export default SetContactsActionInterface
