import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';
import { IoWarningOutline, IoEyeOutline, IoEyeOffOutline } from "react-icons/io5"; 

const RegisterView = ({ styles, onNavigate }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!email) newErrors.email = "Vui lòng nhập địa chỉ email";
    if (!password) {
      newErrors.password = "Vui lòng nhập mật khẩu";
    } else if (password.length < 6) {
      newErrors.password = "Mật khẩu phải có ít nhất 6 ký tự";
    }
    if (!confirmPassword) {
      newErrors.confirmPassword = "Vui lòng xác nhận mật khẩu";
    } else if (password && password !== confirmPassword) {
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
      console.log('Đăng ký với:', { email, password });
    }
  };

  return (
    <>
      <h1 className={styles.title}>Gia Nhập Thế Giới Truyện Tranh</h1>
      <p className={styles.subtitle}>Tạo tài khoản để khám phá hàng ngàn câu chuyện kỳ thú.</p>
      
      <form onSubmit={handleSubmit} noValidate>
        <div className={styles.inputGroup}>
          <input id="reg-email" type="email" className={`${styles.input} ${errors.email ? styles.inputError : ''}`} placeholder=" " value={email} onChange={(e) => setEmail(e.target.value)} />
          <label htmlFor="reg-email" className={styles.label}>Email</label>
        </div>
        {errors.email && <div className={styles.errorMessage}><IoWarningOutline className={styles.errorIcon} />{errors.email}</div>}

        <div className={styles.inputGroup}>
          <input id="reg-password" type={showPassword ? 'text' : 'password'} className={`${styles.input} ${errors.password ? styles.inputError : ''}`} placeholder=" " value={password} onChange={(e) => setPassword(e.target.value)} />
          <label htmlFor="reg-password" className={styles.label}>Mật khẩu</label>
          <div className={styles.passwordToggleIcon} onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <IoEyeOffOutline /> : <IoEyeOutline />}
          </div>
        </div>
        {errors.password && <div className={styles.errorMessage}><IoWarningOutline className={styles.errorIcon} />{errors.password}</div>}

        <div className={styles.inputGroup}>
          <input id="confirm-password" type={showConfirmPassword ? 'text' : 'password'} className={`${styles.input} ${errors.confirmPassword ? styles.inputError : ''}`} placeholder=" " value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
          <label htmlFor="confirm-password" className={styles.label}>Xác nhận mật khẩu</label>
          <div className={styles.passwordToggleIcon} onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
            {showConfirmPassword ? <IoEyeOffOutline /> : <IoEyeOutline />}
          </div>
        </div>
        {errors.confirmPassword && <div className={styles.errorMessage}><IoWarningOutline className={styles.errorIcon} />{errors.confirmPassword}</div>}

        <button type="submit" className={styles.submitButton}>Tạo tài khoản</button>
      </form>
      
      <div className={styles.separator}>Hoặc đăng ký với</div>
      <div className={styles.socialLogin}>
        <button className={styles.socialButton}><FcGoogle size={22} /> Continue with Google</button>
        <button className={`${styles.socialButton} ${styles.facebook}`}><FaFacebook size={22} color="#FFFFFF" /> Continue with Facebook</button>
      </div>

      <div className={styles.toggleView}>
        Đã có tài khoản? <span onClick={() => onNavigate('login')} className={styles.toggleLink}>Đăng nhập</span>
      </div>
    </>
  );
};

export default RegisterView;