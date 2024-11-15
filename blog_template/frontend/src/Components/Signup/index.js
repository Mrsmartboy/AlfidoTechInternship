import Base from "../Base";
import { useState } from "react";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './index.css';

const Signup = () => {
  const [data, setData] = useState({
    username: '',
    email: '',
    password: '',
    confirmpassword: '',
  });
  const [loading, setLoading] = useState(false);

  const onSubmitSignupForm = async (event) => {
    event.preventDefault();

    // Check if passwords match
    if (data.password !== data.confirmpassword) {
      toast.error('*Passwords do not match!*');
      return;
    }

    setLoading(true);

    try {
      const response=await axios.post('http://localhost:5000/api/signup', {
        username: data.username,
        email: data.email,
        password: data.password
      });
      console.log(response)
      if (response.data.success) {
        toast.success('Signup successful!');
        setData({ username: '', email: '', password: '', confirmpassword: '' });

      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error('Error signing up. Please try again later.');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  return (
    <Base>
      <div className="signup-container">
        <h1>Sign Up</h1>
        <form className="signup-form-container" onSubmit={onSubmitSignupForm}>
          <label htmlFor="username" className="signup-label">Username</label>
          <input
            type="text"
            placeholder="Username"
            id="username"
            name="username"
            required
            onChange={handleInputChange}
            value={data.username}
            className="signup-input"
          />

          <label htmlFor="email" className="signup-label">Email</label>
          <input
            type="email"
            placeholder="Email"
            id="email"
            name="email"
            required
            onChange={handleInputChange}
            value={data.email}
            className="signup-input"
          />

          <label htmlFor="password" className="signup-label">Password</label>
          <input
            type="password"
            placeholder="Password"
            id="password"
            name="password"
            required
            onChange={handleInputChange}
            value={data.password}
            className="signup-input"
          />

          <label htmlFor="confirmpassword" className="signup-label">Confirm Password</label>
          <input
            type="password"
            placeholder="Confirm Password"
            id="confirmpassword"
            name="confirmpassword"
            required
            onChange={handleInputChange}
            value={data.confirmpassword}
            className="signup-input"
          />

          {loading ? <p>Signing up...</p> : null}
          <button type="submit" className="signup-submit" disabled={loading}>
            {loading ? "Signing up..." : "Sign Up"}
          </button>
        </form>
      </div>
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} closeOnClick pauseOnHover draggable />
    </Base>
  );
};

export default Signup;
