
import React from 'react';
import Sidebar from '@/components/Sidebar';
import AnimatedRoute from '@/components/AnimatedRoute';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Heart, MessageSquare, Send, Bookmark } from 'lucide-react';

const DiscoverPage: React.FC = () => {
  return (
    <AnimatedRoute>
      <div className="flex">
        <Sidebar />
        <main className="ml-60 w-[calc(100%-240px)] pt-4 pb-20 px-4">
          <div className="container mx-auto mt-20">
            <h1 className="text-2xl font-bold mb-6">Discover</h1>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
              {/* First row */}
              <div className="aspect-square bg-gray-300 rounded-md flex items-center justify-center">
                post
              </div>
              <div className="aspect-square bg-gray-300 rounded-md flex items-center justify-center">
                post
              </div>
              <div className="aspect-square bg-gray-300 rounded-md flex items-center justify-center">
                post
              </div>
              <div className="row-span-2 aspect-[9/16] bg-gray-300 rounded-md flex items-center justify-center">
                reel
              </div>
              
              {/* Second row */}
              <div className="col-span-2 row-span-2 bg-gray-300 rounded-md flex items-center justify-center">
                reel
              </div>
              <div className="aspect-square bg-gray-300 rounded-md flex items-center justify-center">
                post
              </div>
              
              {/* Third row */}
              <div className="aspect-square bg-gray-300 rounded-md flex items-center justify-center">
                post
              </div>
              <div className="aspect-square bg-gray-300 rounded-md flex items-center justify-center">
                post
              </div>
              <div className="aspect-square bg-gray-300 rounded-md flex items-center justify-center">
                post
              </div>
              <div className="aspect-square bg-gray-300 rounded-md flex items-center justify-center">
                post
              </div>
            </div>
          </div>
        </main>
      </div>
    </AnimatedRoute>
  );
};

export default DiscoverPage;
