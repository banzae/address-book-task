import React, { ReactElement, useEffect } from 'react'
import useForm from '../../../hooks/useForm'
import { createContact } from '../../../pages/contacts/services/actions'
import { useDispatch } from 'react-redux'
import ContactInterface from '../../../interfaces/contact/contact.interface'
import ContactForm from '../common/ContactForm'
import Modal from '../../common/modal/Modal'
import { setErrors } from '../../../services/errors/actions'

function CreateContact({ show, close }: { show: boolean; close: () => void }): ReactElement {
  const dispatch = useDispatch()

  const onSubmit = () => {
    dispatch(createContact(values, onClose))
  }

  const onClose = () => {
    dispatch(setErrors({}))
    close()
  }

  const { values, handleChange, handleSubmit, handleDropdownChange, setValues } = useForm<ContactInterface>({
    firstName: '',
    lastName: '',
    email: '',
    country: ''
  }, onSubmit)

  useEffect(() => {
    return () => {
      setValues({
        firstName: '',
        lastName: '',
        email: '',
        country: ''
      })
    }
  }, [setValues])

  return <Modal show={show} close={onClose} className={'confirmation-modal'}>
    <h2>Create contact</h2>
    <div>
      <ContactForm handleDropdownChange={handleDropdownChange} handleSubmit={handleSubmit} handleChange={handleChange} values={values}/>
    </div>
  </Modal>
}

export default CreateContact
