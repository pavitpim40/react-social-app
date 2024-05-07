/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from 'react';
import * as userAPI from '../apis/userApi';

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);
  // Login => user = {}
  // Logout => user = null
  useEffect(() => {
    login();
  }, []);

  const login = async () => {
    try {
      const response = await userAPI.getUserById('1');
      setUser(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const logout = () => {
    setUser(null);
  };

  return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>;
}
