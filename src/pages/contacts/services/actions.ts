import ContactInterface from '../../../interfaces/contact/contact.interface'
import { ActionCreator, Dispatch } from 'redux'
import SetContactsActionInterface from '../../../interfaces/contact/setContactsAction.interface'
import { CREATE_CONTACT, DELETE_CONTACT, SET_CONTACTS, UPDATE_CONTACT } from '../../../config/actionTypes'
import DeleteContactActionInterface from '../../../interfaces/contact/deleteContactAction.interface'
import CreateContactActionInterface from '../../../interfaces/contact/createContactAction.interface'
import db from '../../../services/storage/db'
import UpdateContactActionInterface from '../../../interfaces/contact/updateContactAction.interface'
import { setErrors } from '../../../services/errors/actions'
import validateContactForm from '../../../validation/validateContact'
import { setToastMessage } from '../../../services/feedback/actions'

export const getContacts: ActionCreator<void> = () => async (dispatch: Dispatch) => {
  try {
    const contacts = await db.getAll()
    return dispatch(setContacts(contacts))
  } catch (err) {
    dispatch(setErrors(err))
  }
}

export const createContact: ActionCreator<void> = (contactData: ContactInterface, cb?: () => void) => async (dispatch: Dispatch) => {
  try {
    const {errors, isValid} = validateContactForm(contactData)
    if(!isValid) throw errors
    await db.createContact(contactData)
    dispatch(addToContacts(contactData))
    dispatch(setToastMessage({message: "Successfully created contact"}))

    cb && cb()
  } catch (err) {
    dispatch(setErrors(err))
  }

}

export const editContact: ActionCreator<void> = (contactData: ContactInterface, cb?: () => void) => async (dispatch: Dispatch) => {
  try {
    const {errors, isValid} = validateContactForm(contactData)
    if(!isValid) throw errors
    await db.updateContact(contactData)
    dispatch(modifyContact(contactData))
    dispatch(setToastMessage({message: "Successfully edited contact"}))
    cb && cb()
  } catch (err) {
    dispatch(setErrors(err))

  }
}

export const deleteContact: ActionCreator<void> = (contactId: number, cb?: () => void) => async (dispatch: Dispatch) => {
  try {
    await db.deleteContact(contactId)
    cb && cb()
  } catch (err) {
    dispatch(setErrors(err))
  }
  dispatch(deleteFromContacts(contactId))
}

export const searchContacts: ActionCreator<void> = (value: string) => async (dispatch: Dispatch) => {
  try {
    const contacts = await db.search(value)
    dispatch(setContacts(contacts))
  } catch (err) {
    dispatch(setErrors(err))
  }
}

export const setContacts: ActionCreator<SetContactsActionInterface> = (payload: ContactInterface[]) => ({type: SET_CONTACTS, payload})
export const addToContacts: ActionCreator<CreateContactActionInterface> = (payload: ContactInterface) => ({type: CREATE_CONTACT, payload})
export const modifyContact: ActionCreator<UpdateContactActionInterface> = (payload: ContactInterface) => ({type: UPDATE_CONTACT, payload})
export const deleteFromContacts: ActionCreator<DeleteContactActionInterface> = (payload: number) => ({type: DELETE_CONTACT, payload})
