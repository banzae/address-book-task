import React, { ReactElement } from 'react'
import Routes from './components/routes/Routes'
import './App.scss'
import './typography/styles.scss'
import { useSelector } from 'react-redux'
import { RootReducer } from './store/rootReducer'
import Toast from './components/common/toast/Toast'

function App(): ReactElement {
  const { feedback: { showToast } } = useSelector((state: RootReducer) => state)
  return <div className="app-container">
    {showToast?.message ? <Toast/> : null}
    <Routes/>
  </div>
}

export default App
