import IRoute from '../interfaces/routes/route.interface'
import ContactsPage from '../pages/contacts/ContactsPage'
import CreateContact from '../components/contacts/createContact/CreateContact'
import UpdateContact from '../components/contacts/updateContact/UpdateContact'

export const contactsPageRoute: IRoute = { path: '/', exact: true, component: ContactsPage }
export const createContactPageRoute: IRoute = { path: '/create-contact', exact: true, component: CreateContact }
export const editContactPageRoute: IRoute = { path: '/contact-details/:contactId', exact: true, component: UpdateContact }

export const publicRoutes: IRoute[] = [contactsPageRoute, createContactPageRoute, editContactPageRoute]
