
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Grid, List, Bookmark, Settings, MapPin, Link as LinkIcon } from 'lucide-react';
import { mockUsers, mockPosts } from '@/models/userModel';
import FeedPost from '@/components/FeedPost';
import AnimatedRoute from '@/components/AnimatedRoute';

const UserProfile: React.FC = () => {
  const { username } = useParams<{ username: string }>();
  const [activeTab, setActiveTab] = useState("posts");
  const [isFollowing, setIsFollowing] = useState(false);
  
  // Find the user from mock data
  const user = mockUsers.find(u => u.username === username) || mockUsers[0];
  
  // Get posts by this user
  const userPosts = mockPosts.filter(post => post.userId === user.id);
  
  const handleFollowClick = () => {
    setIsFollowing(!isFollowing);
  };
  
  return (
    <AnimatedRoute>
      <div className="flex">
        <main className="ml-60 w-[calc(100%-240px)] pt-4 pb-20 px-4">
          <div className="max-w-4xl mx-auto">
            {/* Profile Header */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-10 pt-6">
              {/* Profile Avatar */}
              <div className="relative">
                <Avatar className="w-32 h-32 border-4 border-background">
                  <AvatarImage src={user.avatar} alt={user.username} />
                  <AvatarFallback className="text-4xl">{user.fullName.charAt(0)}</AvatarFallback>
                </Avatar>
              </div>
              
              {/* Profile Info */}
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                  <h1 className="text-2xl font-bold">{user.username}</h1>
                  <div className="flex items-center gap-2">
                    <button 
                      onClick={handleFollowClick}
                      className={`px-4 py-1.5 rounded-md text-sm font-medium ${
                        isFollowing
                          ? 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                          : 'bg-primary text-primary-foreground hover:bg-primary/90'
                      }`}
                    >
                      {isFollowing ? 'Following' : 'Follow'}
                    </button>
                    <button className="p-1.5 bg-secondary rounded-md">
                      <Settings size={18} className="text-secondary-foreground" />
                    </button>
                  </div>
                </div>
                
                {/* Stats */}
                <div className="flex gap-6 mb-4">
                  <div>
                    <span className="font-semibold">{user.posts}</span> posts
                  </div>
                  <div>
                    <span className="font-semibold">{user.followers}</span> followers
                  </div>
                  <div>
                    <span className="font-semibold">{user.following}</span> following
                  </div>
                </div>
                
                {/* Bio */}
                <div className="mb-2">
                  <h2 className="font-semibold">{user.fullName}</h2>
                  <p className="text-sm whitespace-pre-wrap">{user.bio}</p>
                </div>
                
                {/* Additional Info */}
                {user.location && (
                  <div className="flex items-center gap-1 text-sm text-muted-foreground mb-1">
                    <MapPin size={14} />
                    <span>{user.location}</span>
                  </div>
                )}
                
                {user.website && (
                  <div className="flex items-center gap-1 text-sm text-blue-500">
                    <LinkIcon size={14} />
                    <a href={`https://${user.website}`} target="_blank" rel="noopener noreferrer">
                      {user.website}
                    </a>
                  </div>
                )}
              </div>
            </div>
            
            {/* Content Tabs */}
            <Tabs defaultValue="posts" className="w-full" value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="w-full grid grid-cols-3 mb-6">
                <TabsTrigger value="posts" className="flex items-center gap-2">
                  <Grid size={18} />
                  <span className="hidden sm:inline">Posts</span>
                </TabsTrigger>
                <TabsTrigger value="saved" className="flex items-center gap-2">
                  <Bookmark size={18} />
                  <span className="hidden sm:inline">Saved</span>
                </TabsTrigger>
                <TabsTrigger value="tagged" className="flex items-center gap-2">
                  <List size={18} />
                  <span className="hidden sm:inline">Tagged</span>
                </TabsTrigger>
              </TabsList>
              
              {/* Posts Tab */}
              <TabsContent value="posts" className="mt-0">
                {userPosts.length > 0 ? (
                  <div className="grid gap-6">
                    {userPosts.map((post) => (
                      <FeedPost key={post.id} {...post} />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-10">
                    <h3 className="text-lg font-semibold mb-2">No Posts Yet</h3>
                    <p className="text-muted-foreground">When {user.username} posts, you'll see their photos here.</p>
                  </div>
                )}
              </TabsContent>
              
              {/* Saved Tab */}
              <TabsContent value="saved" className="mt-0">
                <div className="text-center py-10">
                  <h3 className="text-lg font-semibold mb-2">Only you can see what you've saved</h3>
                  <p className="text-muted-foreground">When you save something, it'll appear here.</p>
                </div>
              </TabsContent>
              
              {/* Tagged Tab */}
              <TabsContent value="tagged" className="mt-0">
                <div className="text-center py-10">
                  <h3 className="text-lg font-semibold mb-2">No Photos</h3>
                  <p className="text-muted-foreground">When people tag {user.username} in photos, they'll appear here.</p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </AnimatedRoute>
  );
};

export default UserProfile;
