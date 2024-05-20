import React, { createContext, useState, useEffect, useContext } from 'react';

export const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const correctPasscode = process.env.REACT_APP_PASSWORD; // Replace with your actual passcode
  console.log('pwd from contexts',correctPasscode)
  const [isAuthenticated, setIsAuthenticated] = useState(() => sessionStorage.getItem('isAuthenticated') || false);

  useEffect(() => {
    const storedAuth = sessionStorage.getItem('isAuthenticated');
    if (storedAuth === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const authenticate = (passcode) => {
    if (passcode === correctPasscode) {
      console.log('matched')
      sessionStorage.setItem('isAuthenticated', 'true');
      setIsAuthenticated(true);
    } else {
      console.log('userinput from contexts',passcode)
      alert('Incorrect passcode');
    }
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, authenticate }}>
      {children}
    </AuthContext.Provider>
  );
};
