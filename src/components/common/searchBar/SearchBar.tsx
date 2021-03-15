import React, { ReactElement, useState } from 'react'
import InputField from '../InputField'
import Button from '../Button'


interface SearchBarPropsInterface {
  onSearch: (search: string) => void
}

function SearchBar({ onSearch }: SearchBarPropsInterface): ReactElement {
  const [value, setValue] = useState('')

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  const onSubmit = (e: React.FormEvent) => {
    e && e.preventDefault()
    onSearch(value)
  }

  return <div className='search-container'>
    <form onSubmit={onSubmit}>
      <InputField placeholder='Search by name, last name or email' name='search' onChange={onChange}/>
      <Button type='submit' text={'Search'}/>
    </form>
  </div>
}

export default SearchBar
