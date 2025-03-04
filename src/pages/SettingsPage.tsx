
import React from 'react';
import Sidebar from '@/components/Sidebar';
import AnimatedRoute from '@/components/AnimatedRoute';
import { ChevronRight } from 'lucide-react';

const SettingsPage: React.FC = () => {
  const settingsOptions = [
    { label: 'settings', isHeader: true },
    { label: 'your activity', link: '/odie/settings/activity' },
    { label: 'saved', link: '/odie/settings/saved' },
    { label: 'appearance', link: '/odie/settings/appearance' },
    { label: 'report a problem', link: '/odie/settings/report' },
    { label: 'switch account', link: '/odie/settings/switch' },
    { label: 'logout', link: '/auth', isLogout: true },
  ];

  return (
    <AnimatedRoute>
      <div className="flex">
        <Sidebar />
        <main className="ml-60 w-[calc(100%-240px)] pt-4 pb-20 px-4">
          <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 mt-20">
            <div className="md:col-span-4 lg:col-span-3">
              <div className="bg-[#e5e5e5] rounded-lg overflow-hidden">
                <ul>
                  {settingsOptions.map((option, index) => (
                    <li key={index}>
                      {option.isHeader ? (
                        <h3 className="font-semibold text-center p-4">{option.label}</h3>
                      ) : (
                        <a 
                          href={option.link} 
                          className={`flex items-center justify-between p-4 hover:bg-gray-200 border-t border-gray-300 ${option.isLogout ? 'text-red-500' : ''}`}
                        >
                          <span>{option.label}</span>
                          {!option.isLogout && <ChevronRight size={18} />}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="md:col-span-8 lg:col-span-9">
              <div className="bg-white rounded-lg p-8">
                <h1 className="text-2xl font-bold mb-6">SETTINGS</h1>
                
                <p className="text-gray-500">
                  Select a setting from the left menu to view and update your preferences.
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </AnimatedRoute>
  );
};

export default SettingsPage;
