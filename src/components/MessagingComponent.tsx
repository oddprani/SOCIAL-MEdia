
import React from 'react';
import { mockUsers } from '@/models/userModel';

interface MessagingComponentProps {
  mini?: boolean;
}

const MessagingComponent: React.FC<MessagingComponentProps> = ({ mini = false }) => {
  const chatUsers = mockUsers.slice(0, mini ? 3 : 5);

  return (
    <div className={`${mini ? 'space-y-3' : 'space-y-4'}`}>
      {chatUsers.map((user) => (
        <div key={user.id} className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 p-2 rounded-lg">
          <div className="relative">
            <img 
              src={user.avatar} 
              alt={user.username} 
              className="w-10 h-10 rounded-full object-cover"
            />
            <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></span>
          </div>
          {!mini && (
            <div>
              <p className="font-medium text-sm">{user.fullName}</p>
              <p className="text-xs text-gray-500">Active now</p>
            </div>
          )}
          {mini && (
            <p className="font-medium text-sm">{user.username}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default MessagingComponent;
