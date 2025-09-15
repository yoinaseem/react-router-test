import { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import axios from '../lib/axios';
import { useNavigate } from 'react-router';

// Define the shape of your user and context
interface User {
  id: number;
  name: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  // This effect runs when the component mounts to check for an authenticated user
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data } = await axios.get('/api/user');
        setUser(data);
      } catch (error) {
        // No user is logged in
        setUser(null);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUser();
  }, []);

  const logout = async () => {
    try {
      await axios.post('/api/logout');
      setUser(null);
      navigate('/login');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to easily use the auth context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};