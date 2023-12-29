import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import ContactItem from "./ContactItem";
import SearchBar from "./SearchBar";

const ContactList = () => {
  const [contacts, setContacts] = useState([]);
  const [filteredContacts, setFilteredContacts] = useState([]); // State for filtered contacts
  const [searchTerm, setSearchTerm] = useState("");
  const [lastContacts, setLastContacts] = useState([]); // State for filtered contacts

  useEffect(
    () => async () => {
      try {
        const response = await axios.get("http://localhost:1337/passenger");
        const fetchedContacts = response?.data?.items || [];
        setContacts(fetchedContacts);
        setFilteredContacts(fetchedContacts);
        const storedRecentContacts = localStorage.getItem("recentContacts");
        const recentContacts = storedRecentContacts
          ? JSON.parse(storedRecentContacts)
          : [];
        if (recentContacts) {
          setLastContacts(recentContacts);
        }
      } catch (error) {
        console.error("Error fetching contacts:", error);
      }
    },
    []
  );

  useEffect(() => {
    const myArr = [];
    lastContacts.forEach((element) => {
      myArr.push(element.id);
    });
    const newFilterArray = contacts.filter(
      (item) => myArr.findIndex((element) => element === item.id) === -1
    );

    newFilterArray.unshift(...lastContacts);

    setFilteredContacts(newFilterArray);
  }, [lastContacts]);

  const handleSearch = (value) => {
    const filtered = contacts.filter(
      (contact) =>
        contact?.first_name?.toLowerCase().includes(value.toLowerCase()) ||
        contact?.phone.includes(value) ||
        contact?.last_name?.toLowerCase().includes(value.toLowerCase())
    );

    setFilteredContacts(filtered);
    setSearchTerm(value);
  };

  return (
    <div className="bg-gray-100 ">
      {console.log("contactList")}
      <div className=" flex item-center justify-center mx-8">
        <SearchBar handleSearch={handleSearch} />
      </div>

      <div className=" p-5 grid sm:grid-cols-2 md:grid-cols-4  sm:gap-2 lg:gap-6 ">
        {filteredContacts?.map((contact) => (
          <ContactItem key={contact?.id} contact={contact} />
        ))}
      </div>
    </div>
  );
};

export default ContactList;
