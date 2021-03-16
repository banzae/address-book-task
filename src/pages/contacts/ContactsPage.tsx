import React, { ReactElement } from 'react'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../store/rootReducer'
import ContactInterface from '../../interfaces/contact/contact.interface'
import ContactCard from '../../components/contacts/contactCard/ContactCard'
import './ContactPage.scss'
import ContactsToolbar from '../../components/contacts/common/ContactsToolbar'

function ContactsPage(): ReactElement {
  const { contacts: { contacts } } = useSelector((state: RootReducer) => state)

  return <div className='container'>
    <ContactsToolbar />
    <div className='contacts-container'>
      {contacts.map((contact: ContactInterface) => <ContactCard key={contact.id} {...contact} />)}
    </div>
  </div>
}

export default ContactsPage
