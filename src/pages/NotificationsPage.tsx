
import React from 'react';
import { User, Heart, MessageSquare, Clock } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import Sidebar from '@/components/Sidebar';
import AnimatedRoute from '@/components/AnimatedRoute';

// Mock notification data
const mockNotifications = [
  {
    id: 1,
    type: 'follow',
    user: {
      username: 'mayank_thakur',
      avatar: 'https://source.unsplash.com/random/100x100?face=1'
    },
    time: '1 day ago',
    image: null,
    content: 'started following you'
  },
  {
    id: 2,
    type: 'like',
    user: {
      username: 'mayank_thakur',
      avatar: 'https://source.unsplash.com/random/100x100?face=1'
    },
    time: '1 hr',
    image: 'https://source.unsplash.com/random/100x100?post=1',
    content: 'Liked Your Post'
  },
  {
    id: 3,
    type: 'comment',
    user: {
      username: 'shristi89',
      avatar: 'https://source.unsplash.com/random/100x100?face=2'
    },
    time: '1 hr',
    image: 'https://source.unsplash.com/random/100x100?post=2',
    content: 'commented on your post : Get a life bro'
  },
  {
    id: 4,
    type: 'follow_back',
    user: {
      username: 'joe_rogan',
      avatar: 'https://source.unsplash.com/random/100x100?face=3'
    },
    time: '10 hr',
    image: null,
    content: 'started following you back'
  },
  {
    id: 5,
    type: 'like_comment',
    user: {
      username: 'mayank_thakur',
      avatar: 'https://source.unsplash.com/random/100x100?face=1'
    },
    time: '1 hr',
    image: 'https://source.unsplash.com/random/100x100?post=3',
    content: 'Liked Your your comment'
  },
  {
    id: 6,
    type: 'reply',
    user: {
      username: 'thevarunmaya',
      avatar: 'https://source.unsplash.com/random/100x100?face=4'
    },
    time: '1 day',
    image: 'https://source.unsplash.com/random/100x100?post=4',
    content: 'Replied to your comment: thats how how it works lil bro!'
  }
];

const NotificationItem: React.FC<{
  notification: typeof mockNotifications[0];
}> = ({ notification }) => {
  // Different action buttons based on notification type
  const getActionButton = () => {
    switch (notification.type) {
      case 'follow':
      case 'follow_back':
        return notification.type === 'follow_back' ? (
          <button className="px-4 py-1 bg-gray-300 rounded-full text-sm">
            following
          </button>
        ) : (
          <button className="px-4 py-1 bg-[#d0006f] text-white rounded-full text-sm">
            follow back
          </button>
        );
      case 'comment':
        return (
          <button className="px-4 py-1 bg-[#d0006f] text-white rounded-full text-sm">
            reply?
          </button>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex items-center justify-between py-4 border-b border-gray-200">
      <div className="flex items-center gap-3">
        <Avatar className="h-10 w-10">
          <AvatarImage src={notification.user.avatar} alt={notification.user.username} />
          <AvatarFallback>
            {notification.user.username.charAt(0).toUpperCase()}
          </AvatarFallback>
        </Avatar>
        <div>
          <div className="flex items-center gap-1">
            <span className="font-medium text-sm">{notification.user.username}</span>
          </div>
          <p className="text-xs text-gray-600">{notification.content} · {notification.time}</p>
        </div>
      </div>
      
      <div className="flex items-center gap-3">
        {getActionButton()}
        
        {notification.image && (
          <div className="w-12 h-12 overflow-hidden rounded">
            <img 
              src={notification.image} 
              alt="Content" 
              className="w-full h-full object-cover"
            />
          </div>
        )}
      </div>
    </div>
  );
};

const NotificationsPage: React.FC = () => {
  return (
    <AnimatedRoute>
      <div className="flex">
        <Sidebar />
        <main className="ml-60 w-[calc(100%-240px)] pt-4 pb-20 px-4">
          <div className="max-w-3xl mx-auto bg-white rounded-xl p-6 shadow-sm mt-20">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-2xl font-bold">Notifications</h1>
              <button className="text-gray-500">
                <Clock size={20} />
              </button>
            </div>
            
            <Tabs defaultValue="new">
              <TabsList className="w-full border-b border-gray-200 mb-4">
                <TabsTrigger 
                  value="new" 
                  className="px-8 py-2 data-[state=active]:border-b-2 data-[state=active]:border-black rounded-none"
                >
                  new
                </TabsTrigger>
                <TabsTrigger 
                  value="yesterday" 
                  className="px-8 py-2 data-[state=active]:border-b-2 data-[state=active]:border-black rounded-none"
                >
                  yesterday
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="new" className="mt-0">
                <div className="space-y-1">
                  {mockNotifications.slice(0, 3).map(notification => (
                    <NotificationItem 
                      key={notification.id} 
                      notification={notification} 
                    />
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="yesterday" className="mt-0">
                <div className="space-y-1">
                  {mockNotifications.slice(3).map(notification => (
                    <NotificationItem 
                      key={notification.id} 
                      notification={notification} 
                    />
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </AnimatedRoute>
  );
};

export default NotificationsPage;
