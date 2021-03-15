import React, { ReactElement, useEffect, useState } from 'react'
import InputField from '../../common/InputField'
import Button from '../../common/Button'
import ContactInterface from '../../../interfaces/contact/contact.interface'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../../store/rootReducer'
import { setErrors } from '../../../services/errors/actions'
import DropDown from '../../common/DropDown'
import { getNames } from 'country-list'

interface ContactFormProps {
  handleSubmit: (e: React.FormEvent) => void,
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  handleDropdownChange: (e: React.ChangeEvent<HTMLSelectElement>) => void,
  values: ContactInterface
}


function ContactForm({ handleSubmit, values, handleChange, handleDropdownChange }: ContactFormProps): ReactElement {
  const { errors } = useSelector((state: RootReducer) => state)
  const dispatch = useDispatch()
  const [countries, setCountries] = useState<string[]>([])

  useEffect(() => {
    const countries = getNames()
    setCountries(countries)
  }, [])

  useEffect(() => {
    return () => {
      dispatch(setErrors({}))
    }
  }, [dispatch])

  return <form onSubmit={handleSubmit}>
    <InputField
      name='firstName'
      value={values.firstName}
      error={errors.firstName}
      onChange={handleChange}
      placeholder={'Enter your first name'}
    />
    <InputField
      name='lastName'
      value={values.lastName}
      error={errors.lastName}
      onChange={handleChange}
      placeholder={'Enter your last name'}
    />
    <InputField
      name='email'
      value={values.email}
      error={errors.email}
      onChange={handleChange}
      placeholder={'Enter your email'}
    />
    <DropDown
      name='country'
      onChange={handleDropdownChange}
      error={errors.country}
      value={values.country || 'Choose country'}
      selectDefaultValue={'Choose country'}
      options={countries.map(country => <option key={country} value={country}>{country}</option>)}
    />
    <Button
      text={'Submit'}
      type={'submit'}
    />
  </form>
}

export default ContactForm
