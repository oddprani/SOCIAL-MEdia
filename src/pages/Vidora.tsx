
import React from 'react';
import { motion } from 'framer-motion';
import AnimatedRoute from '@/components/AnimatedRoute';
import { Avatar } from '@/components/ui/avatar';
import { Play } from 'lucide-react';

interface VideoCardProps {
  title: string;
  username: string;
  views: string;
  duration: string;
}

const VideoCard: React.FC<VideoCardProps> = ({ title, username, views, duration }) => {
  return (
    <motion.div
      className="relative rounded-lg overflow-hidden"
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <div className="aspect-video bg-gradient-to-tr from-gray-800 to-gray-700 relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-12 h-12 rounded-full bg-black/50 flex items-center justify-center backdrop-blur-sm">
            <Play size={20} />
          </div>
        </div>
        <div className="absolute bottom-2 right-2 bg-black/70 text-xs px-2 py-1 rounded-md">
          {duration}
        </div>
      </div>
      <div className="p-3">
        <h3 className="font-medium text-sm mb-1 line-clamp-2">{title}</h3>
        <div className="flex items-center gap-2">
          <Avatar className="h-6 w-6" />
          <div>
            <p className="text-xs font-medium">{username}</p>
            <p className="text-xs text-muted-foreground">{views}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const Vidora: React.FC = () => {
  const videos = [
    { title: "Ultimate Guide to Minimalist Design", username: "design_master", views: "1.2M views", duration: "12:34" },
    { title: "How I Built My Dream Setup in 2023", username: "tech_enthusiast", views: "890K views", duration: "8:21" },
    { title: "The Art of Visual Storytelling", username: "creative_director", views: "456K views", duration: "15:45" },
    { title: "Modern UI Animation Principles", username: "ui_wizard", views: "723K views", duration: "10:12" },
    { title: "Designing for Accessibility", username: "inclusive_design", views: "512K views", duration: "18:37" },
    { title: "Color Theory for Digital Products", username: "color_expert", views: "689K views", duration: "14:29" },
    { title: "Typography That Converts", username: "font_master", views: "374K views", duration: "9:56" },
    { title: "Future of Digital Experiences", username: "future_thinker", views: "1.5M views", duration: "22:18" },
  ];

  return (
    <AnimatedRoute>
      <div className="container max-w-6xl mx-auto px-4 py-8">
        <motion.h1 
          className="text-3xl font-bold mb-8"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          VIDORA
        </motion.h1>
        
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <div className="aspect-video rounded-xl overflow-hidden bg-gradient-to-tr from-gray-800 to-gray-700 relative mb-4">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-black/50 flex items-center justify-center backdrop-blur-sm">
                <Play size={32} />
              </div>
            </div>
          </div>
          <h2 className="text-xl font-medium mb-1">Featured: The Evolution of Design Systems</h2>
          <p className="text-sm text-muted-foreground">By premium_content • 2.4M views • 3 days ago</p>
        </motion.div>
        
        <motion.h2 
          className="text-xl font-medium mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          Recommended for you
        </motion.h2>
        
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {videos.map((video, index) => (
            <motion.div key={index} variants={itemVariants}>
              <VideoCard {...video} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </AnimatedRoute>
  );
};

export default Vidora;
