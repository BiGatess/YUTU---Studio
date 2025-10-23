import React, { useState } from 'react';
import { IoWarningOutline } from "react-icons/io5"; 

const ForgotPasswordView = ({ styles, onNavigate, onEmailSubmit }) => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(''); 

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!email) {
      setError("Vui lòng nhập địa chỉ email của bạn.");
    } else {
      setError('');
      onEmailSubmit(email);
    }
  };

  return (
    <>
      <h1 className={styles.title}>Quên mật khẩu?</h1>
      <p className={styles.subtitle}>Nhập email của bạn để nhận mã xác minh.</p>
      
      <form onSubmit={handleSubmit} noValidate>
        <div className={styles.inputGroup}>
          <input 
            id="email-forgot" 
            type="email" 
            className={`${styles.input} ${error ? styles.inputError : ''}`}
            placeholder=" " 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="email-forgot" className={styles.label}>Địa chỉ email</label>
        </div>
        {error && <div className={styles.errorMessage}><IoWarningOutline className={styles.errorIcon} />{error}</div>}
        
        <button type="submit" className={styles.submitButton}>Gửi mã xác minh</button>
      </form>
      <span className={styles.backLink} onClick={() => onNavigate('login')}>Quay lại đăng nhập</span>
    </>
  );
};

export default ForgotPasswordView;  