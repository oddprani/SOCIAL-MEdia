
import React from 'react';
import { Calendar, Camera, Check } from 'lucide-react';
import { motion } from 'framer-motion';

interface RegisterFormProps {
  formData: {
    username: string;
    password: string;
    email: string;
    firstName: string;
    lastName: string;
    birthDate: string;
    phone: string;
    gender: string;
    bio: string;
    confirmPassword: string;
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  handleSubmit: (e: React.FormEvent) => void;
  switchToLogin: () => void;
}

const RegisterForm: React.FC<RegisterFormProps> = ({ 
  formData, 
  handleChange, 
  handleSubmit,
  switchToLogin
}) => {
  return (
    <motion.form 
      onSubmit={handleSubmit}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="space-y-4"
    >
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
      
      <div>
        <input
          type="text"
          name="email"
          placeholder="email-id"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-3 rounded bg-white text-black"
          required
        />
      </div>
      
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
      
      <div>
        <input
          type="password"
          name="password"
          placeholder="set password"
          value={formData.password}
          onChange={handleChange}
          className="w-full p-3 rounded bg-white text-black"
          required
        />
      </div>
      
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
      
      <div className="pt-4">
        <button
          type="submit"
          className="w-full p-3 bg-white text-black rounded-full font-medium"
        >
          submit
        </button>
      </div>
      
      <div className="text-center pt-2">
        <button
          type="button"
          onClick={switchToLogin}
          className="text-blue-400 hover:underline"
        >
          Already have an account? Login
        </button>
      </div>
    </motion.form>
  );
};

export default RegisterForm;
