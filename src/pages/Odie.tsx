
import React, { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import { motion } from 'framer-motion';
import AnimatedRoute from '@/components/AnimatedRoute';
import Stories from '@/components/Stories';
import FeedPost from '@/components/FeedPost';
import SearchComponent from '@/components/SearchComponent';
import MessagingComponent from '@/components/MessagingComponent';
import { mockPosts } from '@/models/userModel';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Home, Search, MessageCircle } from 'lucide-react';
import UserProfileCard, { UserProfileProps } from '@/components/UserProfileCard';

const discoverPeople: UserProfileProps[] = [
  {
    username: 'priyanka_tengli',
    fullName: 'Priyanka Tengli',
    image: 'https://source.unsplash.com/random/100x100?face=1',
    mutualFollowers: 5,
    bio: 'Photographer | Travel enthusiast',
    isFollowing: false
  },
  {
    username: 'charanacharya',
    fullName: 'Charan Acharya',
    image: 'https://source.unsplash.com/random/100x100?face=2',
    mutualFollowers: 3,
    isFollowing: false
  },
  {
    username: 'moahammedyusuf',
    fullName: 'Mohammed Yusuf',
    image: 'https://source.unsplash.com/random/100x100?face=3',
    mutualFollowers: 7,
    isFollowing: false
  },
  {
    username: 'tanjiro_kamado',
    fullName: 'Tanjiro Kamado',
    image: 'https://source.unsplash.com/random/100x100?face=4',
    mutualFollowers: 2,
    isFollowing: false
  },
  {
    username: 'ichigo_kurasaki',
    fullName: 'Ichigo Kurasaki',
    image: 'https://source.unsplash.com/random/100x100?face=5',
    mutualFollowers: 9,
    isFollowing: false
  },
  {
    username: 'luffy',
    fullName: 'Monkey D. Luffy',
    image: 'https://source.unsplash.com/random/100x100?face=6',
    mutualFollowers: 12,
    isFollowing: false
  }
];

const Odie: React.FC = () => {
  const [activeTab, setActiveTab] = useState("feed");
  const [recommendations, setRecommendations] = useState(discoverPeople);

  const handleFollow = (username: string, isFollowing: boolean) => {
    setRecommendations(recommendations.map(user => 
      user.username === username ? { ...user, isFollowing } : user
    ));
  };

  return (
    <AnimatedRoute>
      <div className="flex">
        <Sidebar />
        <main className="ml-60 pt-4 pb-20 px-4 w-[calc(100%-240px)]">
          <div className="max-w-screen-xl mx-auto">
            {/* Mobile tabs for different sections */}
            <div className="md:hidden mb-4 mt-16">
              <Tabs defaultValue="feed" value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="w-full grid grid-cols-3">
                  <TabsTrigger value="feed" className="flex items-center justify-center gap-2">
                    <Home size={18} />
                    <span>Feed</span>
                  </TabsTrigger>
                  <TabsTrigger value="search" className="flex items-center justify-center gap-2">
                    <Search size={18} />
                    <span>Search</span>
                  </TabsTrigger>
                  <TabsTrigger value="messages" className="flex items-center justify-center gap-2">
                    <MessageCircle size={18} />
                    <span>Messages</span>
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="feed">
                  <div className="max-w-2xl mx-auto">
                    <Stories />
                    <div className="feed">
                      {mockPosts.map((post) => (
                        <FeedPost key={post.id} {...post} />
                      ))}
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="search">
                  <div className="max-w-2xl mx-auto">
                    <SearchComponent />
                  </div>
                </TabsContent>
                
                <TabsContent value="messages">
                  <MessagingComponent />
                </TabsContent>
              </Tabs>
            </div>
            
            {/* Desktop layout */}
            <div className="hidden md:flex gap-6 mt-20">
              {/* Main feed */}
              <div className="w-full lg:w-2/3 max-w-2xl mx-auto">
                <div className="w-full max-w-xl mx-auto mb-6">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search users, tags, reels....."
                      className="w-full px-4 py-3 pr-10 bg-gray-100 rounded-full"
                    />
                    <Search className="absolute right-3 top-3 text-gray-400" size={20} />
                  </div>
                </div>
                
                <Stories />
                
                <div className="feed">
                  {mockPosts.map((post) => (
                    <FeedPost key={post.id} {...post} />
                  ))}
                </div>
              </div>
              
              {/* Right sidebar - messages and discover people */}
              <div className="hidden lg:block w-1/3">
                <div className="sticky top-24 space-y-6">
                  <div className="bg-white rounded-xl p-4 shadow-sm">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-medium">MESSAGES</h3>
                      <button className="text-sm text-gray-500">See all</button>
                    </div>
                    <MessagingComponent mini />
                  </div>
                  
                  <div className="bg-white rounded-xl p-4 shadow-sm">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-medium">DISCOVER PEOPLE</h3>
                    </div>
                    <p className="text-xs text-gray-500 mb-4">people you may know</p>
                    
                    <div className="space-y-4">
                      {recommendations.map((user) => (
                        <div className="flex items-center justify-between" key={user.username}>
                          <div className="flex items-center gap-2">
                            <img 
                              src={user.image} 
                              alt={user.username} 
                              className="w-10 h-10 rounded-full object-cover"
                            />
                            <div>
                              <p className="text-sm font-medium">{user.username}</p>
                              <p className="text-xs text-gray-500">followed by manish_12</p>
                            </div>
                          </div>
                          <button 
                            className={`px-4 py-1 rounded-full text-xs font-medium ${
                              user.isFollowing
                                ? 'bg-gray-200 text-black'
                                : 'bg-[#d0006f] text-white'
                            }`}
                            onClick={() => handleFollow(user.username, !user.isFollowing)}
                          >
                            {user.isFollowing ? 'following' : 'follow'}
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </AnimatedRoute>
  );
};

export default Odie;
