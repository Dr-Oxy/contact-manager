import React from "react";

import { useHistory } from "react-router-dom";

import "../style-sheet/AddCon.css";
import { useState } from "react";

import EditContact from "./EditContact";

const AddContact = ({
  onAdd,
  isEditing,
  setIsEditing,
  currentContact,
  setCurrentContact,
  handleUpdateContact,
}) => {
  //creating states for input fields
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  //when form submits
  const history = useHistory();

  const onSubmit = (e) => {
    e.preventDefault();

    if (name === "" || email === "" || phone === "") {
      alert("Please fill all field");
      return;
    }

    onAdd({ name, email, phone });

    setName("");
    setEmail("");
    setPhone("");

    history.push({
      pathname: "/",
    });
  };

  //editing
  //added update contact from(App) to edit form submit button
  const handleEditForm = (e) => {
    e.preventDefault();
    handleUpdateContact(currentContact.id, currentContact);

    history.push({
      pathname: "/",
    });
  };

  const editFalse = () => {
    setIsEditing(false);
  };

  return (
    <div className="form-wrapper">
      {isEditing ? (
        <EditContact
          currentContact={currentContact}
          handleEditForm={handleEditForm}
          setCurrentContact={setCurrentContact}
          editFalse={editFalse}
        />
      ) : (
        <form onSubmit={onSubmit} className="contact-form">
          <h2>Add Contact</h2>
          <div className="form-input">
            <label>Name:</label>

            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="input-group"
              type="text"
              name="name"
              placeholder="Jane Doe"
            />
          </div>

          <div className="form-input">
            <label>Phone:</label>

            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="input-group"
              type="tel"
              name="phone"
              placeholder="090012000"
            />
          </div>

          <div className="form-input">
            <label>Email:</label>

            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input-group"
              type="email"
              name="email"
              placeholder="janedoe@email.com"
            />
          </div>

          <button>Add</button>
        </form>
      )}
    </div>
  );
};
export default AddContact;
