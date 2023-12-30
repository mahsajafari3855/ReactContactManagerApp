import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { RiseLoader } from "react-spinners";
import DefaultAvatar from "../../assest/user.jpg";

const ContactDetails = () => {
  const{id}=useParams()
  const [contact, setContact] = useState(null);
  const [loading, setLoading] = useState(true);
  

  useEffect(
    () => async () => {
      try {
        const response = await axios.get(
          `http://localhost:1337/passenger/${id}`
        );
        const fetchedContact = response.data;
        setContact(fetchedContact);
        setLoading(false);

        updateRecentContacts(fetchedContact); // Update recent contacts
      } catch (error) {
        setLoading(false);

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
    <div className="bg-gray-100 min-h-screen py-8 px-4">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-4">Contact Details</h2>
        {loading ? ( // Check if loading, show loading indicator
          <div className="flex justify-center items-center h-40">
            <RiseLoader color="#e542eb" />
          </div>
        ) : (
          <div>
            <div className="grid md:grid-cols-2">
              <div className="pt-10 ">
                <p className="text-lg font-semibold mt-7">
                  Name: {contact.first_name} {contact.last_name}
                </p>
                <p className="text-gray-600">Phone: {contact.phone}</p>
                <p className="text-gray-600">Email: {contact.email}</p>
                <p className="text-gray-600">Gender: {contact.gender}</p>
                <p className="text-gray-600">Telegram: {contact.telegram}</p>
              </div>
              <div className="justify-center items-center shadow m-7">
                <img
                  alt="user"
                  className="mx-auto "
                  src={contact.avatar ? contact.avatar : DefaultAvatar}
                />
              </div>
            </div>
            {contact.note && (
              <div className="border-t border-gray-300 pt-4">
                <h3 className="text-xl font-semibold mb-2">Notes</h3>
                <p className="text-gray-600">{contact.note}</p>
              </div>
            )}
          </div>
        )}
        <Link
          to="/"
          className="block  text-center mt-8  hover:underline bg-gray-300 py-2 px-4 rounded-md back-btn"
        >
          Back to Contacts
        </Link>
      </div>
    </div>
  );
};

export default React.memo(ContactDetails);
