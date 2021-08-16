import React from "react";
import "../style-sheet/ContactList.css";

import { FaTrash } from "react-icons/fa";
import { FaPenSquare } from "react-icons/fa";

import { Link } from "react-router-dom";

const ContactCard = ({ contact, onDelete, handleEdit }) => {
  //saving the id from contact object
  const id = contact.id;

  return (
    <div className="contact-ls">
      <div className="contact-profile">
        <div className="avatar">
          <svg
            width="40"
            height="40"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="25" cy="25" r="25" fill="rgb(26, 96, 187)" />
            <path
              d="M18.8204 34.3326L12.0815 37.9748C11.6861 38.1884 11.3307 38.451 11 38.7373C14.9289 42.0197 20.0007 44 25.5422 44C31.0427 44 36.0821 42.0493 40 38.8116C39.6386 38.5093 39.2466 38.2374 38.8119 38.0229L31.5958 34.4483C30.6634 33.9864 30.0745 33.0423 30.0745 32.0095V29.2042C30.2774 28.9753 30.5092 28.6814 30.7572 28.3343C31.7407 26.9579 32.4847 25.4438 33.0003 23.8553C33.9259 23.5724 34.6077 22.7254 34.6077 21.7189V18.7244C34.6077 18.0657 34.312 17.4771 33.8526 17.065V12.7363C33.8526 12.7363 34.7501 6 25.543 6C16.336 6 17.2335 12.7363 17.2335 12.7363V17.065C16.7732 17.4771 16.4784 18.0657 16.4784 18.7244V21.7189C16.4784 22.5076 16.8968 23.2017 17.5232 23.6028C18.2783 26.8599 20.2556 29.2042 20.2556 29.2042V31.9402C20.2547 32.9367 19.7042 33.8546 18.8204 34.3326Z"
              fill="white"
            />
          </svg>
        </div>

        <Link
          to={{
            pathname: `/contact/${id}`,
            state: { contact: contact },
          }}
          style={{ textDecoration: "none", color: "unset" }}
        >
          <div className="contact-details">
            <p className="name">{contact.name}</p>
            <p className="phone">{contact.phone}</p>
            <p className="email">{contact.email}</p>
          </div>
        </Link>
      </div>

      <div style={{ marginTop: "10px" }} className="icons">
        <Link to="/add">
          <button
            className="card-btn btn-edit"
            onClick={() => handleEdit(contact)}
          >
            <span>Edit</span>
            <FaPenSquare
              style={{ fontSize: "16px", color: "white", marginLeft: "5px" }}
            />
          </button>
        </Link>

        <button
          className="card-btn del-btn"
          onClick={() => onDelete(contact.id)}
        >
          <span>Delete</span>
          <FaTrash style={{ fontSize: "12px" }} />
        </button>
      </div>
    </div>
  );
};

export default ContactCard;
