
import React, { useState } from 'react';
import { Zap, Calendar, Camera, Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import AnimatedRoute from '@/components/AnimatedRoute';

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

  return (
    <AnimatedRoute>
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#e5e5e5]">
        {/* Top navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center items-center p-4 bg-white/10 backdrop-blur-md">
          <div className="flex items-center gap-8">
            <a href="/odie" className="flex items-center justify-center gap-2 px-4 py-2 bg-black text-white rounded-full">
              <Zap size={16} />
              <span className="font-medium">ODIE</span>
            </a>
            <a href="/vidora" className="flex items-center justify-center gap-2 px-4 py-2">
              <span className="font-medium">VIDORA</span>
            </a>
            <a href="/sensei" className="flex items-center justify-center gap-2 px-4 py-2">
              <span className="font-medium">SENSEI</span>
            </a>
            <a href="/carnival" className="flex items-center justify-center gap-2 px-4 py-2">
              <span className="font-medium">CARNIVAL</span>
            </a>
          </div>
        </nav>
        
        <div className="w-full max-w-md p-8 bg-[#333333] rounded-2xl shadow-lg text-white">
          <motion.h1 
            className="text-3xl font-bold text-center mb-8"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {isLogin ? 'LOGIN' : 'REGISTER'}
          </motion.h1>
          
          <motion.form 
            onSubmit={handleSubmit}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            {!isLogin && (
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="first name"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full p-3 rounded bg-white text-black"
                    required
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="last name"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full p-3 rounded bg-white text-black"
                    required
                  />
                </div>
              </div>
            )}
            
            {!isLogin && (
              <div className="grid grid-cols-1 gap-4">
                <div className="flex items-center">
                  <input
                    type="date"
                    name="birthDate"
                    placeholder="date of birth"
                    value={formData.birthDate}
                    onChange={handleChange}
                    className="w-full p-3 rounded bg-white text-black"
                    required
                  />
                  <Calendar className="absolute right-12 text-gray-400" size={18} />
                </div>
              </div>
            )}
            
            <div>
              <input
                type="text"
                name={isLogin ? "username" : "email"}
                placeholder={isLogin ? "username/ e-mail id" : "email-id"}
                value={isLogin ? formData.username : formData.email}
                onChange={handleChange}
                className="w-full p-3 rounded bg-white text-black"
                required
              />
            </div>
            
            {!isLogin && (
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="phone no"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full p-3 rounded bg-white text-black"
                    required
                  />
                </div>
                <div className="relative">
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    className="w-full p-3 rounded bg-white text-black appearance-none"
                    required
                  >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                  <Check className="absolute right-3 top-3 text-gray-400" size={18} />
                </div>
              </div>
            )}
            
            {!isLogin && (
              <div>
                <div className="relative">
                  <input
                    type="text"
                    name="username"
                    placeholder="username"
                    value={formData.username}
                    onChange={handleChange}
                    className="w-full p-3 rounded bg-white text-black"
                    required
                  />
                  <Check className="absolute right-3 top-3 text-green-500" size={18} />
                </div>
              </div>
            )}
            
            <div>
              <input
                type="password"
                name="password"
                placeholder={isLogin ? "password" : "set password"}
                value={formData.password}
                onChange={handleChange}
                className="w-full p-3 rounded bg-white text-black"
                required
              />
            </div>
            
            {!isLogin && (
              <div>
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="confirm password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full p-3 rounded bg-white text-black"
                  required
                />
              </div>
            )}
            
            {!isLogin && (
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 bg-[#e5e5e5] rounded-full flex items-center justify-center cursor-pointer">
                    <Camera size={24} className="text-gray-500" />
                    <input type="file" className="hidden" />
                  </div>
                  <p className="text-xs text-center mt-1">upload profile picture</p>
                </div>
                <div className="flex-1">
                  <textarea
                    name="bio"
                    placeholder="bio..."
                    value={formData.bio}
                    onChange={handleChange}
                    className="w-full h-full p-3 rounded bg-white text-black resize-none"
                  ></textarea>
                </div>
              </div>
            )}
            
            {isLogin && (
              <div className="text-center">
                <a href="#" className="text-blue-500 hover:underline">forgot password?</a>
              </div>
            )}
            
            <div className="pt-4">
              <button
                type="submit"
                className="w-full p-3 bg-white text-black rounded-full font-medium"
              >
                {isLogin ? 'LOGIN' : 'submit'}
              </button>
            </div>
            
            <div className="text-center pt-2">
              <button
                type="button"
                onClick={() => setIsLogin(!isLogin)}
                className="text-blue-400 hover:underline"
              >
                {isLogin ? 'Create a new account' : 'Already have an account? Login'}
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </AnimatedRoute>
  );
};

export default Auth;
