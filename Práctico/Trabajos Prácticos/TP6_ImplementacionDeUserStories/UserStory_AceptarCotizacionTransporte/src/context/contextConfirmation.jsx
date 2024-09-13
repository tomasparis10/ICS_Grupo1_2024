import React, { createContext, useContext, useState } from 'react';

const ConfirmationContext = createContext();

export const useConfirmation = () => useContext(ConfirmationContext);

export const ConfirmationProvider = ({ children }) => {
  const [confirmation, setConfirmation] = useState(JSON.parse(localStorage.getItem('confirmacion')) || false);

  return (
    <ConfirmationContext.Provider value={{ confirmation, setConfirmation }}>
      {children}
    </ConfirmationContext.Provider>
  );
};