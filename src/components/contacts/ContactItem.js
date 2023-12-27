import React from "react";
import { Link } from "react-router-dom";

const ContactItem = ({ contact }) => {
  return (
    <li>
      <Link to={{ pathname: `/${contact.id}`, state: { contact } }}>
        {contact.first_name} {contact.last_name} - {contact.phone}
      </Link>
    </li>
  );
};

export default ContactItem;
