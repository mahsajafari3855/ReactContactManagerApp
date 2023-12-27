import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import ContactItem from "./ContactItem";
import SearchBar from "./SearchBar";

const ContactList = () => {
  const [contacts, setContacts] = useState([]);
  const [filteredContacts, setFilteredContacts] = useState([]); // State for filtered contacts
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await axios.get("http://localhost:1337/passenger");
        setContacts(response?.data?.items);
        setFilteredContacts(response?.data?.items); // Set filtered contacts initially
      } catch (error) {
        console.error("Error fetching contacts:", error);
      }
    };

    fetchContacts();
  }, []);
  let debounceTimer;

  const handleSearch = (value) => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      const filtered = contacts.filter(
        (contact) =>
          contact?.first_name?.toLowerCase().includes(value.toLowerCase()) ||
          contact?.phone.includes(value)
      );
      setFilteredContacts(filtered);
      setSearchTerm(value);
    }, 2000);
  };
  return (
    <div>
      {console.log("contactList")}
      <h2>Contact List</h2>
      <SearchBar handleSearch={handleSearch} />

      <ul>
        {filteredContacts?.map((contact) => (
          <ContactItem key={contact?.id} contact={contact} />
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
