import React from 'react';
import { useLocation } from 'react-router-dom';

export const Confirmation = () => {
  const location = useLocation();
  const email = location.state && location.state.email;

  return (
    <div className='confirmation'>
      <h1>Thank you!</h1>
      <p>you are now registered for Wizar Tech</p>
      <div className='confirm'>
        <p>We've sent a confirmation message to:</p>
        <p className='email'>{email || 'No valid email provided'}</p>
      </div>
    </div>
  );
};
