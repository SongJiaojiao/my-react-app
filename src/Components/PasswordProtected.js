import React, { useState, useEffect } from 'react';
import { useAuth } from '../Contexts/authContext';
import Button from './Button';

const PasswordProtected = (password) => {
  const { authenticate } = useAuth();
  const [passcode, setPasscode] = useState(() => sessionStorage.getItem('passcode') || false);
  const inputStyle = {
    backgroundColor: 'white',
    padding: '8px',
    border: '1px solid #EFEAE3',
    borderRadius: '8px',
    maxWidth: '400px',
    marginBottom:'8px'
  }
  const passwordProtect = {

    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    maxWidth: '740px',
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: '24px',
    borderRadius: '16px',
    backgroundColor: 'var(--base01)',

  }
  const handlePasscodeChange = (e) => {

    sessionStorage.setItem('passcode', e.target.value)
  };
  const handleSubmit = () => {
    authenticate(passcode);
  };




  return (
    <div style={passwordProtect}>
      <h3>Enter Password</h3>
      <input
        style={inputStyle}
        onChange={handlePasscodeChange}
      />
      <Button text={'Submit'} onClick={handleSubmit}></Button>
    </div>
  );



};

export default PasswordProtected;
