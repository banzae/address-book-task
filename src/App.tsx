import React, { ReactElement, useEffect } from 'react'
import Routes from './components/routes/Routes'
import './App.scss'
import './typography/styles.scss'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from './store/rootReducer'
import Toast from './components/common/toast/Toast'
import { getContacts } from './pages/contacts/services/actions'

function App(): ReactElement {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getContacts())
  }, [dispatch])

  const { feedback: { showToast } } = useSelector((state: RootReducer) => state)
  return <div className="app-container">
    {showToast?.message ? <Toast/> : null}
    <Routes/>
  </div>
}

export default App
