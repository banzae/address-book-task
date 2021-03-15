import React, { Fragment, ReactElement, useEffect, useRef } from 'react'
import BackDrop from '../BackDrop'
import './Modal.scss'
import classNames from 'classnames'

function Modal({ show, close, className, ...props }: { show: boolean; close: () => void, className?: string, children: ReactElement | ReactElement[]  }): ReactElement {
  const modalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onKeyPressed = (e: KeyboardEvent) => {
      e.code === 'Escape' && close()
    }
    document.addEventListener('keydown', onKeyPressed, false)
    return () => {
      document.removeEventListener('keydown', onKeyPressed, false)
    }
  }, [close])

  useEffect(() => {
    if (modalRef.current) {
      modalRef.current.scrollIntoView()
    }
  }, [modalRef])

  return <Fragment>
    <BackDrop show={show} onClick={close}/>
    <div
      ref={modalRef}
      style={{
        transform: show ? 'translateY(0)' : 'translateY(-100vh)',
        opacity: show ? '1' : '0',
        visibility: show ? 'visible' : 'hidden'
      }}
      className={classNames('custom-modal', {
        [className || '']: className
      })}
    >
      {props.children}
    </div>
  </Fragment>
}

export default Modal
