import { ActionCreator } from 'redux'
import ShowLoaderInterface from '../../interfaces/feedback/showLoader.interface'
import { SHOW_LOADER, SHOW_TOAST } from '../../config/actionTypes'
import ShowToastInterface from '../../interfaces/feedback/showToast.interface'

export const showLoader: ActionCreator<ShowLoaderInterface> = (payload: boolean) => ({type: SHOW_LOADER, payload})
export const setToastMessage: ActionCreator<ShowToastInterface> = (payload: { message: string; isError?: boolean; }) => ({type: SHOW_TOAST, payload})
