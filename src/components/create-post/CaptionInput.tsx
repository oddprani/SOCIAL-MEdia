
import React from 'react';
import { Pencil } from 'lucide-react';

interface CaptionInputProps {
  activeTab: string;
  caption: string;
  setCaption: (caption: string) => void;
  hashtags: string[];
  mentions: string[];
}

const CaptionInput: React.FC<CaptionInputProps> = ({ 
  activeTab, 
  caption, 
  setCaption, 
  hashtags, 
  mentions 
}) => {
  return (
    <div className="w-full">
      {activeTab === "story" ? (
        <div className="flex flex-col items-center">
          <label htmlFor="story-text" className="cursor-pointer w-full">
            <div className="border-2 border-dashed border-gray-300 rounded-lg h-40 flex flex-col items-center justify-center">
              <Pencil size={24} className="mb-2" />
              <p className="text-sm text-gray-500">Write something</p>
            </div>
          </label>
          <textarea 
            id="story-text"
            className="mt-4 w-full p-3 bg-gray-100 rounded-lg resize-none h-32"
            placeholder="Write something..."
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
          ></textarea>
        </div>
      ) : (
        <div className="w-full">
          <textarea 
            className="w-full p-3 bg-gray-100 rounded-lg resize-none h-40"
            placeholder="write caption......"
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
          ></textarea>
          <div className="text-right text-xs text-gray-500 mt-1">
            {caption.length}/200 words
          </div>
          
          <div className="flex flex-wrap gap-2 mt-4">
            {hashtags.map((tag, index) => (
              <span key={index} className="bg-gray-200 px-3 py-1 rounded-full text-sm">
                {tag}
              </span>
            ))}
            
            {mentions.map((mention, index) => (
              <span key={index} className="bg-gray-200 px-3 py-1 rounded-full text-sm">
                {mention}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CaptionInput;
