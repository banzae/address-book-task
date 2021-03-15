import React, { ReactElement } from 'react'
import Icon from '../../common/Icon'
import { faTrash, faPencilAlt } from '@fortawesome/free-solid-svg-icons'

interface CardHeaderInterface {
  id: number;
  firstName: string;
  lastName: string;
  onDeleteClick?: (id: number) => void
  onEditClick?: (id: number) => void
}

function CardHeader({ firstName, lastName, onDeleteClick, onEditClick, id }: CardHeaderInterface): ReactElement {

  const onDelete = () => {
    onDeleteClick && onDeleteClick(id)
  }

  const onEdit = () => {
    onEditClick && onEditClick(id)
  }

  return <div className='card-header'>
    <span>{`${firstName} ${lastName}`}</span>
    <div>
      <span onClick={onDelete}><Icon icon={faTrash} /></span>
      <span onClick={onEdit}><Icon icon={faPencilAlt} /></span>
    </div>
  </div>
}

export default CardHeader
