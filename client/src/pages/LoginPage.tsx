import React, { useState, FormEvent, ChangeEvent } from 'react';
import Auth from '../utils/auth';  // Import the Auth utility for managing authentication state
import { login } from "../api/authAPI";  // Import the login function from the API
import { UserLogin } from "../interfaces/UserLogin";  // Import the interface for UserLogin
import Header from './components/Header';
import Footer from './components/Footer';



// majority code from activity 25
const Login = () => {
    // State to manage the login form data
    const [loginData, setLoginData] = useState<UserLogin>({
      username: '',
      password: ''
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setLoginData({
          ...loginData,
          [name]: value
        });
      };
      const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        try {
          // Call the login API endpoint with loginData
          const data = await login(loginData);
          // If login is successful, call Auth.login to store the token in localStorage
          Auth.login(data.token);
        } catch (err) {
          console.error('Failed to login', err);  // Log any errors that occur during login
        }
      };
    
      return (
        <div className='form-container'>
          <Header></Header>
          <form className='form login-form' onSubmit={handleSubmit}>
            <h1>Login</h1>
            {/* Username input field */}
            <div className="form-group">
              <label>Username</label>
              <input 
                className="form-input"
                type='text'
                name='username'
                value={loginData.username || ''}
                onChange={handleChange}
              />
            </div>
            {/* Password input field */}
            <div className="form-group">
              <label>Password</label>
              <input 
                className="form-input"
                type='password'
                name='password'
                value={loginData.password || ''}
                onChange={handleChange}
              />
            </div>
            {/* Submit button for the login form */}
            <div className="form-group">
              <button className="btn btn-primary" type='submit'>Login</button>
            </div>
          </form>
          {/* <Footer></Footer> */}
        </div>
      )
    };
    
    export default Login;