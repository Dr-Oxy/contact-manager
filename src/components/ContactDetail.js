import React from "react";
import { Link } from "react-router-dom";
import "../style-sheet/ContactList.css";
import avatar from "../assets/avatar.svg";

const ContactDetail = (props) => {
  //consolelog(props), check location, we are going to get
  //our data from there
  //   console.log(props);

  const { name, email, phone } = props.location.state.contact;

  return (
    <div className="detail-wrap">
      <div className="card">
        <div className="card-img">
          <img src={avatar} alt="contact avatar" />
        </div>

        <div className="card-body">
          <p className="name">{name}</p>
          <p className="phone">{phone}</p>
          <p className="email">{email}</p>
        </div>
      </div>

      <Link to="/">
        <button>Back</button>
      </Link>
    </div>
  );
};

export default ContactDetail;
