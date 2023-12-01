'use client'
import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';

interface GlobalStateContextProps {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}

const defaultValue: GlobalStateContextProps = {
  count: 0,
  setCount: () => {},
};

const GlobalStateContext = createContext(defaultValue);

export default function useGlobalCartState() {
  const context = useContext(GlobalStateContext);
  if (!context) {
    throw new Error('useGlobalCartState must be used within a GlobalCartStateProvider');
  }
  return context;
}

interface GlobalStateProviderProps {
  children: ReactNode;
}

export const GlobalCartStateProvider: React.FC<GlobalStateProviderProps> = ({ children }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []); // Run this effect only once when the component mounts

  const [count, setCount] = useState<number>(() => {
    const storedCount = isClient ? window.localStorage.getItem('cartCount') : null;
    return storedCount ? parseInt(storedCount, 10) : 0;
  });

  useEffect(() => {
    if (isClient) {
      const expirationDate = new Date();
      expirationDate.setDate(expirationDate.getDate() + 7); // Set expiration date to 7 days from now
      localStorage.setItem('cartCount', count.toString());
    }
  }, [count, isClient]);

  return (
    <GlobalStateContext.Provider value={{ count, setCount }}>
      {children}
    </GlobalStateContext.Provider>
  );
};
