
import React from 'react';
import Sidebar from '@/components/Sidebar';
import AnimatedRoute from '@/components/AnimatedRoute';
import CreatePost from '@/components/CreatePost';

const CreatePage: React.FC = () => {
  return (
    <AnimatedRoute>
      <div className="flex">
        <Sidebar />
        <main className="ml-60 w-[calc(100%-240px)] pt-4 pb-20 px-4">
          <div className="max-w-screen-lg mx-auto mt-20">
            <CreatePost />
          </div>
        </main>
      </div>
    </AnimatedRoute>
  );
};

export default CreatePage;
