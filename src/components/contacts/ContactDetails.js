import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ContactDetails = () => {
  const { id } = useParams();
  const [contact, setContact] = useState(null);

  useEffect(
    () => async () => {
      try {
        const response = await axios.get(
          `http://localhost:1337/passenger/${id}`
        );
        const fetchedContact = response.data;
        setContact(fetchedContact);
        updateRecentContacts(fetchedContact); // Update recent contacts
      } catch (error) {
        console.error("Error fetching contact details:", error);
      }
    },

    []
  );

  const updateRecentContacts = (newContact) => {
    const storedContacts = localStorage.getItem("recentContacts");
    let recentContacts = storedContacts ? JSON.parse(storedContacts) : [];

    const filteredContacts = recentContacts.filter(
      (contact) => contact.id !== newContact.id
    );

    const updatedContacts = [newContact, ...filteredContacts].slice(0, 4);
    localStorage.setItem("recentContacts", JSON.stringify(updatedContacts));
  };


  return (
    <div>
      {console.log("contactDetails")}
      <h2>Contact Details</h2>
      {contact ? (
        <div>
          <p>
            Name: {contact.first_name} {contact.last_name}
          </p>
          <p>Phone: {contact.phone}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default React.memo(ContactDetails);
