import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

//   const handleLogin = async () => {
//     try {
//     const response = await fetch("http://localhost:4500/user/login", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ email, password }),
//       credentials: "include", // Important: This sends the cookie with the request
//     });

//     alert('Login SUcess')

//     const data = await response.json();
//     const { token } = data;

//     // Store the token in localStorage
//     localStorage.setItem('token', token);


//   } catch (error) {
//     console.error(error.message);
//     alert('Login failed');
//   } 


// };

const handleLogin = async () => {
    try {
      const response = await axios.post(
        'http://localhost:4500/user/login',
        { email, password },
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true // Important: This sends the cookie with the request
        }
      );
     
      
    } catch (error) {
      console.error(error.message);
      alert('Login failed');
    }
  };

  const fetchUserData = async () => {
    const token = localStorage.getItem('token');
  
    if (!token) {
      console.error('No token found');
      return;
    }
  
    try {
      const response = await fetch('http://localhost:4500/user/me', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
  
      if (!response.ok) {
        throw new Error('Failed to fetch user data');
      }
  
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center gap-5 ">
      <input
        className="mt-24 px-10 py-2"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="px-10 py-2"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="bg-sky-300 px-8 py-2 rounded-md" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
}

export default Login;
