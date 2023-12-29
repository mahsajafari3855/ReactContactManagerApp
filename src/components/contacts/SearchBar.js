import React, { useState } from "react";

const SearchBar = ({ handleSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    handleSearch(e.target.value); // Pass the search term to the parent component
  };

  return (
    <div>
      {console.log("searchBar")}

      <input
        type="text"
        placeholder="Search contacts..."
        value={searchTerm}
        onChange={handleChange}
        className="ml-20 mt-6 rounded-md p-2"
      />
    </div>
  );
};

export default SearchBar;
