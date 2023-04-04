import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate, } from 'react-router-dom';
import { API_URL } from '../config/apiConstants';



const Register = () => {
  
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    role: 'user',
  });
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(`${API_URL}/register`, formData);
      console.log(response.data);
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className='auth'>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <input required type='text' placeholder='username' name='username' value={formData.username} onChange={handleChange} />
        <input required type='email' placeholder='email' name='email' value={formData.email} onChange={handleChange} />
        <input required type='password' placeholder='password' name='password' value={formData.password} onChange={handleChange} />
        <label htmlFor="role">Role:</label>
        <select name="role" id="role" value={formData.role} onChange={handleChange}>
          <option value="user">User</option>
          {/* <option value="admin">Admin</option> */}
        </select>
        <button type='submit'>Register</button>
        <span>Already have an account? <Link to='/login'>Login</Link></span>
      </form>
    </div>
  );
};

export default Register;
