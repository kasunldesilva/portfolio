import React, { useState } from 'react';
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send the form data to the backend server
    const response = await fetch('http://localhost:3001/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    if (response.ok) {
      alert('Message sent successfully!');
      // Reset the form after sending
      setFormData({
        firstname: '',
        lastname: '',
        email: '',
        message: ''
      });
    } else {
      alert('Failed to send message.');
    }
  };

  return (
    <div className='contact-form-content'>
      <form onSubmit={handleSubmit}>
        <div className="name-container">
          <input 
            type="text" 
            name="firstname" 
            placeholder="First Name" 
            value={formData.firstname} 
            onChange={handleInputChange} 
          />
          <input 
            type="text" 
            name="lastname" 
            placeholder="Last Name" 
            value={formData.lastname} 
            onChange={handleInputChange} 
          />
        </div>

        <input 
          type="email" 
          name="email" 
          placeholder="Your Email" 
          value={formData.email} 
          onChange={handleInputChange} 
        />
        <textarea 
          name="message" 
          placeholder="Your Message" 
          rows={3} 
          value={formData.message} 
          onChange={handleInputChange} 
        ></textarea>

        <button type="submit">SEND</button>
      </form>
    </div>
  );
}

export default ContactForm;
