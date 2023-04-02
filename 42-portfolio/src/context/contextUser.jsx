import { createContext, useState } from "react";

const ContextUser = createContext();

export const ContextUserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  console.log(user);
  return (
    <ContextUser.Provider value={{ user, setUser }}>
      {children}
    </ContextUser.Provider>
  );
};

export default ContextUser;
