import React, { useState, useEffect } from "react";
import axios from "axios";
import ContactItem from "./ContactItem";

const ContactList = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:1337/passenger");
        setContacts(response.data.items);
      } catch (error) {
        console.error("Error fetching contacts:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Contact List</h2>
      <ul>
        {contacts?.map((contact) => (
          <ContactItem key={contact.id} contact={contact} />
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
