
import React from 'react';

interface PostActionsProps {
  activeTab: string;
  handleSaveDraft: () => void;
  handlePost: () => void;
}

const PostActions: React.FC<PostActionsProps> = ({ 
  activeTab, 
  handleSaveDraft, 
  handlePost 
}) => {
  return (
    <div className="flex justify-end gap-4 mt-6">
      <button 
        className="px-8 py-2 bg-gray-400 text-white rounded-full"
        onClick={handleSaveDraft}
      >
        DRAFT
      </button>
      <button 
        className="px-8 py-2 bg-[#d0006f] text-white rounded-full"
        onClick={handlePost}
      >
        {activeTab === "story" ? "add to story" : "POST"}
      </button>
    </div>
  );
};

export default PostActions;
