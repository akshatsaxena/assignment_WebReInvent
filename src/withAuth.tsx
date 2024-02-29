// withAuth.tsx
import React from 'react';
import { useAuth } from './authContext';

const withAuth = (WrappedComponent: React.ComponentType) => {
  const WrapperComponent: React.FC = () => {
    const { isLoggedIn } = useAuth();

    if (!isLoggedIn) {
        window.location.pathname='/login';
    }

    return <WrappedComponent />;
  };

  return WrapperComponent;
};

export default withAuth;

