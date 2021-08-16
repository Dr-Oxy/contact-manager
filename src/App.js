import React from "react";

import Header from "./components/Header";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";
import ContactDetail from "./components/ContactDetail";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { useState, useEffect } from "react";

function App() {
  //creating the states of contacts array
  const [contacts, setContacts] = useState([]);

  //states for the editing part of the app
  const [isEditing, setIsEditing] = useState(false);
  const [currentContact, setCurrentContact] = useState({});

  //1. ADD CONTACTS
  const addContact = (contact) => {
    //create random ids
    const id = Math.floor(Math.random() * 10000) + 1;

    const newContact = { id, ...contact };

    //updating the state of the app with new contact
    setContacts([...contacts, newContact]);
  };

  //2. LOCAL STORAGE
  //In react, Local storage key must be saved in a variable
  const Local_Storage_Key = "contactBook";

  //Retrieve items from local storage, when page refreshes, contacts remain
  useEffect(() => {
    const getContacts = JSON.parse(localStorage.getItem(Local_Storage_Key));

    // if contacts are in the local storage, update the state of contacts
    if (getContacts) {
      setContacts(getContacts);
    }
  }, []);

  //Save contact list in local storage
  useEffect(() => {
    localStorage.setItem(Local_Storage_Key, JSON.stringify(contacts));
  }, [contacts]);

  //3. EDIT CONTACT
  //when you click on the edit button, set edit component true
  function handleEditClick(contact) {
    // set editing to true
    setIsEditing(true);
    // set the currentTodo to the todo item that was clicked
    setCurrentContact({ ...contact });
  }

  //update the edited values
  function handleUpdateContact(id, updatedContact) {
    const updatedItem = contacts.map((contact) => {
      return contact.id === id ? updatedContact : contact;
    });
    // set editing to false because this function will be used inside a onSubmit function - which means the data was submited and we are no longer editing
    setIsEditing(false);
    // update the todos state with the updated todo
    setContacts(updatedItem);
  }

  //4. DELETE CONTACT
  const deleteContactHandler = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route
            path="/"
            exact
            render={() => (
              <ContactList
                contacts={contacts}
                onDel={deleteContactHandler}
                handleEditClick={handleEditClick}
              />
            )}
          />

          <Route
            path="/add"
            render={() => (
              <AddContact
                onAdd={addContact}
                isEditing={isEditing}
                setEdit={setIsEditing}
                currentContact={currentContact}
                setCurrentContact={setCurrentContact}
                handleUpdateContact={handleUpdateContact}
              />
            )}
          />

          <Route path="/contact/:id" component={ContactDetail} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
