import React, { ReactElement } from 'react'
import Modal from '../../common/modal/Modal'
import Button from '../../common/Button'

interface DeleteContactModalInterface {
  show: boolean;
  close: () => void,
  onConfirm: () => void
}

function DeleteContactModal(props: DeleteContactModalInterface): ReactElement {
  return <Modal show={props.show} close={props.close} className='confirmation-modal'>
    <h2>Are you sure?</h2>
    <p>You want to delete this contact?</p>
    <div>
      <Button text={'Yes'} onClick={props.onConfirm}/>
      <Button className='btn-secondary' text={'No'} onClick={props.close}/>

    </div>
  </Modal>
}

export default DeleteContactModal
