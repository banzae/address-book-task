import React, { ReactElement } from 'react'

const Backdrop = (props: {onClick?: () => void, show?: boolean;}): ReactElement | null =>
  props.show ? <div className='backdrop' onClick={props.onClick} /> : null;

export default Backdrop;
