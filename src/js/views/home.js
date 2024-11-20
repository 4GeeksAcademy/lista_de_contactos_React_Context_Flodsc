import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Home = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getContacts();
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Contacts</h1>
      <div className="list-group">
        {store.contacts && store.contacts.length > 0 ? (
          store.contacts.map((contact, index) => (
            <div
              key={index}
              className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
            >
              <div>
                <p>Full Name: {contact.fullname}</p>
                <p>Email: {contact.email}</p>
                <p>Phone: {contact.phone}</p>
                <p>Address: {contact.address}</p>
              </div>
              <div>
                <Link to={`/edit/${contact.id}`}>
                  <button className="btn btn-primary me-2">Edit</button>
                </Link>
                <button
                  className="btn btn-danger"
                  onClick={() => actions.deleteContact(contact.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No contacts found. Add a new one!</p>
        )}
      </div>
    </div>
  );
};

export default Home;
