import React, { ReactElement, useEffect } from 'react'
import {useDispatch, useSelector} from "react-redux";
import {setToastMessage} from "../../../services/feedback/actions";
import {RootReducer} from "../../../store/rootReducer";
import classNames from "classnames"
import './Toast.scss'

function Toast(): ReactElement {
  const dispatch = useDispatch()
  const {feedback: {showToast}} = useSelector((state: RootReducer) => state)

  useEffect(() => {
    setTimeout(() => {
      dispatch(setToastMessage(null))
    }, 2000)
  }, [dispatch])

  return <div
    className={classNames('toast-message-wrapper', {'toast-error': showToast?.isError})}>
    {showToast?.message}
  </div>
}

export default Toast
