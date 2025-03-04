
import React from 'react';
import { motion } from 'framer-motion';

interface LoginFormProps {
  formData: {
    username: string;
    password: string;
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent) => void;
  switchToRegister: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ 
  formData, 
  handleChange, 
  handleSubmit,
  switchToRegister
}) => {
  return (
    <motion.form 
      onSubmit={handleSubmit}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="space-y-4"
    >
      <div>
        <input
          type="text"
          name="username"
          placeholder="username/ e-mail id"
          value={formData.username}
          onChange={handleChange}
          className="w-full p-3 rounded bg-white text-black"
          required
        />
      </div>
      
      <div>
        <input
          type="password"
          name="password"
          placeholder="password"
          value={formData.password}
          onChange={handleChange}
          className="w-full p-3 rounded bg-white text-black"
          required
        />
      </div>
      
      <div className="text-center">
        <a href="#" className="text-blue-500 hover:underline">forgot password?</a>
      </div>
      
      <div className="pt-4">
        <button
          type="submit"
          className="w-full p-3 bg-white text-black rounded-full font-medium"
        >
          LOGIN
        </button>
      </div>
      
      <div className="text-center pt-2">
        <button
          type="button"
          onClick={switchToRegister}
          className="text-blue-400 hover:underline"
        >
          Create a new account
        </button>
      </div>
    </motion.form>
  );
};

export default LoginForm;
