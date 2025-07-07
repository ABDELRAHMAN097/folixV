import { createContext, useContext, useState } from 'react';

const ActivPageContext = createContext();

export const ActivPageProvider = ({ children }) => {
  const [activePage, setActivePage] = useState('Dashboard'); 

  return (
    <ActivPageContext.Provider value={{ activePage, setActivePage }}>
      {children}
    </ActivPageContext.Provider>
  );
};

export const useActivPage = () => useContext(ActivPageContext);
