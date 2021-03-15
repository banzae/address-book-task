import React, { ReactElement, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getContacts } from './services/actions'
import { RootReducer } from '../../store/rootReducer'
import ContactInterface from '../../interfaces/contact/contact.interface'
import ContactCard from '../../components/contacts/contactCard/ContactCard'
import './ContactPage.scss'
import ContactsToolbar from '../../components/contacts/common/ContactsToolbar'

function ContactsPage(): ReactElement {
  const dispatch = useDispatch()
  const { contacts: { contacts } } = useSelector((state: RootReducer) => state)


  useEffect(() => {
    dispatch(getContacts())
  }, [dispatch])

  return <div className='container'>
    <ContactsToolbar />
    <div className='contacts-container'>
      {contacts.map((contact: ContactInterface) => <ContactCard key={contact.id} {...contact} />)}
    </div>
  </div>
}

export default ContactsPage
