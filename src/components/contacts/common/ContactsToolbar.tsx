import React, { ReactElement } from 'react'
import Button from '../../common/Button'
import { faAddressBook } from '@fortawesome/free-solid-svg-icons'
import SearchBar from '../../common/searchBar/SearchBar'
import { searchContacts } from '../../../pages/contacts/services/actions'
import { useDispatch } from 'react-redux'
import { createContactPageRoute } from '../../../config/routes'
import { useHistory } from 'react-router'

function ContactsToolbar(): ReactElement {
  const dispatch = useDispatch()
  const history = useHistory()

  const onSearch = (searchValue: string) => {
    dispatch(searchContacts(searchValue))
  }

  const onCreateContact = () => {
    history.push(createContactPageRoute.path)
  }


  return <div id='toolbar'>
    <div className='buttons-container'>
      <Button icon={faAddressBook} text={'Create'} onClick={onCreateContact}/>
    </div>
    <SearchBar onSearch={onSearch}/>
  </div>
}

export default ContactsToolbar
