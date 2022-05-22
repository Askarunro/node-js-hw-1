const { constants } = require("buffer");


const {listContacts,getContactById,removeContact,addContact} = require("./contacts")
const contactsDB = require("./db/contacts.json")

listContacts()
// getContactById(5)
// removeContact(5)
// addContact('fsaf','fsafas','fsafagsgggds')

