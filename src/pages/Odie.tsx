
import React from 'react';
import Sidebar from '@/components/Sidebar';
import { motion } from 'framer-motion';
import AnimatedRoute from '@/components/AnimatedRoute';
import { Avatar } from '@/components/ui/avatar';

interface FeedPostProps {
  username: string;
  content: string;
  timestamp: string;
  likes: number;
  comments: number;
}

const FeedPost: React.FC<FeedPostProps> = ({ username, content, timestamp, likes, comments }) => {
  return (
    <motion.div 
      className="bg-card rounded-xl p-5 mb-5 shadow-sm"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center mb-4">
        <Avatar className="h-10 w-10 mr-3" />
        <div>
          <h3 className="font-medium text-sm">{username}</h3>
          <p className="text-xs text-muted-foreground">{timestamp}</p>
        </div>
      </div>
      <p className="mb-4 text-sm">{content}</p>
      <div className="flex gap-4 text-xs text-muted-foreground">
        <span>{likes} likes</span>
        <span>{comments} comments</span>
      </div>
    </motion.div>
  );
};

const StoriesRow: React.FC = () => {
  return (
    <div className="flex gap-4 mb-6 overflow-x-auto py-2 px-1 no-scrollbar">
      {Array.from({ length: 7 }).map((_, index) => (
        <motion.div
          key={index}
          className="flex-shrink-0"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: index * 0.05 }}
        >
          <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-gray-300 to-gray-400 flex items-center justify-center">
            <div className="w-[58px] h-[58px] bg-background rounded-full"></div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

const Odie: React.FC = () => {
  const dummyFeed = [
    {
      username: "john_doe",
      content: "Just exploring the new ODIE platform. The interface is super clean!",
      timestamp: "2 hours ago",
      likes: 24,
      comments: 5
    },
    {
      username: "design_enthusiast",
      content: "The minimalism on this platform is exactly what I've been looking for. No distractions, just content.",
      timestamp: "4 hours ago",
      likes: 57,
      comments: 12
    },
    {
      username: "tech_lover",
      content: "Comparing this to other social platforms, the attention to detail here is impressive. The animations are so smooth!",
      timestamp: "6 hours ago",
      likes: 132,
      comments: 28
    }
  ];

  return (
    <AnimatedRoute>
      <div className="flex">
        <Sidebar />
        <main className="ml-60 pt-4 pb-20 px-4 w-[calc(100%-240px)]">
          <div className="max-w-2xl mx-auto">
            <StoriesRow />
            
            <div className="feed">
              {dummyFeed.map((post, index) => (
                <FeedPost key={index} {...post} />
              ))}
            </div>
          </div>
        </main>
      </div>
    </AnimatedRoute>
  );
};

export default Odie;
