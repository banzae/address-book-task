import React, { ReactElement } from 'react'
import Icon from '../../common/Icon'
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons'

interface CardHeaderInterface {
  id: number;
  firstName: string;
  lastName: string;
  onEditClick?: (id: number) => void
}

function CardHeader({ firstName, lastName, onEditClick, id }: CardHeaderInterface): ReactElement {

  const onEdit = () => {
    onEditClick && onEditClick(id)
  }

  return <div className='card-header'>
    <span>{`${firstName} ${lastName}`}</span>
    <div>
      <span onClick={onEdit}><Icon icon={faPencilAlt} /></span>
    </div>
  </div>
}

export default CardHeader
