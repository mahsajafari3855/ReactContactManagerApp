import React from "react";
import { Link } from "react-router-dom";
import DefaultAvatar from "../../assest/user.jpg";

const ContactItem = ({ contact }) => {
  const { id, avatar, first_name, last_name, company, phone } = contact;

  return (
    <div
      className={`contact-item contact-item-${id} bg-white h-64 rounded-lg shadow-md mb-4 overflow-hidden transition duration-300 ease-in-out transform hover:shadow-lg hover:-translate-y-1`}
    >
      <Link to={{ pathname: `/${id}`, state: { contact } }}>
        <figure className="bg-white h-64 rounded-lg mb-2">
          <img
            alt="user"
            className="w-24 h-24 rounded-full mx-auto"
            src={avatar ? avatar : DefaultAvatar}
          />

          <figcaption className="text-center">
            <p className="text-gray-700 font-semibold text-xl mb-2">
              {first_name} {last_name}
            </p>
            <p className="text-gray-500 font-medium">
              <span>Company:</span> {company}
            </p>
            <p className="text-gray-500 font-medium">
              <span>Phone:</span> {phone}
            </p>
          </figcaption>
        </figure>
      </Link>
    </div>
  );
};

export default ContactItem;
