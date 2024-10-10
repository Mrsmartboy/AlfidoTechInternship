import React, { useState } from 'react';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage('');
    setSuccessMessage('');

    try {
      // Make POST request using Axios
      const response = await axios.post('http://localhost:5000/api/contact', formData);

      // Handle success
      if (response.status === 200) {
        setSuccessMessage('Your message has been sent successfully!');
        setFormData({ name: '', email: '', subject: '', message: '' }); // Reset form
      }
    } catch (error) {
      // Handle error
      setErrorMessage('There was an error sending your message. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-container-1">
      <h3 className="contact-header">Contact Us</h3>
      <div className="contact-container">
        <div className="contact-left">
          <h2>Get in touch</h2>
          <p>
            I'm Joseph. We provide reliable services. You already know we are the best service company,
            offering faithful workers and on-time delivery. Our team members are knowledgeable and dedicated to providing the best service.
            We ensure the security of your service.
          </p>
          <p>
            In the section below, you will find our contact details. Thank you for visiting us.
          </p>

          <ul className="contact-info">
            <li>
              <FontAwesomeIcon icon={faUser} className="contact-icon" />
              <span>Name:</span>
              <span>Peddanna Ganjayela</span>
            </li>
            <li>
              <FontAwesomeIcon icon={faMapMarkerAlt} className="contact-icon" />
              <span>Address:</span>
              <span>Vijayawada, Andhra Pradesh, India</span>
            </li>
            <li>
              <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
              <span>Email:</span>
              <span>Josephganjela@gmail.com</span>
            </li>
          </ul>
        </div>

        <div className="contact-right">
          <h2>Message me</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              value={formData.name}
              onChange={handleChange}
              className="contact-input"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              value={formData.email}
              onChange={handleChange}
              className="contact-input"
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              value={formData.subject}
              onChange={handleChange}
              className="contact-input"
            />
            <textarea
              name="message"
              placeholder="Describe project..."
              required
              value={formData.message}
              onChange={handleChange}
              className="contact-input"
            ></textarea>

            {loading && <p>Sending message...</p>}
            {successMessage && <p className="success-message">{successMessage}</p>}
            {errorMessage && <p className="error-message">{errorMessage}</p>}

            <button type="submit" className="contact-submit" disabled={loading}>
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
