
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from '@/components/ui/button';
import { Terminal } from 'lucide-react';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-black binary-bg p-4">
      <div className="text-center max-w-md w-full bg-darkgray/70 p-8 border border-neon/30 rounded-lg">
        <Terminal className="h-12 w-12 text-neon mx-auto mb-4" />
        <h1 className="text-4xl font-bold mb-4 text-white glitch" data-text="Error 404">Error 404</h1>
        <div className="mb-6 p-2 bg-black/50 border border-neon/20 rounded font-mono text-sm text-gray-400 text-left">
          <p><span className="text-neon">$</span> locate {location.pathname.substring(1)}</p>
          <p>Path not found in system. Access denied.</p>
          <p><span className="text-neon">$</span> <span className="animate-blink">▌</span></p>
        </div>
        <p className="text-gray-300 mb-6">The digital pathway you're seeking doesn't exist in our network.</p>
        <Button asChild className="bg-neon hover:bg-neon/80 text-white w-full">
          <a href="/">Return_To_Base()</a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
