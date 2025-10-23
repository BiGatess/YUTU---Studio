import React, { useState } from 'react';
import { IoWarningOutline, IoEyeOutline, IoEyeOffOutline } from "react-icons/io5"; 

const ResetPasswordView = ({ styles, onPasswordReset }) => { 
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!newPassword) {
      newErrors.newPassword = "Vui lòng nhập mật khẩu mới";
    } else if (newPassword.length < 6) {
      newErrors.newPassword = "Mật khẩu phải có ít nhất 6 ký tự";
    }
    if (!confirmPassword) {
      newErrors.confirmPassword = "Vui lòng xác nhận mật khẩu mới";
    } else if (newPassword && newPassword !== confirmPassword) {
      newErrors.confirmPassword = "Mật khẩu xác nhận không khớp";
    }
    return newErrors;
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      setErrors({});
      onPasswordReset(newPassword);
    }
  };

  return (
    <>
      <h1 className={styles.title}>Đặt lại mật khẩu</h1>
      <p className={styles.subtitle}>Vui lòng tạo một mật khẩu mới.</p>
      
      <form onSubmit={handleSubmit} noValidate>
        <div className={styles.inputGroup}>
          <input id="new-password" type={showPassword ? 'text' : 'password'} className={`${styles.input} ${errors.newPassword ? styles.inputError : ''}`} placeholder=" " value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
          <label htmlFor="new-password" className={styles.label}>Mật khẩu mới</label>
          <div className={styles.passwordToggleIcon} onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <IoEyeOffOutline /> : <IoEyeOutline />}
          </div>
        </div>
        {errors.newPassword && <div className={styles.errorMessage}><IoWarningOutline className={styles.errorIcon} />{errors.newPassword}</div>}
        
        <div className={styles.inputGroup}>
          <input id="confirm-new-password" type={showConfirmPassword ? 'text' : 'password'} className={`${styles.input} ${errors.confirmPassword ? styles.inputError : ''}`} placeholder=" " value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
          <label htmlFor="confirm-new-password" className={styles.label}>Xác nhận mật khẩu mới</label>
          <div className={styles.passwordToggleIcon} onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
            {showConfirmPassword ? <IoEyeOffOutline /> : <IoEyeOutline />}
          </div>
        </div>
        {errors.confirmPassword && <div className={styles.errorMessage}><IoWarningOutline className={styles.errorIcon} />{errors.confirmPassword}</div>}
        
        <button type="submit" className={styles.submitButton}>Đặt lại mật khẩu</button>
      </form>
    </>
  );
};
export default ResetPasswordView;