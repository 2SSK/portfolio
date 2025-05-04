"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface UserContextType {
  loggedIn: boolean;
  userEmail: string;
  setLoggedIn: (value: boolean) => void;
  setUserEmail: (value: string) => void;
}

const initialState: UserContextType = {
  loggedIn: false,
  userEmail: "",
  setLoggedIn: () => {},
  setUserEmail: () => {},
};

const UserContext = createContext<UserContextType >(initialState);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState("");

  return (
    <UserContext.Provider
      value={{ loggedIn, userEmail, setLoggedIn, setUserEmail }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) throw new Error("useUser must be used within UserProvider");
  return context;
};
