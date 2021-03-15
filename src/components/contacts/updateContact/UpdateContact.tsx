import React, { ReactElement, useEffect } from 'react'
import useForm from '../../../hooks/useForm'
import { editContact } from '../../../pages/contacts/services/actions'
import { useDispatch, useSelector } from 'react-redux'
import ContactInterface from '../../../interfaces/contact/contact.interface'
import ContactForm from '../common/ContactForm'
import Modal from '../../common/modal/Modal'
import { RootReducer } from '../../../store/rootReducer'

function UpdateContact({ show, close, contactId }: { show: boolean; close: () => void, contactId: number }): ReactElement {
  const dispatch = useDispatch()
  const {contacts: {contacts}} = useSelector((state: RootReducer) => state)

  const onSubmit = () => {
    dispatch(editContact({ id: contactId, ...values }, close))
  }

  const { values, setValues, handleChange, handleSubmit, handleDropdownChange } = useForm<ContactInterface>({
    firstName: '',
    lastName: '',
    email: '',
    country: ''
  }, onSubmit)

  useEffect(() => {
    const contact = contacts.find(val => val.id === contactId)
    if(contact) setValues(contact)
  }, [contacts, contactId, setValues])

  return <Modal show={show} close={close} className='confirmation-modal'>
    <h2>Update contact</h2>
    <div>
      <ContactForm handleDropdownChange={handleDropdownChange} handleSubmit={handleSubmit} handleChange={handleChange} values={values}/>
    </div>
  </Modal>
}

export default UpdateContact
