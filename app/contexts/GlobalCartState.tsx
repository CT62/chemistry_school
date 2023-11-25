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

export default function useGlobalCartState(){
  const context = useContext(GlobalStateContext);
  if (!context) {
    throw new Error('useGlobalCartState must be used within a GlobalCartStateProvider');
  }
  return context;
};

interface GlobalStateProviderProps {
  children: ReactNode;
}

export const GlobalCartStateProvider: React.FC<GlobalStateProviderProps> = ({ children }) => {
  const [count, setCount] = useState<number>(() => {
    const storedCount = localStorage.getItem('cartCount');
    return storedCount ? parseInt(storedCount, 10) : 0;
  });

  useEffect(() => {
    localStorage.setItem('cartCount', count.toString());
  }, [count]);

  return (
    <GlobalStateContext.Provider value={{ count, setCount }}>
      {children}
    </GlobalStateContext.Provider>
  );
};