import React, { ReactElement } from 'react'
import { contactsPageRoute, publicRoutes } from '../../config/routes'
import IRoute from '../../interfaces/routes/route.interface'
import { Route, Switch } from 'react-router'
import { BrowserRouter, Redirect } from 'react-router-dom'

function Routes(): ReactElement {
  return <BrowserRouter>
    <Switch>
      {publicRoutes.map((route: IRoute) => {
        return <Route key={route.path} {...route} />
      })}
      <Redirect to={contactsPageRoute.path}/>
    </Switch>
  </BrowserRouter>
}

export default Routes
