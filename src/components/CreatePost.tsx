
import React, { useState } from 'react';
import { toast } from 'sonner';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import FileUpload from './create-post/FileUpload';
import CaptionInput from './create-post/CaptionInput';
import TagInput from './create-post/TagInput';
import PostActions from './create-post/PostActions';

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
            <FileUpload 
              selectedFiles={selectedFiles}
              previewUrls={previewUrls}
              handleFileChange={handleFileChange}
            />
          </div>
          
          {/* Middle column - Caption */}
          <div className="col-span-1">
            <CaptionInput 
              activeTab={activeTab}
              caption={caption}
              setCaption={setCaption}
              hashtags={hashtags}
              mentions={mentions}
            />
          </div>
          
          {/* Right column - Hashtags and mentions */}
          <TagInput 
            activeTab={activeTab}
            newHashtag={newHashtag}
            setNewHashtag={setNewHashtag}
            handleAddHashtag={handleAddHashtag}
            newMention={newMention}
            setNewMention={setNewMention}
            handleAddMention={handleAddMention}
          />
        </div>
        
        <PostActions 
          activeTab={activeTab}
          handleSaveDraft={handleSaveDraft}
          handlePost={handlePost}
        />
      </Tabs>
    </div>
  );
};

export default CreatePost;
