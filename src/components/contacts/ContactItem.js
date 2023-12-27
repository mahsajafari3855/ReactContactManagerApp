import React from "react";

const ContactItem = ({ contact }) => {
  return (
    <li>
      {contact.first_name} {contact.last_name} - {contact.phone}
    </li>
  );
};

export default ContactItem;
