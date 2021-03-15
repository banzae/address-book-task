import Dexie from 'dexie'
import ContactInterface from '../../interfaces/contact/contact.interface'

export interface DatabaseInterface extends Database {
  contacts: Dexie.Table<ContactInterface, number>;
}

class Database extends Dexie implements DatabaseInterface {
  contacts: Dexie.Table<ContactInterface, number>
  db: Database

  constructor() {
    super('ContactsDatabase')
    this.version(1).stores({
      contacts: '++id,&email, firstName, lastName, country'
    })

    this.db = this
    this.contacts = this.table('contacts')
  }


  async getAll() {
    return this.contacts.toArray()
  }


  async createContact(contact: ContactInterface) {
    try {
      delete contact.id
      await this.db.contacts.add(contact)
    } catch (err) {
      throw { short_message: err.message }
    }
  }

  deleteContact(contactId: number) {
    return this.contacts.where({ id: contactId }).delete()
  }

  updateContact(contact: ContactInterface) {
    return this.contacts.where({ id: contact.id }).modify(contact)
  }

  search(value: string) {
    const regex = new RegExp(value, 'igm')
    return value ? this.contacts.filter(contact => regex.test(contact.firstName)
      || regex.test(contact.lastName)
      || regex.test(contact.email)).toArray() : this.getAll()
  }
}

const db = new Database()
export default db
