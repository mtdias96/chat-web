import { AuthContext } from '@/contexts/AuthContext';
import { useContext } from 'react';

export function useAuth() {
  const contextValue = useContext(AuthContext);

  if (!contextValue) {
    throw new Error('useAuth deve ser usado dentro de um AuthProvider');
  }

  return contextValue;
}
