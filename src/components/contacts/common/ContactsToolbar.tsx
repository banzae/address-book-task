import React, { ReactElement, useState } from 'react'
import Button from '../../common/Button'
import { faAddressBook } from '@fortawesome/free-solid-svg-icons'
import SearchBar from '../../common/searchBar/SearchBar'
import { searchContacts } from '../../../pages/contacts/services/actions'
import { useDispatch } from 'react-redux'
import CreateContact from '../createContact/CreateContact'

function ContactsToolbar(): ReactElement {
  const dispatch = useDispatch()
  const [showAddContact, setShowAddContact] = useState(false)

  const onSearch = (searchValue: string) => {
    dispatch(searchContacts(searchValue))
  }

  const onCreateContact = () => {
    setShowAddContact(true)
  }


  return <div id='toolbar'>
    <CreateContact show={showAddContact} close={() => setShowAddContact(false)}/>
    <div className='buttons-container'>
      <Button icon={faAddressBook} text={'Create'} onClick={onCreateContact}/>
    </div>
    <SearchBar onSearch={onSearch}/>
  </div>
}

export default ContactsToolbar
