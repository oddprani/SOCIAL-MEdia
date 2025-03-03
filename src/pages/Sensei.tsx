
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedRoute from '@/components/AnimatedRoute';
import { Avatar } from '@/components/ui/avatar';
import { Send } from 'lucide-react';

interface MessageProps {
  content: string;
  isUser: boolean;
  timestamp: string;
}

const Message: React.FC<MessageProps> = ({ content, isUser, timestamp }) => {
  return (
    <motion.div
      className={`flex mb-4 ${isUser ? 'justify-end' : 'justify-start'}`}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {!isUser && (
        <div className="mr-3">
          <Avatar className="h-8 w-8">
            <div className="h-full w-full rounded-full bg-gradient-to-tr from-gray-700 to-gray-800 flex items-center justify-center text-white text-xs">AI</div>
          </Avatar>
        </div>
      )}
      <div className={`max-w-[70%] ${isUser ? 'bg-primary text-primary-foreground' : 'bg-secondary'} rounded-2xl px-4 py-3`}>
        <p className="text-sm mb-1">{content}</p>
        <p className="text-xs text-right opacity-70">{timestamp}</p>
      </div>
      {isUser && (
        <div className="ml-3">
          <Avatar className="h-8 w-8">
            <div className="h-full w-full rounded-full bg-gradient-to-tr from-blue-500 to-blue-600 flex items-center justify-center text-white text-xs">YO</div>
          </Avatar>
        </div>
      )}
    </motion.div>
  );
};

const Sensei: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  
  const messages = [
    { content: "Hello! I'm SENSEI, your AI assistant. How can I help you today?", isUser: false, timestamp: "10:23 AM" },
    { content: "I'm looking for recommendations on minimalist design principles.", isUser: true, timestamp: "10:24 AM" },
    { content: "Great question! Minimalist design is centered around the concept of 'less is more'. Here are some key principles:\n\n1. Simplicity in form and function\n2. Use of negative space\n3. Limited color palette\n4. Clear visual hierarchy\n5. Typography as a design element\n\nWould you like me to elaborate on any of these?", isUser: false, timestamp: "10:24 AM" },
    { content: "Could you explain more about using typography as a design element?", isUser: true, timestamp: "10:25 AM" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle message submission logic here
    setInputValue('');
  };

  return (
    <AnimatedRoute>
      <div className="container max-w-4xl mx-auto px-4 py-6">
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <h1 className="text-3xl font-bold mb-2">SENSEI</h1>
          <p className="text-muted-foreground">Your intelligent AI assistant powered by Gemini</p>
        </motion.div>
        
        <motion.div 
          className="bg-card rounded-xl p-6 shadow-sm mb-6 min-h-[60vh] flex flex-col"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <div className="flex-1 overflow-y-auto mb-4">
            {messages.map((message, index) => (
              <Message key={index} {...message} />
            ))}
          </div>
          
          <form onSubmit={handleSubmit} className="mt-auto">
            <div className="relative">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask Sensei anything..."
                className="w-full rounded-full py-3 px-5 pr-12 bg-secondary border-0 focus-visible:ring-1 focus-visible:ring-primary"
              />
              <button 
                type="submit" 
                className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center"
              >
                <Send size={16} />
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </AnimatedRoute>
  );
};

export default Sensei;
