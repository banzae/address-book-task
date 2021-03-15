import React, { ReactElement } from 'react'
import { faMapPin, faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons'
import Icon from '../../common/Icon'

function CardBody({ email, country }: { email: string; country: string; }): ReactElement {
  return <div className='card-body'>
    <div>
      <label><Icon icon={faEnvelopeOpen}/> </label>
      <span>{email}</span>
    </div>
    <div>
      <label><Icon icon={faMapPin}/></label>
      <span>{country}</span>
    </div>
  </div>
}

export default CardBody
