import React, { ReactElement, useEffect, useState } from 'react'
import useForm from '../../../hooks/useForm'
import { deleteContact, editContact } from '../../../pages/contacts/services/actions'
import { useDispatch, useSelector } from 'react-redux'
import ContactInterface from '../../../interfaces/contact/contact.interface'
import ContactForm from '../common/ContactForm'
import { RootReducer } from '../../../store/rootReducer'
import { useHistory, useParams } from 'react-router'
import Button from '../../common/Button'
import { contactsPageRoute } from '../../../config/routes'
import DeleteContactModal from '../deleteContact/DeleteContactModal'
import { Link } from 'react-router-dom'

interface ParamTypes {
  contactId: string;
}

function UpdateContact(): ReactElement {
  const dispatch = useDispatch()
  const {contacts: {contacts}} = useSelector((state: RootReducer) => state)
  const {contactId} = useParams<ParamTypes>()
  const [deleteModal, setDeleteModal] = useState(false)
  const history = useHistory()

  const onSubmit = () => {
    dispatch(editContact({ id: contactId, ...values }, close))
  }

  const onDeleteClick = () => {
    setDeleteModal(true)
  }

  const onDeleteModalClose = () => {
    setDeleteModal(false)
  }

  const onConfirmDeleteClick = (e?: React.ChangeEvent) => {
    e && e.preventDefault()
    dispatch(deleteContact(+contactId, () => history.push(contactsPageRoute.path)))
  }

  const { values, setValues, handleChange, handleSubmit, handleDropdownChange } = useForm<ContactInterface>({
    firstName: '',
    lastName: '',
    email: '',
    country: ''
  }, onSubmit)

  useEffect(() => {
    const contact = contacts.find(val => val.id === +contactId)
    if(contact) setValues(contact)
  }, [contacts, contactId, setValues])

  return <div className='form-page'>
    <DeleteContactModal show={deleteModal} close={onDeleteModalClose} onConfirm={onConfirmDeleteClick}/>
    <h2>Update contact</h2>
    <div>
      <ContactForm handleDropdownChange={handleDropdownChange} handleSubmit={handleSubmit} handleChange={handleChange} values={values}/>
      <Button onClick={onDeleteClick} text={'Delete contact'} className={'btn-danger delete-btn'} />
      <Link to={contactsPageRoute.path}>Back to home page</Link>
    </div>
  </div>
}

export default UpdateContact
