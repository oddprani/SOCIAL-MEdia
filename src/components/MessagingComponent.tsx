
import React, { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { motion } from 'framer-motion';
import { Send, Image, Smile, Phone, Video, Info } from 'lucide-react';

// Mock data for conversations
const mockConversations = [
  {
    id: 1,
    username: 'john_doe',
    fullName: 'John Doe',
    avatar: 'https://source.unsplash.com/random/100x100?face=1',
    lastMessage: 'Hey, how are you doing?',
    timestamp: '2h ago',
    unread: true,
  },
  {
    id: 2,
    username: 'sarah_smith',
    fullName: 'Sarah Smith',
    avatar: 'https://source.unsplash.com/random/100x100?face=2',
    lastMessage: 'Did you see the new post?',
    timestamp: '5h ago',
    unread: false,
  },
  {
    id: 3,
    username: 'mike_johnson',
    fullName: 'Mike Johnson',
    avatar: 'https://source.unsplash.com/random/100x100?face=3',
    lastMessage: 'Let\'s meet tomorrow!',
    timestamp: '1d ago',
    unread: false,
  },
];

// Mock data for messages
const mockMessages = [
  {
    id: 1,
    senderId: 'john_doe',
    text: 'Hey there! How are you?',
    timestamp: '2:30 PM',
    isUser: false,
  },
  {
    id: 2,
    senderId: 'current_user',
    text: 'Hi John! I\'m good, thanks. How about you?',
    timestamp: '2:31 PM',
    isUser: true,
  },
  {
    id: 3,
    senderId: 'john_doe',
    text: 'I\'m doing great! Just checking out the new ODIE platform. It looks amazing!',
    timestamp: '2:35 PM',
    isUser: false,
  },
  {
    id: 4,
    senderId: 'current_user',
    text: 'Yeah, it\'s pretty cool! I love the new interface and all the features.',
    timestamp: '2:38 PM',
    isUser: true,
  },
];

interface ConversationItemProps {
  username: string;
  fullName: string;
  avatar?: string;
  lastMessage: string;
  timestamp: string;
  unread: boolean;
  isActive: boolean;
  onClick: () => void;
}

const ConversationItem: React.FC<ConversationItemProps> = ({
  username,
  fullName,
  avatar,
  lastMessage,
  timestamp,
  unread,
  isActive,
  onClick,
}) => {
  return (
    <motion.div
      className={`p-3 flex items-center gap-3 cursor-pointer transition-colors rounded-lg ${
        isActive ? 'bg-muted/80' : 'hover:bg-muted/30'
      }`}
      whileHover={{ x: 3 }}
      onClick={onClick}
    >
      <Avatar className="h-12 w-12">
        <AvatarImage src={avatar} alt={username} />
        <AvatarFallback>{username.charAt(0).toUpperCase()}</AvatarFallback>
      </Avatar>
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between">
          <h3 className="font-medium text-sm truncate">{fullName}</h3>
          <span className="text-xs text-muted-foreground">{timestamp}</span>
        </div>
        <div className="flex items-center justify-between">
          <p className={`text-xs truncate ${unread ? 'font-semibold' : 'text-muted-foreground'}`}>
            {lastMessage}
          </p>
          {unread && <div className="w-2 h-2 rounded-full bg-primary"></div>}
        </div>
      </div>
    </motion.div>
  );
};

interface MessageProps {
  text: string;
  timestamp: string;
  isUser: boolean;
}

const Message: React.FC<MessageProps> = ({ text, timestamp, isUser }) => {
  return (
    <motion.div
      className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className={`max-w-[70%] rounded-lg p-3 ${
        isUser 
          ? 'bg-primary text-primary-foreground rounded-tr-none' 
          : 'bg-muted rounded-tl-none'
      }`}>
        <p className="text-sm">{text}</p>
        <p className={`text-xs ${isUser ? 'text-primary-foreground/80' : 'text-muted-foreground'} text-right mt-1`}>
          {timestamp}
        </p>
      </div>
    </motion.div>
  );
};

const MessagingComponent: React.FC = () => {
  const [activeConversation, setActiveConversation] = useState(mockConversations[0]);
  const [newMessage, setNewMessage] = useState('');
  const [messages, setMessages] = useState(mockMessages);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (newMessage.trim()) {
      const message = {
        id: messages.length + 1,
        senderId: 'current_user',
        text: newMessage,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        isUser: true,
      };
      setMessages([...messages, message]);
      setNewMessage('');
    }
  };

  return (
    <div className="flex h-[calc(100vh-160px)] bg-card shadow-sm rounded-lg overflow-hidden border">
      {/* Conversations List */}
      <div className="w-1/3 border-r overflow-y-auto">
        <div className="p-4 border-b">
          <h2 className="font-semibold">Messages</h2>
        </div>
        <div>
          {mockConversations.map((conversation) => (
            <ConversationItem
              key={conversation.id}
              username={conversation.username}
              fullName={conversation.fullName}
              avatar={conversation.avatar}
              lastMessage={conversation.lastMessage}
              timestamp={conversation.timestamp}
              unread={conversation.unread}
              isActive={activeConversation.id === conversation.id}
              onClick={() => setActiveConversation(conversation)}
            />
          ))}
        </div>
      </div>

      {/* Message Content */}
      <div className="flex-1 flex flex-col">
        {/* Conversation Header */}
        <div className="p-3 border-b flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Avatar className="h-8 w-8">
              <AvatarImage src={activeConversation.avatar} alt={activeConversation.username} />
              <AvatarFallback>{activeConversation.username.charAt(0).toUpperCase()}</AvatarFallback>
            </Avatar>
            <h3 className="font-medium">{activeConversation.fullName}</h3>
          </div>
          <div className="flex items-center gap-4">
            <button className="text-muted-foreground hover:text-foreground transition-colors">
              <Phone size={18} />
            </button>
            <button className="text-muted-foreground hover:text-foreground transition-colors">
              <Video size={18} />
            </button>
            <button className="text-muted-foreground hover:text-foreground transition-colors">
              <Info size={18} />
            </button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 p-4 overflow-y-auto">
          {messages.map((message) => (
            <Message
              key={message.id}
              text={message.text}
              timestamp={message.timestamp}
              isUser={message.isUser}
            />
          ))}
        </div>

        {/* Message Input */}
        <form onSubmit={handleSendMessage} className="p-3 border-t flex items-center gap-2">
          <button type="button" className="text-muted-foreground hover:text-foreground transition-colors">
            <Image size={20} />
          </button>
          <input
            type="text"
            placeholder="Message..."
            className="flex-1 bg-muted/30 px-3 py-2 rounded-full text-sm outline-none"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
          <button type="button" className="text-muted-foreground hover:text-foreground transition-colors">
            <Smile size={20} />
          </button>
          <button
            type="submit"
            className={`text-primary transition-colors ${!newMessage.trim() && 'opacity-50 cursor-not-allowed'}`}
            disabled={!newMessage.trim()}
          >
            <Send size={20} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default MessagingComponent;
