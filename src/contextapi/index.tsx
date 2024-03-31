"use client";

import React, { createContext, useState, useContext, ReactNode } from "react";

interface UserProfile {
  name: string;
  id: string;
}

interface AuthContextType {
  profile: boolean;
  userId: string;
  userProfile: UserProfile[] | null;
  setUserId: React.Dispatch<React.SetStateAction<string>>;
  keepLoggedIn: boolean;
  setProfile: React.Dispatch<React.SetStateAction<boolean>>;
  setKeepLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  setUserProfile: React.Dispatch<React.SetStateAction<UserProfile[] | null>>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [profile, setProfile] = useState<boolean>(false);
  const [keepLoggedIn, setKeepLoggedIn] = useState<boolean>(false);
  const [userId, setUserId] = useState("");
  const [userProfile, setUserProfile] = useState<UserProfile[] | null>(null);

  return (
    <AuthContext.Provider
      value={{
        profile,
        setProfile,
        keepLoggedIn,
        setKeepLoggedIn,
        userId,
        setUserId,
        userProfile,
        setUserProfile,
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
