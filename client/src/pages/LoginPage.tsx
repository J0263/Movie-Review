import React, { useState, FormEvent, ChangeEvent } from 'react';
import Auth from '../utils/auth';
import { login } from "../api/authAPI"; 
import { UserLogin } from "../interfaces/UserLogin";
import Header from '../components/Header';
import Footer from '../components/Footer';

// define login component type as React.FC
const Login: React.FC = () => {
    // state for managing login data
    const [loginData, setLoginData] = useState<UserLogin>({
        username: '',
        password: ''
    });

    // additional state to manage error messages
    const [errorMessage, setErrorMessage] = useState<string>(''); 

    // event handler for form input changes
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        // use type assertion to specify e.target as HTMLInputElement
        const target = e.target as HTMLInputElement; 
        const name = target.name; 
        const value = target.value; 

        // update loginData state with prevState for controlled state updates
        setLoginData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // handle form submission
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // clear any previous error messages
        setErrorMessage(''); 
        try {
            const data: { token: string } = await login(loginData);
            Auth.login(data.token);
        } catch (err) {
            console.error('Failed to login', err);
            //  an error message 
            setErrorMessage('Invalid username or password. Please try again.'); 
        }
    };

    return (
        <div className='form-container'>
            <Header />
            <form className='form login-form' onSubmit={handleSubmit}>
                <h1>Login</h1>
                {errorMessage && <p className="error-message">{errorMessage}</p>} 
            
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input 
                        className="form-input"
                        type='text'
                        name='username'
                        id='username' // add id to link label
                        value={loginData.username}
                        onChange={handleChange}
                    />
                </div>
                
                {/* password input field with linked label */}
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input 
                        className="form-input"
                        type='password'
                        name='password'
                        id='password' // add id to link label
                        value={loginData.password}
                        onChange={handleChange}
                    />
                </div>
                
                {/* submit button */}
                <div className="form-group">
                    <button className="btn btn-primary" type='submit'>Login</button>
                </div>
            </form>
            <Footer />
        </div>
    );
};

export default Login;