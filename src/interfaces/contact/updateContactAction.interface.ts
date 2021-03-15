import { Action } from 'redux'
import { UPDATE_CONTACT } from '../../config/actionTypes'
import ContactInterface from './contact.interface'

interface UpdateContactActionInterface extends Action<typeof UPDATE_CONTACT>{payload: ContactInterface}

export default UpdateContactActionInterface
