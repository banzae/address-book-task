import ReduxActionInterface from '../../interfaces/redux/reduxAction.interface'
import { SHOW_LOADER, SHOW_TOAST } from '../../config/actionTypes'

export interface IFeedbackState {
  showSpinner: boolean;
  showToast?: { message: string, isError: boolean } | null
}

const initialState: IFeedbackState = {
  showSpinner: false,
  showToast: null
}

const feedbackReducer = (state = initialState, action: ReduxActionInterface): IFeedbackState => {
  switch (action.type) {
    case SHOW_TOAST:
      return {...state, showToast: action.payload}
    case SHOW_LOADER:
      return {...state, showSpinner: action.payload}
    default: return state
  }
}

export default feedbackReducer
