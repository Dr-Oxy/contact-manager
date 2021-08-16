import React from "react";
import "../style-sheet/AddCon.css";

const EditContact = ({
  currentContact,
  setCurrentContact,
  editFalse,
  handleEditForm,
}) => {
  return (
    <div>
      <form onSubmit={handleEditForm} className="contact-form">
        <h2>Edit Contact</h2>
        <div className="form-input">
          <label>Edit Name:</label>

          <input
            value={currentContact.name}
            onChange={(e) =>
              setCurrentContact({
                ...currentContact,
                name: e.target.value,
              })
            }
            className="input-group"
            type="text"
            name="edit-name"
            placeholder="edit Jane Doe"
          />
        </div>

        <div className="form-input">
          <label>Edit Phone:</label>

          <input
            value={currentContact.phone}
            onChange={(e) =>
              setCurrentContact({
                ...currentContact,
                phone: e.target.value,
              })
            }
            className="input-group"
            type="tel"
            name="edit-phone"
            placeholder="edit phone number"
          />
        </div>

        <div className="form-input">
          <label>Edit Email:</label>

          <input
            value={currentContact.email}
            onChange={(e) =>
              setCurrentContact({
                ...currentContact,
                email: e.target.value,
              })
            }
            className="input-group"
            type="email"
            name="edit-email"
            placeholder="edit janedoe@email.com"
          />
        </div>

        <button type="submit" style={{ marginRight: "10px" }}>
          Update
        </button>

        <button style={{ backgroundColor: "red" }} onClick={() => editFalse}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default EditContact;
