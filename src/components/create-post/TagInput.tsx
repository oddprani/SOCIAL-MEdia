
import React from 'react';

interface TagInputProps {
  activeTab: string;
  newHashtag: string;
  setNewHashtag: (hashtag: string) => void;
  handleAddHashtag: () => void;
  newMention: string;
  setNewMention: (mention: string) => void;
  handleAddMention: () => void;
}

const TagInput: React.FC<TagInputProps> = ({ 
  activeTab,
  newHashtag, 
  setNewHashtag, 
  handleAddHashtag,
  newMention,
  setNewMention,
  handleAddMention
}) => {
  if (activeTab === "story") {
    return null;
  }
  
  return (
    <div className="col-span-1">
      <div className="mb-6">
        <p className="text-sm font-medium mb-2">add hashtags</p>
        <div className="flex gap-2">
          <input 
            type="text" 
            className="flex-1 p-2 bg-gray-200 rounded-full text-sm"
            placeholder="#goodday"
            value={newHashtag}
            onChange={(e) => setNewHashtag(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleAddHashtag()}
          />
        </div>
      </div>
      
      <div>
        <p className="text-sm font-medium mb-2">Mention</p>
        <div className="flex gap-2">
          <input 
            type="text" 
            className="flex-1 p-2 bg-gray-200 rounded-full text-sm"
            placeholder="@mayank"
            value={newMention}
            onChange={(e) => setNewMention(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleAddMention()}
          />
        </div>
      </div>
    </div>
  );
};

export default TagInput;
