import { Action } from 'redux'
import { CREATE_CONTACT } from '../../config/actionTypes'
import ContactInterface from './contact.interface'

interface CreateContactActionInterface extends Action<typeof CREATE_CONTACT>{payload: ContactInterface}

export default CreateContactActionInterface
