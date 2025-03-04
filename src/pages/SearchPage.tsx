
import React, { useState, useEffect } from 'react';
import { Search, User } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import Sidebar from '@/components/Sidebar';
import AnimatedRoute from '@/components/AnimatedRoute';
import { motion } from 'framer-motion';

// Mock data
const recentSearches = [
  {
    id: 1,
    username: 'priyanka_tengli',
    avatar: 'https://source.unsplash.com/random/100x100?face=1',
    followedBy: 'manish_12'
  },
  {
    id: 2,
    username: 'priyanka_tengli',
    avatar: 'https://source.unsplash.com/random/100x100?face=1',
    followedBy: 'manish_12'
  },
  {
    id: 3,
    username: 'priyanka_tengli',
    avatar: 'https://source.unsplash.com/random/100x100?face=1',
    followedBy: 'manish_12'
  }
];

const SearchPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    if (searchQuery.trim().length > 0) {
      // Simulate search results - in a real app, this would be an API call
      setSearchResults(recentSearches.filter(user => 
        user.username.toLowerCase().includes(searchQuery.toLowerCase())
      ));
      setShowResults(true);
    } else {
      setShowResults(false);
    }
  }, [searchQuery]);

  return (
    <AnimatedRoute>
      <div className="flex">
        <Sidebar />
        <main className="ml-60 w-[calc(100%-240px)] pt-4 pb-20 px-4">
          <div className="max-w-3xl mx-auto mt-20">
            <div className="relative mb-8">
              <input
                type="text"
                placeholder="Search users, tags, reels....."
                className="w-full px-4 py-3 pr-10 bg-gray-100 rounded-full"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute right-3 top-3 text-gray-400" size={20} />
            </div>
            
            {!showResults && (
              <>
                <div className="text-gray-500 text-sm mb-4">previous searches</div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {recentSearches.map(user => (
                    <div key={user.id} className="flex items-center gap-3">
                      <Avatar className="w-16 h-16">
                        <AvatarImage src={user.avatar} alt={user.username} />
                        <AvatarFallback>{user.username.charAt(0).toUpperCase()}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">{user.username}</p>
                        <p className="text-xs text-gray-500">followed by {user.followedBy}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
            
            {showResults && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-gray-500 text-sm mb-4">Search results</div>
                <div className="space-y-4">
                  {searchResults.length > 0 ? (
                    searchResults.map(user => (
                      <div key={user.id} className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Avatar className="w-16 h-16">
                            <AvatarImage src={user.avatar} alt={user.username} />
                            <AvatarFallback>{user.username.charAt(0).toUpperCase()}</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium">{user.username}</p>
                            <p className="text-xs text-gray-500">followed by {user.followedBy}</p>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="text-center py-8">
                      <p>No users found matching "{searchQuery}"</p>
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </div>
        </main>
      </div>
    </AnimatedRoute>
  );
};

export default SearchPage;
