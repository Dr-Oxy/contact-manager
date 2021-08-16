import React from "react";
import "../style-sheet/ContactList.css";

import ContactCard from "./ContactCard";

import { Link } from "react-router-dom";

const ContactList = ({ contacts, onDel, handleEditClick }) => {
  return (
    <div className="list-container">
      <div className="heading">
        <h2>Contact List</h2>

        <Link to="/add">
          <button>Add contact</button>
        </Link>
      </div>

      {contacts.map((contact) => (
        <ContactCard
          key={contact.id}
          contact={contact}
          onDelete={onDel}
          handleEdit={handleEditClick}
        />
      ))}
    </div>
  );
};

export default ContactList;
