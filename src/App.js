import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactDetails from "./components/contacts/ContactDetails";
import ContactList from "./components/contacts/ContactList";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<ContactList />} />
        <Route path="/:id" element={<ContactDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
