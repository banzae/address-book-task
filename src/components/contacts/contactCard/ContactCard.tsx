import React, { ReactElement, useState } from 'react'
import ContactInterface from '../../../interfaces/contact/contact.interface'
import CardHeader from './CardHeader'
import CardBody from './CardBody'
import './ContactCard.scss'
import DeleteContactModal from '../deleteContact/DeleteContactModal'
import { useDispatch } from 'react-redux'
import { deleteContact } from '../../../pages/contacts/services/actions'
import UpdateContact from '../updateContact/UpdateContact'
import { setErrors } from '../../../services/errors/actions'

function ContactCard(contact: ContactInterface): ReactElement {
  const [deleteModal, setDeleteModal] = useState({ show: false, contactId: 0 })
  const [editModal, setEditModal] = useState({ show: false, contactId: 0 })
  const dispatch = useDispatch()

  const onDeleteClick = (contactId: number) => {
    setDeleteModal({ show: true, contactId })
  }

  const onDeleteModalClose = () => {
    setDeleteModal({ show: false, contactId: 0 })
  }

  const onEditClick = (contactId: number) => {
    dispatch(setErrors({}))
    setEditModal({ show: true, contactId })
  }

  const onEditModalClose = () => {
    setEditModal({ show: false, contactId: 0 })
  }

  const onConfirmDeleteClick = () => {
    dispatch(deleteContact(deleteModal.contactId))
  }

  return <div className='contact-card-wrapper'>
    <DeleteContactModal show={deleteModal.show} close={onDeleteModalClose} onConfirm={onConfirmDeleteClick}/>
    <UpdateContact show={editModal.show} close={onEditModalClose} contactId={editModal.contactId} />
    <CardHeader
      id={contact.id || 0}
      firstName={contact.firstName}
      lastName={contact.lastName}
      onDeleteClick={onDeleteClick}
      onEditClick={onEditClick}
    />
    <CardBody email={contact.email} country={contact.country}/>
  </div>
}

export default ContactCard
