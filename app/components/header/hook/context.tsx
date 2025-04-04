'use client';
import { createContext, useState } from 'react';

interface HeaderContextProps {
  closeHandler: () => void;
  toggleHandler: () => void;
  isSidebar: boolean;
}

export const HeaderContext = createContext({} as HeaderContextProps);

const HeaderContextProvider = ({ ...props }) => {
  const [isSidebar, setIsSidebar] = useState(false);
  

  function closeHandler() {
    setIsSidebar(false);
  }

  function toggleHandler() {
    setIsSidebar((isSidebar) => !isSidebar);
  }

  return (
    <HeaderContext.Provider
      value={{
        closeHandler,
        isSidebar,
        toggleHandler,
      }}
    >
      {props.children}
    </HeaderContext.Provider>
  );
};

export default HeaderContextProvider;
