
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, MessageCircle, Share, Bookmark, MoreHorizontal } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';

export interface Comment {
  id: number;
  username: string;
  text: string;
  timestamp: string;
}

export interface FeedPostProps {
  id: number;
  username: string;
  userImage?: string;
  location?: string;
  content: string;
  image?: string;
  timestamp: string;
  likes: number;
  comments: Comment[];
  isLiked?: boolean;
  isSaved?: boolean;
}

const FeedPost: React.FC<FeedPostProps> = ({ 
  username, 
  userImage, 
  location, 
  content, 
  image, 
  timestamp, 
  likes: initialLikes, 
  comments: initialComments,
  isLiked: initialIsLiked = false,
  isSaved: initialIsSaved = false
}) => {
  const [isLiked, setIsLiked] = useState(initialIsLiked);
  const [isSaved, setIsSaved] = useState(initialIsSaved);
  const [likes, setLikes] = useState(initialLikes);
  const [comments, setComments] = useState(initialComments);
  const [showComments, setShowComments] = useState(false);
  const [newComment, setNewComment] = useState('');
  
  const handleLike = () => {
    if (isLiked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setIsLiked(!isLiked);
  };

  const handleComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.trim()) {
      const comment = {
        id: comments.length + 1,
        username: 'current_user',
        text: newComment,
        timestamp: 'Just now'
      };
      setComments([...comments, comment]);
      setNewComment('');
    }
  };

  return (
    <motion.div 
      className="bg-card rounded-xl mb-6 shadow-sm overflow-hidden"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Post Header */}
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center gap-3">
          <Avatar className="h-10 w-10 border">
            <AvatarImage src={userImage} alt={username} />
            <AvatarFallback>{username.charAt(0).toUpperCase()}</AvatarFallback>
          </Avatar>
          <div>
            <div className="flex items-center gap-1">
              <h3 className="font-medium text-sm">{username}</h3>
              {location && <span className="text-xs text-muted-foreground">• {location}</span>}
            </div>
          </div>
        </div>
        <button className="text-muted-foreground hover:text-foreground">
          <MoreHorizontal size={20} />
        </button>
      </div>
      
      {/* Post Image */}
      {image && (
        <div className="w-full aspect-square bg-muted">
          <img 
            src={image} 
            alt="Post" 
            className="w-full h-full object-cover"
            loading="lazy"
            onDoubleClick={handleLike}
          />
        </div>
      )}
      
      {/* Post Actions */}
      <div className="p-4">
        <div className="flex justify-between mb-2">
          <div className="flex gap-4">
            <button 
              onClick={handleLike}
              className={cn("hover:text-foreground transition-colors", isLiked ? "text-red-500" : "text-muted-foreground")}
            >
              <Heart size={22} fill={isLiked ? "currentColor" : "none"} />
            </button>
            <button 
              onClick={() => setShowComments(!showComments)} 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <MessageCircle size={22} />
            </button>
            <button className="text-muted-foreground hover:text-foreground transition-colors">
              <Share size={22} />
            </button>
          </div>
          <button 
            onClick={() => setIsSaved(!isSaved)}
            className={cn("hover:text-foreground transition-colors", isSaved ? "text-foreground" : "text-muted-foreground")}
          >
            <Bookmark size={22} fill={isSaved ? "currentColor" : "none"} />
          </button>
        </div>
        
        {/* Likes */}
        <div className="mb-2">
          <p className="text-sm font-semibold">{likes.toLocaleString()} likes</p>
        </div>
        
        {/* Caption */}
        <div className="mb-2">
          <p className="text-sm">
            <span className="font-semibold">{username}</span> {content}
          </p>
        </div>
        
        {/* View Comments Link */}
        {comments.length > 0 && !showComments && (
          <button 
            onClick={() => setShowComments(true)}
            className="text-sm text-muted-foreground mb-2"
          >
            View all {comments.length} comments
          </button>
        )}
        
        {/* Comments Section */}
        {showComments && (
          <div className="mt-3 space-y-2">
            {comments.map((comment) => (
              <div key={comment.id} className="flex items-start gap-2">
                <p className="text-sm">
                  <span className="font-semibold">{comment.username}</span> {comment.text}
                </p>
              </div>
            ))}
          </div>
        )}
        
        {/* Timestamp */}
        <p className="text-xs text-muted-foreground mt-2">{timestamp}</p>
        
        {/* Comment Form */}
        <form onSubmit={handleComment} className="mt-4 flex items-center gap-2">
          <input
            type="text"
            placeholder="Add a comment..."
            className="flex-1 bg-transparent text-sm outline-none"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />
          <button 
            type="submit" 
            className={cn("text-sm font-semibold", 
              newComment.trim() ? "text-primary" : "text-primary/50 cursor-default"
            )}
            disabled={!newComment.trim()}
          >
            Post
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default FeedPost;
