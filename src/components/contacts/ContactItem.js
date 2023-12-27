import React from "react";

const ContactItem = ({ contact }) => {
  return (
    <li>
      {contact.name} - {contact.phone} - {contact.city}
    </li>
  );
};

export default ContactItem;
