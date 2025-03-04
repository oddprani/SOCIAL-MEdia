
import React from 'react';
import { Zap } from 'lucide-react';

const AuthHeader: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center items-center p-4 bg-white/10 backdrop-blur-md">
      <div className="flex items-center gap-8">
        <a href="/odie" className="flex items-center justify-center gap-2 px-4 py-2 bg-black text-white rounded-full">
          <Zap size={16} />
          <span className="font-medium">ODIE</span>
        </a>
        <a href="/vidora" className="flex items-center justify-center gap-2 px-4 py-2">
          <span className="font-medium">VIDORA</span>
        </a>
        <a href="/sensei" className="flex items-center justify-center gap-2 px-4 py-2">
          <span className="font-medium">SENSEI</span>
        </a>
        <a href="/carnival" className="flex items-center justify-center gap-2 px-4 py-2">
          <span className="font-medium">CARNIVAL</span>
        </a>
      </div>
    </nav>
  );
};

export default AuthHeader;
