import { Action } from 'redux'
import { SHOW_TOAST } from '../../config/actionTypes'

interface ShowToastInterface extends Action<typeof SHOW_TOAST> {payload: { message: string; isError?: boolean; };}

export default ShowToastInterface
