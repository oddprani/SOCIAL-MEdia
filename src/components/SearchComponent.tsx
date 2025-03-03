
import React, { useState } from 'react';
import { Search, User, Hash, X } from 'lucide-react';
import { motion } from 'framer-motion';
import UserProfileCard, { UserProfileProps } from './UserProfileCard';

// Mock data for search results
const mockUsers: UserProfileProps[] = [
  {
    username: 'john_doe',
    fullName: 'John Doe',
    image: 'https://source.unsplash.com/random/100x100?face=1',
    mutualFollowers: 5,
  },
  {
    username: 'sarah_smith',
    fullName: 'Sarah Smith',
    image: 'https://source.unsplash.com/random/100x100?face=2',
    mutualFollowers: 3,
  },
  {
    username: 'mike_johnson',
    fullName: 'Mike Johnson',
    image: 'https://source.unsplash.com/random/100x100?face=3',
    mutualFollowers: 1,
  },
];

const mockTags = [
  { name: 'photography', posts: 5642 },
  { name: 'travel', posts: 3829 },
  { name: 'food', posts: 2945 },
];

const SearchComponent: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<{users: UserProfileProps[], tags: {name: string, posts: number}[]}>({ users: [], tags: [] });
  const [showResults, setShowResults] = useState(false);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    
    if (query.length > 0) {
      // Mock search results based on query
      const filteredUsers = mockUsers.filter(user => 
        user.username.includes(query.toLowerCase()) || 
        user.fullName.toLowerCase().includes(query.toLowerCase())
      );
      
      const filteredTags = mockTags.filter(tag => 
        tag.name.includes(query.toLowerCase())
      );
      
      setSearchResults({ users: filteredUsers, tags: filteredTags });
      setShowResults(true);
    } else {
      setShowResults(false);
    }
  };

  const clearSearch = () => {
    setSearchQuery('');
    setShowResults(false);
  };

  return (
    <div className="relative w-full">
      <div className="flex items-center gap-2 w-full bg-muted/30 border px-3 py-2 rounded-full">
        <Search size={18} className="text-muted-foreground" />
        <input
          type="text"
          placeholder="Search users, tags..."
          className="flex-1 bg-transparent outline-none text-sm"
          value={searchQuery}
          onChange={handleSearch}
        />
        {searchQuery && (
          <button onClick={clearSearch}>
            <X size={18} className="text-muted-foreground" />
          </button>
        )}
      </div>

      {showResults && (
        <motion.div 
          className="absolute top-full left-0 right-0 mt-2 bg-card rounded-lg shadow-lg border z-10 max-h-96 overflow-y-auto"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {searchResults.users.length === 0 && searchResults.tags.length === 0 ? (
            <div className="p-4 text-center text-muted-foreground">
              No results found for "{searchQuery}"
            </div>
          ) : (
            <>
              {searchResults.users.length > 0 && (
                <div className="p-2">
                  <h4 className="text-xs font-semibold uppercase text-muted-foreground px-2 py-1">Users</h4>
                  {searchResults.users.map((user) => (
                    <UserProfileCard key={user.username} {...user} />
                  ))}
                </div>
              )}
              
              {searchResults.tags.length > 0 && (
                <div className="p-2">
                  <h4 className="text-xs font-semibold uppercase text-muted-foreground px-2 py-1">Tags</h4>
                  {searchResults.tags.map((tag) => (
                    <div key={tag.name} className="flex items-center gap-3 p-3 hover:bg-muted/50 rounded-md transition-colors">
                      <div className="w-10 h-10 bg-muted rounded-md flex items-center justify-center">
                        <Hash size={20} className="text-muted-foreground" />
                      </div>
                      <div>
                        <h3 className="text-sm font-medium">#{tag.name}</h3>
                        <p className="text-xs text-muted-foreground">{tag.posts.toLocaleString()} posts</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </>
          )}
        </motion.div>
      )}
    </div>
  );
};

export default SearchComponent;
