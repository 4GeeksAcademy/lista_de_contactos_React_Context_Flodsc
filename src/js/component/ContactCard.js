import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

const EditContact = () => {
  const { id } = useParams();
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  const [contact, setContact] = useState({
    full_name: "",
    email: "",
    phone: "",
    address: "",
  });

  useEffect(() => {
    actions.getContact(id);
  }, [id]);

  useEffect(() => {
    if (store.contact) {
      setContact(store.contact);
    }
  }, [store.contact]);

  const handleChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    actions.updateContact(id, contact);
    navigate("/");
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center">Edit Contact</h1>
      {store.contact ? (
        <form>
          <div className="mb-3">
            <label htmlFor="full_name" className="form-label">
              Full Name
            </label>
            <input
              type="text"
              className="form-control"
              id="full_name"
              name="full_name"
              value={contact.full_name}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={contact.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="phone" className="form-label">
              Phone Number
            </label>
            <input
              type="tel"
              className="form-control"
              id="phone"
              name="phone"
              value={contact.phone}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="address" className="form-label">
              Address
            </label>
            <input
              type="text"
              className="form-control"
              id="address"
              name="address"
              value={contact.address}
              onChange={handleChange}
            />
          </div>
          <button
            type="button"
            className="btn btn-primary w-100"
            onClick={handleSubmit}
          >
            Update Contact
          </button>
        </form>
      ) : (
        <p>Loading contact...</p>
      )}
    </div>
  );
};

export default EditContact;