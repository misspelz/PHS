"use client";

import React, { createContext, useState, useContext, ReactNode } from "react";

interface AuthContextType {
  profile: boolean;
  userId: string;
  setUserId: React.Dispatch<React.SetStateAction<string>>;
  keepLoggedIn: boolean;
  setProfile: React.Dispatch<React.SetStateAction<boolean>>;
  setKeepLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [profile, setProfile] = useState<boolean>(false);
  const [keepLoggedIn, setKeepLoggedIn] = useState<boolean>(false);
  const [userId, setUserId] = useState("");
  console.log("userId", userId);

  return (
    <AuthContext.Provider
      value={{
        profile,
        setProfile,
        keepLoggedIn,
        setKeepLoggedIn,
        userId,
        setUserId,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
