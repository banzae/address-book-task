import React, { ReactElement } from 'react'
import ContactInterface from '../../../interfaces/contact/contact.interface'
import CardHeader from './CardHeader'
import CardBody from './CardBody'
import './ContactCard.scss'
import { useDispatch } from 'react-redux'
import { setErrors } from '../../../services/errors/actions'
import { editContactPageRoute } from '../../../config/routes'
import { useHistory } from 'react-router'

function ContactCard(contact: ContactInterface): ReactElement {
  const dispatch = useDispatch()
  const history = useHistory()

  const onEditClick = (contactId: number) => {
    dispatch(setErrors({}))
    history.push(editContactPageRoute.path.replace(":contactId", contactId.toString()))
  }


  return <div className='contact-card-wrapper'>
    <CardHeader
      id={contact.id || 0}
      firstName={contact.firstName}
      lastName={contact.lastName}
      onEditClick={onEditClick}
    />
    <CardBody email={contact.email} country={contact.country}/>
  </div>
}

export default ContactCard
