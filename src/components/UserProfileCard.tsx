
import React, { useState } from 'react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { motion } from 'framer-motion';

export interface UserProfileProps {
  username: string;
  fullName: string;
  image?: string;
  isFollowing?: boolean;
  bio?: string;
  mutualFollowers?: number;
  onFollow?: (following: boolean) => void;
}

const UserProfileCard: React.FC<UserProfileProps> = ({
  username,
  fullName,
  image,
  isFollowing: initialIsFollowing = false,
  bio,
  mutualFollowers = 0,
  onFollow
}) => {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing);

  const handleFollowClick = () => {
    setIsFollowing(!isFollowing);
    if (onFollow) {
      onFollow(!isFollowing);
    }
  };

  return (
    <motion.div 
      className="p-4 rounded-lg shadow-sm bg-card flex items-center justify-between w-full mb-3"
      initial={{ opacity: 0, y: 5 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex items-center gap-3">
        <Avatar className="h-12 w-12">
          <AvatarImage src={image} alt={username} />
          <AvatarFallback>{username.charAt(0).toUpperCase()}</AvatarFallback>
        </Avatar>
        <div>
          <div className="flex items-center gap-1">
            <h3 className="font-medium text-sm">{username}</h3>
          </div>
          <p className="text-xs text-muted-foreground">{fullName}</p>
          {mutualFollowers > 0 && (
            <p className="text-xs text-muted-foreground">{mutualFollowers} mutual followers</p>
          )}
        </div>
      </div>
      <button
        onClick={handleFollowClick}
        className={`px-3 py-1 rounded-md text-xs font-medium ${
          isFollowing
            ? 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
            : 'bg-primary text-primary-foreground hover:bg-primary/90'
        }`}
      >
        {isFollowing ? 'Following' : 'Follow'}
      </button>
    </motion.div>
  );
};

export default UserProfileCard;
