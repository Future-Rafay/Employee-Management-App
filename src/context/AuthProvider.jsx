import React from "react";
import { getLocalStorage, setLocalStorage } from "../utils/LocalStorage";
import { useState, createContext, useEffect } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    localStorage.clear()
    setLocalStorage()
    const { employees, admin } = getLocalStorage();
    setUserData({ employees, admin });
    
  }, []);

  return (
    <>
      <AuthContext.Provider value={userData}>{children}</AuthContext.Provider>
    </>
  );
};

export default AuthProvider;
