import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/layout/Header/Header';
import AuthModal from '../features/auth/components/AuthModal/AuthModal';

const MainLayout = ({ children }) => {
  const [isLoginVisible, setLoginVisible] = useState(false);

  const showLoginHandler = () => {
    setLoginVisible(true);
  };

  const hideLoginHandler = () => {
    setLoginVisible(false);
  };

  return (
    <div>
      <Header onLoginClick={showLoginHandler} />
      <main>
        <Outlet />
      </main>
      {isLoginVisible && <AuthModal onClose={hideLoginHandler} />}
    </div>
  );
};

export default MainLayout;