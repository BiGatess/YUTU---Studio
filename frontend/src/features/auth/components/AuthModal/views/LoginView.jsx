import React, { useState } from 'react'; 
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';
import { IoWarningOutline, IoEyeOutline, IoEyeOffOutline } from "react-icons/io5"; // THÊM ICON MẮT

const LoginView = ({ styles, onNavigate }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false); // THÊM STATE CHO VIỆC HIỆN/ẨN PASS

  const validateForm = () => {
    const newErrors = {};
    if (!email) {
      newErrors.email = "Nhập tài khoản Email bạn";
    }
    if (!password) {
      newErrors.password = "Nhập mật khẩu của bạn";
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
      console.log('Đăng nhập với:', { email, password });
    }
  };

  return (
    <>
      <h1 className={styles.title}>Chào mừng trở lại!</h1>
      <p className={styles.subtitle}>Cả một thế giới truyện tranh đang chờ bạn.</p>
      
      <form onSubmit={handleSubmit} noValidate>
        
        <div className={styles.inputGroup}>
          <input 
            id="email" 
            type="text" 
            className={`${styles.input} ${errors.email ? styles.inputError : ''}`} 
            placeholder=" " 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="email" className={styles.label}>Email</label>
        </div>
        {errors.email && (
          <div className={styles.errorMessage}>
            <IoWarningOutline className={styles.errorIcon} /> 
            {errors.email}
          </div>
        )}

        {/* SỬA: Thêm icon con mắt và thay đổi type input */}
        <div className={styles.inputGroup}>
          <input 
            id="password" 
            type={showPassword ? 'text' : 'password'}
            className={`${styles.input} ${errors.password ? styles.inputError : ''}`} 
            placeholder=" " 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label htmlFor="password" className={styles.label}>Mật khẩu</label>
          <div className={styles.passwordToggleIcon} onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <IoEyeOffOutline /> : <IoEyeOutline />}
          </div>
        </div>
        {errors.password && (
            <div className={styles.errorMessage}>
                <IoWarningOutline className={styles.errorIcon} />
                {errors.password}
            </div>
        )}

        <span className={styles.forgotLink} onClick={() => onNavigate('forgotPassword')}>
          Quên mật khẩu?
        </span>
        <button type="submit" className={styles.submitButton}>Đăng nhập</button>
      </form>

      <div className={styles.separator}>Hoặc tiếp tục với</div>
      <div className={styles.socialLogin}>
        <button className={styles.socialButton}><FcGoogle size={22} /> Continue with Google</button>
        <button className={`${styles.socialButton} ${styles.facebook}`}><FaFacebook size={22} color="#FFFFFF" /> Continue with Facebook</button>
      </div>
      <div className={styles.toggleView}>
        Chưa có tài khoản? <span onClick={() => onNavigate('register')} className={styles.toggleLink}>Đăng ký</span>
      </div>
    </>
  );
};

export default LoginView;