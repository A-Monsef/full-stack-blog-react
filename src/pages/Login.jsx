import axios from 'axios';
import React, { useContext, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { AuthContext } from '../App';
import { API_URL } from '../config/apiConstants';


const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { setUser } = useContext(AuthContext);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username !== "" && password !== "") {
      axios.post(`${API_URL}/login`, { username, password })
        .then(response => {
          setUser(response.data.user);
          console.log(response.data);
          localStorage.setItem("user", JSON.stringify(response.data.user));
          navigate("/")
        }).catch(error => {
          setMessage(error.message);
          console.log(error)
        })
    } else {
      setMessage("Please fill out all required fields before submitting.")
    }
  };
  return (
    <div className='auth'>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='username' value={username} onChange={e => setUsername(e.target.value)} />
        <input type="password" placeholder='password' value={password} onChange={e => setPassword(e.target.value)} />
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default Login