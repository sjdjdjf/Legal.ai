import React, { createContext, useContext, useState, ReactNode } from 'react';
import { User } from '../types';

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  register: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(() => {
    const savedUser = localStorage.getItem('legal-ai-user');
    return savedUser ? JSON.parse(savedUser) : null;
  });
  const [isLoading, setIsLoading] = useState(false);

  const login = async (email: string, password: string): Promise<boolean> => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // CEO Access - Full Premium Access
      const isCEO = email === 'admin@legal.ai' && password === 'SuperSecretPassword123';
      
      const mockUser: User = {
        id: isCEO ? 'ceo-admin' : '1',
        email,
        isPremium: isCEO ? true : false,
        premiumExpiryDate: isCEO ? new Date(2099, 11, 31).toISOString() : undefined
      };
      
      setUser(mockUser);
      localStorage.setItem('legal-ai-user', JSON.stringify(mockUser));
      return true;
    } catch (error) {
      console.error('Login error:', error);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (email: string, password: string): Promise<boolean> => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // CEO Access - Full Premium Access
      const isCEO = email === 'admin@legal.ai' && password === 'SuperSecretPassword123';
      
      const mockUser: User = {
        id: isCEO ? 'ceo-admin' : '1',
        email,
        isPremium: isCEO ? true : false,
        premiumExpiryDate: isCEO ? new Date(2099, 11, 31).toISOString() : undefined
      };
      
      setUser(mockUser);
      localStorage.setItem('legal-ai-user', JSON.stringify(mockUser));
      return true;
    } catch (error) {
      console.error('Register error:', error);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('legal-ai-user');
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}