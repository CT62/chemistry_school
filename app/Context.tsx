import React, { createContext, useContext, useState, ReactNode } from 'react';

interface MyContextProps {
  showReviews: boolean;
  setReviews: React.Dispatch<React.SetStateAction<boolean>>;
}

const MyContext = createContext<MyContextProps | undefined>(undefined);

export const MyContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [showReviews, setReviews] = useState<boolean>(false);

  return (
    <MyContext.Provider value={{ showReviews, setReviews }}>
      {children}
    </MyContext.Provider>
  );
};

export const useMyContext = () => {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error('useMyContext must be used within a MyContextProvider');
  }
  return context;
};
