
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Edit, Grid, Film, Bookmark } from 'lucide-react';
import { mockUsers, mockPosts } from '@/models/userModel';
import AnimatedRoute from '@/components/AnimatedRoute';
import Sidebar from '@/components/Sidebar';

const UserProfile: React.FC = () => {
  const { username } = useParams<{ username: string }>();
  const [activeTab, setActiveTab] = useState("posts");
  
  // Find the user from mock data
  const user = mockUsers.find(u => u.username === username) || {
    id: 0,
    username: 'vivek_kalgurti',
    fullName: 'Vivek Kalgurti',
    avatar: 'https://source.unsplash.com/random/100x100?face=1',
    bio: 'If men were perfectly virtuous, they wouldn\'t have friends. ...',
    followers: 450,
    following: 230,
    posts: 32,
    isVerified: true,
  };
  
  // Get posts by this user
  const userPosts = mockPosts.filter(post => post.userId === user.id);
  
  return (
    <AnimatedRoute>
      <div className="flex">
        <Sidebar />
        <main className="ml-60 w-[calc(100%-240px)] pt-4 pb-20 px-4">
          <div className="max-w-4xl mx-auto bg-white mt-20">
            <div className="h-40 bg-gray-200 relative"></div>
            
            <div className="relative px-8 pb-6">
              {/* Profile Avatar */}
              <div className="absolute -top-16 left-1/2 transform -translate-x-1/2">
                <Avatar className="w-32 h-32 border-4 border-white">
                  <AvatarImage src={user.avatar} alt={user.username} />
                  <AvatarFallback className="text-4xl bg-gray-300">{user.fullName?.charAt(0)}</AvatarFallback>
                </Avatar>
              </div>
              
              <div className="pt-20 text-center">
                <h1 className="text-2xl font-bold">{user.fullName || "Vivek Kalgurti"}</h1>
                <p className="text-gray-600 mb-1">@{user.username || "vivekkalguri"}</p>
                
                <p className="text-sm mb-4">{user.bio || "If men were perfectly virtuous, they wouldn't have friends. ..."}</p>
                
                <div className="flex justify-center mb-4">
                  <div className="text-right pr-4">
                    <p className="font-bold">followed by:</p>
                  </div>
                  <div className="flex items-center">
                    <Avatar className="w-6 h-6 border border-white">
                      <AvatarImage src="https://source.unsplash.com/random/100x100?face=2" alt="follower" />
                      <AvatarFallback>C</AvatarFallback>
                    </Avatar>
                    <span className="text-sm ml-1">charanacharya and 45others</span>
                  </div>
                </div>
                
                <button className="px-6 py-2 bg-gray-200 rounded-full text-sm">
                  edit profile
                </button>
              </div>
              
              {/* Content Tabs */}
              <Tabs 
                defaultValue="posts" 
                value={activeTab} 
                onValueChange={setActiveTab}
                className="mt-8"
              >
                <TabsList className="w-full flex justify-center mb-6 bg-transparent">
                  <TabsTrigger 
                    value="posts" 
                    className={`px-8 py-2 rounded-full ${activeTab === 'posts' ? 'bg-black text-white' : ''}`}
                  >
                    POSTS
                  </TabsTrigger>
                  <TabsTrigger 
                    value="reels" 
                    className={`px-8 py-2 rounded-full ${activeTab === 'reels' ? 'bg-black text-white' : ''}`}
                  >
                    REELS
                  </TabsTrigger>
                  <TabsTrigger 
                    value="exclusive" 
                    className={`px-8 py-2 rounded-full ${activeTab === 'exclusive' ? 'bg-black text-white' : ''}`}
                  >
                    Exclusive content
                  </TabsTrigger>
                </TabsList>
                
                {/* Posts Grid */}
                <TabsContent value="posts" className="mt-4">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                    {Array.from({ length: 8 }).map((_, index) => (
                      <div key={index} className="aspect-square bg-gray-200 rounded-md"></div>
                    ))}
                  </div>
                </TabsContent>
                
                {/* Reels Grid */}
                <TabsContent value="reels" className="mt-4">
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                    {Array.from({ length: 6 }).map((_, index) => (
                      <div key={index} className="aspect-[9/16] bg-gray-200 rounded-md"></div>
                    ))}
                  </div>
                </TabsContent>
                
                {/* Exclusive Content */}
                <TabsContent value="exclusive" className="mt-4">
                  <div className="grid grid-cols-2 gap-2">
                    <div className="aspect-square bg-gray-200 rounded-md"></div>
                    <div className="aspect-[9/16] bg-gray-200 rounded-md"></div>
                    <div className="aspect-[9/16] bg-gray-200 rounded-md"></div>
                    <div className="aspect-square bg-gray-200 rounded-md"></div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </main>
      </div>
    </AnimatedRoute>
  );
};

export default UserProfile;
