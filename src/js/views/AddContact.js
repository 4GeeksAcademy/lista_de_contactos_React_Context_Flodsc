import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

const AddContact = () => {
  const [contact, setContact] = useState({
    full_name: "",
    email: "",
    phone: "",
    address: "",
  });
  const navigate = useNavigate();
  const { actions } = React.useContext(Context);

  const handleChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    actions.createContact(contact.full_name, contact.email, contact.phone, contact.address);
    actions.getContacts();  // Recarga los contactos después de guardar
    navigate("/");  // Redirige a la página de inicio
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Add New Contact</h1>
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
            placeholder="Enter full name"
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
            placeholder="Enter email address"
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
            placeholder="Enter phone number"
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
            placeholder="Enter address"
            value={contact.address}
            onChange={handleChange}
          />
        </div>
        <button
          type="button"
          className="btn btn-primary w-100"
          onClick={handleSubmit}
        >
          Save Contact
        </button>
      </form>
    </div>
  );
};

export default AddContact;