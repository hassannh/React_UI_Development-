import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Register = () => {
  const [ email, setEmail ] = useState('');
  const inputTxt = useRef(null)
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const isEmailValid = (email) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  };

  const handleRegisterClick = () => {
    if (isEmailValid(email)) {
      navigate('/confirmation', { state: { email } });
    } 
  };

    useEffect(() => {
      inputTxt.current.focus()
    }, [])
  return (
    <div className='register'>
      <h1>Technology and Business Solution</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisci tempor incidunt ut labore et dolore magna aliqua veniam,
        quis nostrund exercitation ullamcorpor s commodo consequat. Duis autem vel eum irrure esse molestiae consequat,
      </p>

      <form className='container-form'>
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="Enter your Email"
          ref={inputTxt}
        />
        <button onClick={handleRegisterClick}>Register</button>
      </form>
    </div>
  );
};
