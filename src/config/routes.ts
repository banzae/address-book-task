import IRoute from '../interfaces/routes/route.interface'
import ContactsPage from '../pages/contacts/ContactsPage'

export const contactsPageRoute: IRoute = { path: '/', exact: true, component: ContactsPage }

export const publicRoutes: IRoute[] = [contactsPageRoute]
