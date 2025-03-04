
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import AnimatedRoute from '@/components/AnimatedRoute';
import AuthHeader from '@/components/auth/AuthHeader';
import AuthContainer from '@/components/auth/AuthContainer';
import LoginForm from '@/components/auth/LoginForm';
import RegisterForm from '@/components/auth/RegisterForm';

const Auth: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
    firstName: '',
    lastName: '',
    birthDate: '',
    phone: '',
    gender: 'other',
    bio: '',
    confirmPassword: ''
  });
  
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isLogin && formData.password !== formData.confirmPassword) {
      toast.error("Passwords don't match");
      return;
    }
    
    // Simulate authentication
    toast.success(isLogin ? "Successfully logged in!" : "Account created successfully!");
    navigate('/odie');
  };

  const switchToRegister = () => setIsLogin(false);
  const switchToLogin = () => setIsLogin(true);

  return (
    <AnimatedRoute>
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#e5e5e5]">
        <AuthHeader />
        
        <AuthContainer title={isLogin ? 'LOGIN' : 'REGISTER'}>
          {isLogin ? (
            <LoginForm 
              formData={formData}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              switchToRegister={switchToRegister}
            />
          ) : (
            <RegisterForm 
              formData={formData}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              switchToLogin={switchToLogin}
            />
          )}
        </AuthContainer>
      </div>
    </AnimatedRoute>
  );
};

export default Auth;
