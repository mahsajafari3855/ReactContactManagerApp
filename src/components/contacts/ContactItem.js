import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

const ContactItem = ({ contact }) => {
  return (
    <>
      <figure className="bg-white h-80 rounded-lg shadow-md pt-7">
        <img
          alt="user"
          className="w-32 h-32 rounded-full mx-auto"
          src={contact.avatar}
        />
        <figcaption className="text-center mt-5">
          <Link to={{ pathname: `/${contact.id}`, state: { contact } }}>
            <p className="text-gray-700 font-semibold text-xl mb-2">
              {contact.first_name} {contact.last_name}
            </p>
            <p className="text-gray-500 font-medium ">
              <span>Company:</span>
              {contact.company}
            </p>
            <p className="text-gray-500 font-medium">
              <span>Phone:</span>
              {contact.phone}
            </p>
          </Link>
        </figcaption>
      </figure>
    </>
  );
};

export default ContactItem;
