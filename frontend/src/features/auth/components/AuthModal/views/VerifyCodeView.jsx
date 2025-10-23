import React, { useState, useEffect, useRef } from 'react';
import { IoWarningOutline } from "react-icons/io5"; 

const VerifyCodeView = ({ styles, onNavigate, onCodeVerified, userEmail }) => {
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [countdown, setCountdown] = useState(60);
  const [isTimerActive, setIsTimerActive] = useState(true);
  const [error, setError] = useState('');
  const inputRefs = useRef([]);

  useEffect(() => {
    let timer;
    if (isTimerActive && countdown > 0) {
      timer = setInterval(() => setCountdown(prev => prev - 1), 1000);
    } else if (countdown === 0) {
      setIsTimerActive(false);
    }
    return () => clearInterval(timer);
  }, [isTimerActive, countdown]);

  const handleResendCode = () => { console.log("Gửi lại mã..."); setCountdown(60); setIsTimerActive(true); };
  const handleOtpChange = (element, index) => {
    if (isNaN(element.value)) return;
    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);
    setError(''); 
    if (element.nextSibling && element.value) {
      element.nextSibling.focus();
    }
  };
  const handleKeyDown = (e, index) => { if (e.key === "Backspace" && !otp[index] && index > 0) inputRefs.current[index - 1].focus(); };
  const handleSubmit = (e) => {
    e.preventDefault();
    const code = otp.join("");
    if (code.length === 6) {
      setError(''); 
      onCodeVerified(code);
    } else {
      setError("Vui lòng nhập đủ 6 chữ số."); 
    }
  };

  return (
    <>
      <h1 className={styles.title}>Nhập mã xác minh</h1>
      <p className={styles.subtitle}>Một mã đã được gửi đến <strong>{userEmail}</strong>.</p>
      
      <form onSubmit={handleSubmit} noValidate>
        <div className={`${styles.otpContainer} ${error ? styles.otpErrorContainer : ''}`}>
          {otp.map((data, index) => (
            <input key={index} type="text" maxLength="1" className={styles.otpInput} value={data} onChange={e => handleOtpChange(e.target, index)} onKeyDown={e => handleKeyDown(e, index)} onFocus={e => e.target.select()} ref={el => (inputRefs.current[index] = el)} />
          ))}
        </div>
        {error && <div className={styles.errorMessage} style={{ justifyContent: 'center', marginTop: '10px' }}><IoWarningOutline className={styles.errorIcon} />{error}</div>}

        <div className={styles.resendCode}>
          Không nhận được mã?{' '}
          {isTimerActive ? (<span className={styles.countdown}>Gửi lại mã sau ({countdown}s)</span>) : (<span className={styles.backLink} onClick={handleResendCode}>Gửi lại mã</span>)}
        </div>
        <button type="submit" className={otp.join("").length < 6 ? styles.disabledButton : styles.submitButton}>Xác nhận</button>
      </form>
      <span className={styles.backLink} onClick={() => onNavigate('login')}>Quay lại đăng nhập</span>
    </>
  );
};
export default VerifyCodeView;