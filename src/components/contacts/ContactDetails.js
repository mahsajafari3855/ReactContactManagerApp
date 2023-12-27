import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ContactDetails = () => {
  const { id } = useParams();
  const [contact, setContact] = useState(null);

  useEffect(() => {
    const fetchContact = async () => {
      try {
        const response = await axios.get(
          `http://localhost:1337/passenger/${id}`
        );
        setContact(response.data);
      } catch (error) {
        console.error("Error fetching contact details:", error);
      }
    };

    fetchContact();
  }, [id]);

  return (
    <div>
      {console.log("ContactDetails")}
      <h2>Contact Details</h2>
      {contact ? (
        <div>
          <p>
            Name: {contact.first_name} {contact.last_name}
          </p>
          <p>Phone: {contact.phone}</p>
          {/* Display other contact details */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ContactDetails;
