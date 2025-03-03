
import React from 'react';
import { motion } from 'framer-motion';
import { PlusCircle } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const storyUsers = [
  { id: 1, username: 'your_story', isUser: true, image: null },
  { id: 2, username: 'john_doe', image: 'https://source.unsplash.com/random/100x100?face=1' },
  { id: 3, username: 'sarah_smith', image: 'https://source.unsplash.com/random/100x100?face=2' },
  { id: 4, username: 'mike_johnson', image: 'https://source.unsplash.com/random/100x100?face=3' },
  { id: 5, username: 'emma_wilson', image: 'https://source.unsplash.com/random/100x100?face=4' },
  { id: 6, username: 'alex_brown', image: 'https://source.unsplash.com/random/100x100?face=5' },
  { id: 7, username: 'lily_davis', image: 'https://source.unsplash.com/random/100x100?face=6' },
];

interface StoryItemProps {
  username: string;
  image: string | null;
  isUser?: boolean;
}

const StoryItem: React.FC<StoryItemProps> = ({ username, image, isUser = false }) => {
  return (
    <motion.div
      className="flex-shrink-0 flex flex-col items-center gap-1"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.05 }}
    >
      <div className={`w-16 h-16 rounded-full relative ${isUser ? 'bg-muted' : 'bg-gradient-to-tr from-rose-400 to-purple-500'} p-[2px]`}>
        <div className="w-full h-full rounded-full overflow-hidden flex items-center justify-center bg-background">
          {isUser ? (
            <div className="w-full h-full flex items-center justify-center bg-muted/50 cursor-pointer group">
              <PlusCircle className="w-6 h-6 text-muted-foreground group-hover:text-foreground" />
            </div>
          ) : (
            <Avatar className="w-full h-full">
              <AvatarImage src={image || ''} alt={username} />
              <AvatarFallback>{username.charAt(0).toUpperCase()}</AvatarFallback>
            </Avatar>
          )}
        </div>
      </div>
      <span className="text-xs truncate max-w-16">{isUser ? 'Your story' : username}</span>
    </motion.div>
  );
};

const Stories: React.FC = () => {
  return (
    <div className="flex gap-4 mb-6 overflow-x-auto py-2 px-1 no-scrollbar">
      {storyUsers.map((user) => (
        <StoryItem 
          key={user.id} 
          username={user.username} 
          image={user.image} 
          isUser={user.isUser} 
        />
      ))}
    </div>
  );
};

export default Stories;
