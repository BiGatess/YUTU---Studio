import React, { useState } from 'react';
import styles from './AuthModal.module.css';
import { IoClose } from "react-icons/io5";

import LoginView from './views/LoginView';
import RegisterView from './views/RegisterView';
import ForgotPasswordView from './views/ForgotPasswordView';
import VerifyCodeView from './views/VerifyCodeView';
import ResetPasswordView from './views/ResetPasswordView';

const AuthModal = ({ onClose }) => {
    const [view, setView] = useState('login');
    const [userEmail, setUserEmail] = useState('');
    
    const handleNavigate = (targetView) => setView(targetView);
    const handleEmailSubmit = (email) => { setUserEmail(email); setView('verifyCode'); };
    const handleCodeVerified = (code) => { console.log("Mã đã xác thực:", code); setView('resetPassword'); };
    const handlePasswordReset = (newPassword) => { console.log("MK mới:", newPassword); alert("Mật khẩu đã được đặt lại!"); setView('login'); };

    const renderContent = () => {
        switch (view) {
            case 'register': 
                return <RegisterView styles={styles} onNavigate={handleNavigate} />;
            case 'forgotPassword': 
                return <ForgotPasswordView styles={styles} onNavigate={handleNavigate} onEmailSubmit={handleEmailSubmit} />;
            case 'verifyCode': 
                return <VerifyCodeView styles={styles} onNavigate={handleNavigate} onCodeVerified={handleCodeVerified} userEmail={userEmail} />;
            case 'resetPassword': 
                return <ResetPasswordView styles={styles} onNavigate={handleNavigate} onPasswordReset={handlePasswordReset} />;
            default:
                return <LoginView styles={styles} onNavigate={handleNavigate} />;
        }
    };
    
    return (
        <div className={styles.wrapper} onClick={onClose}>
            <div className={styles.formBox} onClick={(e) => e.stopPropagation()}>
                <button className={styles.closeButton} onClick={onClose}><IoClose size={24} /></button>
                {renderContent()}
            </div>
        </div>
    );
};
export default AuthModal;