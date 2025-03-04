
import React, { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import AnimatedRoute from '@/components/AnimatedRoute';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Heart, MessageSquare, Send, MoreHorizontal } from 'lucide-react';
import { motion } from 'framer-motion';

const ReelsPage: React.FC = () => {
  const [isLiked, setIsLiked] = useState(false);
  const [likes, setLikes] = useState(215000);
  const [showComments, setShowComments] = useState(true);
  const [commentText, setCommentText] = useState('');
  
  const handleLike = () => {
    if (isLiked) {
      setLikes(prev => prev - 1);
    } else {
      setLikes(prev => prev + 1);
    }
    setIsLiked(!isLiked);
  };

  const handlePostComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (commentText.trim()) {
      // In a real app, this would send the comment to Supabase
      console.log('Posted comment:', commentText);
      setCommentText('');
    }
  };

  return (
    <AnimatedRoute>
      <div className="flex">
        <Sidebar />
        <main className="ml-60 w-[calc(100%-240px)] pt-4 pb-20 px-4">
          <div className="container mx-auto mt-20 flex justify-center">
            <div className="w-full max-w-6xl flex flex-col md:flex-row gap-6">
              {/* Reel Video Section */}
              <div className="md:w-[60%]">
                <div className="aspect-[9/16] bg-gray-300 rounded-lg overflow-hidden relative flex items-center justify-center">
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent text-white">
                    <div className="flex items-center">
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <Avatar className="w-10 h-10 border-2 border-white">
                            <AvatarImage src="https://source.unsplash.com/random/100x100?face=1" alt="User" />
                            <AvatarFallback>VK</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium">vivekkalguriti</p>
                            <p className="text-xs text-gray-300">followed by manish_12</p>
                          </div>
                        </div>
                        <p className="mt-2 text-sm">this is how we do it......</p>
                        <div className="mt-1 flex gap-1 text-xs">
                          <span className="text-blue-400">#this</span>
                          <span className="text-blue-400">#that</span>
                          <span className="text-blue-400">#lollipop</span>
                          <span className="text-blue-400">@charan</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute right-4 bottom-24 flex flex-col items-center gap-6">
                    <button onClick={handleLike} className="flex flex-col items-center">
                      <div className="w-12 h-12 bg-black/30 rounded-full flex items-center justify-center">
                        <Heart 
                          fill={isLiked ? "#ff0000" : "none"} 
                          stroke={isLiked ? "#ff0000" : "white"} 
                          size={24} 
                        />
                      </div>
                      <span className="text-white text-xs mt-1">{(likes/1000).toFixed(0)}K</span>
                    </button>
                    
                    <button 
                      onClick={() => setShowComments(!showComments)} 
                      className="flex flex-col items-center"
                    >
                      <div className="w-12 h-12 bg-black/30 rounded-full flex items-center justify-center">
                        <MessageSquare color="white" size={24} />
                      </div>
                      <span className="text-white text-xs mt-1">2,256</span>
                    </button>
                    
                    <button className="flex flex-col items-center">
                      <div className="w-12 h-12 bg-black/30 rounded-full flex items-center justify-center">
                        <Send color="white" size={24} />
                      </div>
                      <span className="text-white text-xs mt-1">226</span>
                    </button>
                    
                    <button className="flex flex-col items-center">
                      <div className="w-12 h-12 bg-black/30 rounded-full flex items-center justify-center">
                        <MoreHorizontal color="white" size={24} />
                      </div>
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Comments Section - Now always visible on desktop */}
              <div className="md:w-[40%]">
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="bg-white rounded-lg p-4 shadow-lg h-full"
                >
                  <h3 className="font-medium mb-4">Comments</h3>
                  
                  <div className="space-y-4 max-h-[400px] overflow-y-auto mb-4">
                    {Array.from({ length: 6 }).map((_, index) => (
                      <div key={index} className="flex gap-3">
                        <Avatar className="w-10 h-10">
                          <AvatarImage src={`https://source.unsplash.com/random/100x100?face=${index + 2}`} alt="User" />
                          <AvatarFallback>CA</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex justify-between">
                            <h4 className="font-medium">user{index + 1}</h4>
                            <button onClick={() => setIsLiked(!isLiked)}>
                              <Heart 
                                size={16} 
                                fill={isLiked && index === 0 ? "#ff0000" : "none"} 
                                stroke={isLiked && index === 0 ? "#ff0000" : "currentColor"} 
                              />
                            </button>
                          </div>
                          <p className="text-sm">{index === 0 ? "Lets Goooo...." : `Amazing content! Love it ${index}! 🔥`}</p>
                          <button className="text-xs text-gray-500 mt-1">reply</button>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Comment input field */}
                  <form onSubmit={handlePostComment} className="flex items-center gap-2">
                    <Avatar className="w-8 h-8">
                      <AvatarImage src="https://source.unsplash.com/random/100x100?face=10" alt="Your Avatar" />
                      <AvatarFallback>YA</AvatarFallback>
                    </Avatar>
                    <input
                      type="text"
                      placeholder="Add a comment..."
                      className="flex-1 border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                      value={commentText}
                      onChange={(e) => setCommentText(e.target.value)}
                    />
                    <button 
                      type="submit" 
                      className={`text-sm font-semibold text-blue-500 ${!commentText.trim() && 'opacity-50 cursor-not-allowed'}`}
                      disabled={!commentText.trim()}
                    >
                      Post
                    </button>
                  </form>
                </motion.div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </AnimatedRoute>
  );
};

export default ReelsPage;
