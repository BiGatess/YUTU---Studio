import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/layout/Header/Header';
import Footer from '../components/layout/Footer/Footer';
import AuthModal from '../features/auth/components/AuthModal/AuthModal';

import './MainLayout.css';

const MainLayout = () => {
  const [isLoginVisible, setLoginVisible] = useState(false);

  const showLoginHandler = () => {
    setLoginVisible(true);
  };

  const hideLoginHandler = () => {
    setLoginVisible(false);
  };

  return (
    <div className="main-layout">
      <Header onLoginClick={showLoginHandler} />
      
      <main>
        <Outlet />
      </main>
      
      <Footer />
      
      {isLoginVisible && <AuthModal onClose={hideLoginHandler} />}
    </div>
  );
};

export default MainLayout;