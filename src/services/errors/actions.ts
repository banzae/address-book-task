import { Action, ActionCreator, Dispatch } from 'redux'
import { setToastMessage } from '../feedback/actions'
import { SET_ERRORS } from '../../config/actionTypes'

export interface ISetErrorAction extends Action<typeof SET_ERRORS> {payload: any}

export const setErrors: ActionCreator<any> = (err: any) => (dispatch: Dispatch) => {
  err.short_message && dispatch(setToastMessage({message: err.short_message, isError: true }))
  dispatch({type: SET_ERRORS, payload: err?.response?.data?.info || err})
}
