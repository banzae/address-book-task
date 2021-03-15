import ReduxActionInterface from '../../interfaces/redux/reduxAction.interface'
import { SET_ERRORS } from '../../config/actionTypes'

export interface IErrorsState {
  [k: string]: string
}

const errors =  (state: IErrorsState = {}, action: ReduxActionInterface): IErrorsState => {
  switch (action.type) {
    case SET_ERRORS:
      return action.payload;
    default:
      console.log("state", state)
      return {};
  }
};

export default errors
