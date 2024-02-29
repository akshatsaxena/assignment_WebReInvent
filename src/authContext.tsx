
  import React, { createContext, useState, useContext } from 'react';

  interface AuthContextType {
    isLoggedIn: boolean;
    login: () => void;
    logout: () => void;
  }


interface AuthContextProps {
  children: React.ReactNode;
}

  export const AuthContext = createContext<AuthContextType | undefined>(undefined);

  export const AuthProvider: React.FC<AuthContextProps> = ({children}) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
 
    const login = () => {
      setIsLoggedIn(true);
    };

    const logout = () => {
      setIsLoggedIn(false);
    };

    return (
      <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
        {children}
      </AuthContext.Provider>
    );
  };

  export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
      throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
  };
