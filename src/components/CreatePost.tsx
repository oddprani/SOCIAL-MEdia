
import React, { useState } from 'react';
import { Upload, Pencil } from 'lucide-react';
import { toast } from 'sonner';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const CreatePost: React.FC = () => {
  const [activeTab, setActiveTab] = useState("post");
  const [caption, setCaption] = useState("");
  const [hashtags, setHashtags] = useState<string[]>(["#goodday", "#savage"]);
  const [newHashtag, setNewHashtag] = useState("");
  const [mentions, setMentions] = useState<string[]>(["@mayank"]);
  const [newMention, setNewMention] = useState("");
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);

  const handleAddHashtag = () => {
    if (newHashtag && !newHashtag.includes(' ')) {
      if (!newHashtag.startsWith('#')) {
        setHashtags([...hashtags, `#${newHashtag}`]);
      } else {
        setHashtags([...hashtags, newHashtag]);
      }
      setNewHashtag("");
    }
  };

  const handleAddMention = () => {
    if (newMention && !newMention.includes(' ')) {
      if (!newMention.startsWith('@')) {
        setMentions([...mentions, `@${newMention}`]);
      } else {
        setMentions([...mentions, newMention]);
      }
      setNewMention("");
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      setSelectedFiles([...selectedFiles, ...files]);
      
      // Create preview URLs
      const newPreviewUrls = files.map(file => URL.createObjectURL(file));
      setPreviewUrls([...previewUrls, ...newPreviewUrls]);
    }
  };

  const handlePost = () => {
    if (selectedFiles.length === 0 && activeTab !== "story" && caption.trim() === "") {
      toast.error("Please add a photo/video or write a caption");
      return;
    }
    
    toast.success(`${activeTab} created successfully!`);
    // Reset form
    setCaption("");
    setSelectedFiles([]);
    setPreviewUrls([]);
    setHashtags(["#goodday"]);
    setMentions([]);
  };

  const handleSaveDraft = () => {
    toast.success("Saved as draft");
  };

  return (
    <div className="w-full bg-white rounded-xl p-6 shadow-sm">
      <Tabs defaultValue="post" value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="w-full flex justify-center mb-6">
          <TabsTrigger 
            value="post" 
            className={`px-6 py-2 ${activeTab === 'post' ? 'bg-black text-white rounded-full' : ''}`}
          >
            Create Post
          </TabsTrigger>
          <TabsTrigger 
            value="reel" 
            className={`px-6 py-2 ${activeTab === 'reel' ? 'bg-black text-white rounded-full' : ''}`}
          >
            Create Reel
          </TabsTrigger>
          <TabsTrigger 
            value="story" 
            className={`px-6 py-2 ${activeTab === 'story' ? 'bg-black text-white rounded-full' : ''}`}
          >
            Add Story
          </TabsTrigger>
        </TabsList>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left column - File upload */}
          <div className="col-span-1">
            <div className="flex flex-col items-center">
              <label htmlFor="file-upload" className="cursor-pointer w-full">
                <div className="border-2 border-dashed border-gray-300 rounded-lg h-40 flex flex-col items-center justify-center">
                  <Upload size={24} className="mb-2" />
                  <p className="text-sm text-gray-500">upload photos and videos</p>
                </div>
                <input 
                  type="file" 
                  id="file-upload" 
                  multiple 
                  accept="image/*,video/*" 
                  className="hidden" 
                  onChange={handleFileChange}
                />
              </label>
              
              {previewUrls.length > 0 && (
                <div className="mt-4 grid grid-cols-2 gap-2 w-full">
                  {previewUrls.map((url, index) => (
                    <div key={index} className="relative">
                      <img src={url} alt="Preview" className="w-full h-20 object-cover rounded-lg" />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          
          {/* Middle column - Caption */}
          <div className="col-span-1">
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
          
          {/* Right column - Hashtags and mentions */}
          {activeTab !== "story" && (
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
          )}
        </div>
        
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
      </Tabs>
    </div>
  );
};

export default CreatePost;
