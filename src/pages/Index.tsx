
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Zap, Monitor, MessageSquare, ShoppingBag } from 'lucide-react';

const Index = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    // Auto-redirect to the first platform after a short delay
    const timeout = setTimeout(() => {
      navigate('/odie');
    }, 3000);
    
    return () => clearTimeout(timeout);
  }, [navigate]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const platforms = [
    { name: "ODIE", icon: <Zap size={24} />, path: "/odie", description: "Social media platform" },
    { name: "VIDORA", icon: <Monitor size={24} />, path: "/vidora", description: "Video sharing platform" },
    { name: "SENSEI", icon: <MessageSquare size={24} />, path: "/sensei", description: "AI chatbot platform" },
    { name: "CARNIVAL", icon: <ShoppingBag size={24} />, path: "/carnival", description: "Shopping platform" },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-secondary/20">
      <motion.div
        className="text-center max-w-4xl px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 
          className="text-4xl md:text-5xl font-bold mb-6"
          variants={itemVariants}
        >
          Welcome to the Ultimate Platform
        </motion.h1>
        
        <motion.p 
          className="text-lg text-muted-foreground mb-12"
          variants={itemVariants}
        >
          Discover our four integrated platforms in one seamless experience.
        </motion.p>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={itemVariants}
        >
          {platforms.map((platform) => (
            <motion.div
              key={platform.name}
              className="glass-effect flex flex-col items-center p-8 rounded-xl cursor-pointer"
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              onClick={() => navigate(platform.path)}
            >
              <div className="p-3 rounded-full bg-secondary mb-4">
                {platform.icon}
              </div>
              <h3 className="text-xl font-medium mb-2">{platform.name}</h3>
              <p className="text-sm text-muted-foreground">{platform.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.p 
          className="mt-12 text-sm text-muted-foreground"
          variants={itemVariants}
        >
          Redirecting to ODIE in a moment...
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Index;
