import React, { useState } from "react";

const SearchBar = ({ handleSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    handleSearch(e.target.value); // Pass the search term to the parent component
  };

  return (
    <>
      <input
        type="text"
        placeholder="Search contacts..."
        value={searchTerm}
        onChange={handleChange}
        className=" mt-6 rounded-md p-2 w-full"
      />
    </>
  );
};

export default SearchBar;
