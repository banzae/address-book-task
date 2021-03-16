import React, { ReactElement, useEffect } from 'react'
import useForm from '../../../hooks/useForm'
import { createContact } from '../../../pages/contacts/services/actions'
import { useDispatch } from 'react-redux'
import ContactInterface from '../../../interfaces/contact/contact.interface'
import ContactForm from '../common/ContactForm'
import { Link } from 'react-router-dom'
import { contactsPageRoute } from '../../../config/routes'

function CreateContact(): ReactElement {
  const dispatch = useDispatch()

  const onSubmit = () => {
    dispatch(createContact(values))
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

  return <div className={'form-page'}>
    <h2>Create contact</h2>
    <div>
      <ContactForm handleDropdownChange={handleDropdownChange} handleSubmit={handleSubmit} handleChange={handleChange} values={values}/>
      <Link to={contactsPageRoute.path}>Back to home page</Link>
    </div>
  </div>
}

export default CreateContact
