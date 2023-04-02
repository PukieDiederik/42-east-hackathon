import { createContext, useState } from "react";

const ContextUser = createContext();

export const ContextUserProvider = ({ children }) => {
  const [user, setUser] = useState({});

  return (
    <ContextUser.Provider value={{ userToDisplay: { user }, setUser }}>
      {children}
    </ContextUser.Provider>
  );
};

export default ContextUser;
