import React, { createContext, useState, useEffect, useContext } from 'react';

export const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(() => sessionStorage.getItem('isAuthenticated') || false);

  useEffect(() => {
    const storedAuth = sessionStorage.getItem('isAuthenticated');
    if (storedAuth === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const authenticate = async (passcode) => {
    try {
      const response = await fetch('/api/validate-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ password: passcode }),
      });
      
      const data = await response.json();
      
      if (data.success) {
        sessionStorage.setItem('isAuthenticated', 'true');
        setIsAuthenticated(true);
      } else {
        alert('Incorrect passcode');
      }
    } catch (error) {
      console.error('Authentication error:', error);
      alert('Authentication failed. Please try again.');
    }
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, authenticate }}>
      {children}
    </AuthContext.Provider>
  );
};
