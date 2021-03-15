import Validator from 'validator'
import ContactInterface from '../interfaces/contact/contact.interface'
import isEmpty from 'lodash.isempty'
import { getCode } from 'country-list'

function validateContactForm(contactData: ContactInterface): {errors: any, isValid: boolean} {
  const errors: ContactInterface | any = {}

  if(isEmpty(contactData.firstName)) errors.firstName = 'First name cannot be empty'
  if(isEmpty(contactData.lastName)) errors.lastName = 'Last name cannot be empty'
  if(isEmpty(contactData.email)) errors.email = 'Email cannot be empty'
  if(isEmpty(contactData.country)) errors.country = 'Country cannot be empty'


  if(!Validator.isEmail(contactData.email) && !errors.email) errors.email = 'Invalid email format'

  if(!getCode(contactData.country) && !errors.country) errors.country = 'Invalid country'

  return {errors, isValid: isEmpty(errors)}

}

export default validateContactForm
