import { FunctionComponent } from 'react'

interface IRoute {
  path: string;
  exact?: boolean;
  component: FunctionComponent
}

export default IRoute
