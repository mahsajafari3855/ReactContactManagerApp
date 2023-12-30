import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactDetails from "./components/contacts/ContactDetails";
import ContactList from "./components/contacts/ContactList";
import ErrorBoundary from "./ErrorBoundary";
import ErrorBoundaryTest from "./components/ErrorBoundaryTest";

const App = () => {
  return (
    <ErrorBoundary>
      <Router>
        <Routes>
          <Route exact path="/" element={<ContactList />} />
          <Route path="/:id" element={<ContactDetails />} />
          <Route path="/error-boundary" element={<ErrorBoundaryTest />} />
          {/*  ErrorBoundaryTest just for testting this component */}
        </Routes>
      </Router>
    </ErrorBoundary>
  );
};

export default App;
