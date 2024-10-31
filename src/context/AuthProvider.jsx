import React from "react";
import { getLocalStorage, setLocalStorage } from "../utils/LocalStorage";
import { useState, createContext, useEffect } from "react";

export const AuthContext = createContext();
localStorage.clear()

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    setLocalStorage();
    const { employees } = getLocalStorage();
    setUserData(employees);
  }, []);

  return (
    <>
      <AuthContext.Provider value={[userData, setUserData]}>
        {children}
      </AuthContext.Provider>
    </>
  );
};

export default AuthProvider;
