import { Action } from 'redux'
import { DELETE_CONTACT } from '../../config/actionTypes'

interface DeleteContactActionInterface extends Action<typeof DELETE_CONTACT>{payload: number}

export default DeleteContactActionInterface
