const fs = require("fs").promises;
const path = require("path");

const contactsPath = path.resolve("./db/contacts.json");

async function listContacts() {
  const data = await fs.readFile(contactsPath, "utf-8");
  const arrayData = JSON.parse(data);
  return arrayData;
}

async function getContactById(contactId) {
  const allContacts = await listContacts();
  const contactById = allContacts.find(
    (contact) => contact.id === `${contactId}`
  );
  return contactById ? contactById : null;
}

async function removeContact(contactId) {
  const allContacts = await listContacts();
  const indexContactId = allContacts.findIndex(
    (contact) => contact.id === `${contactId}`
  );
  if (indexContactId !== -1) {
    allContacts.splice(indexContactId, 1);
    console.table(allContacts)
  }
  return fs.writeFile(contactsPath, JSON.stringify(allContacts));
}

async function addContact(name, email, phone) {
  const allContacts = await listContacts();
  const newContact = { id: `${allContacts.length + 1}`, name, email, phone };
  await allContacts.push(newContact);
  console.table(allContacts)
  return fs.writeFile(contactsPath, JSON.stringify(allContacts));
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};

