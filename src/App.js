import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactDetails from "./components/contacts/ContactDetails";
import ContactList from "./components/contacts/ContactList";
import Home from "./pages/Home";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/contacts" element={<ContactList />} />
        <Route path="/contacts/:id" element={<ContactDetails />} />
      </Routes>
    </Router>
    // <Router>
    //   <Routes>
    //     <Route exact path="/" element={<Home />} />
    //     <Route exact path="/contacts" element={<ContactList />} />
    //     <Route path="/contacts/:id" element={<ContactDetails />} />
    //   </Routes>
    // </Router>
  );
};

export default App;
