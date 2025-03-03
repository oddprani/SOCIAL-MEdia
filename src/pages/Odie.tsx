
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

const Odie: React.FC = () => {
  const [activeTab, setActiveTab] = useState("feed");

  return (
    <AnimatedRoute>
      <div className="flex">
        <Sidebar />
        <main className="ml-60 pt-4 pb-20 px-4 w-[calc(100%-240px)]">
          <div className="max-w-screen-xl mx-auto">
            {/* Mobile tabs for different sections */}
            <div className="md:hidden mb-4">
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
            <div className="hidden md:flex gap-6">
              {/* Main feed */}
              <div className="w-full lg:w-2/3 max-w-2xl mx-auto">
                <Stories />
                <div className="feed">
                  {mockPosts.map((post) => (
                    <FeedPost key={post.id} {...post} />
                  ))}
                </div>
              </div>
              
              {/* Right sidebar - search and messages */}
              <div className="hidden lg:block w-1/3">
                <div className="sticky top-24">
                  <div className="mb-6">
                    <SearchComponent />
                  </div>
                  <div className="bg-card rounded-xl p-4 shadow-sm mb-6">
                    <h3 className="font-medium mb-3">Direct Messages</h3>
                    {/* Mini chat preview */}
                    <div className="h-96 overflow-hidden">
                      <MessagingComponent />
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
