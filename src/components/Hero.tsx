
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Binary } from 'lucide-react';

const Hero = () => {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsLoaded(true);
          }, 500);
          return 100;
        }
        return prev + 5;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center py-20 overflow-hidden binary-bg">
      <div className="absolute inset-0 z-0 binary-bg opacity-10"></div>
      
      <div className="container mx-auto px-4 z-10">
        {!isLoaded ? (
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-neon mb-6 text-xl">Initializing Secure Connection...</h2>
            <div className="w-full h-2 bg-darkgray rounded-full mb-8">
              <div 
                className="h-full bg-neon rounded-full transition-all duration-300"
                style={{ width: `${loadingProgress}%` }}
              ></div>
            </div>
            <p className="text-gray-400 font-mono">
              Access Status: <span className="text-neon">{loadingProgress}%</span>
            </p>
          </div>
        ) : (
          <div className="max-w-3xl mx-auto text-center">
            <div className="mb-6 inline-flex items-center justify-center px-4 py-2 bg-darkgray/50 border border-neon/30 rounded-md">
              <Binary className="h-4 w-4 text-neon mr-2" />
              <span className="text-neon text-sm">Access Granted</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              <span className="glitch" data-text="Welcome to the">Welcome to the</span><br />
              <span className="text-neon typing-container">Digital Underground</span>
            </h1>
            
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg">
              Where anonymity meets capability. Navigate the hidden corners of the digital realm with tools reserved for those who dare to venture beyond.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button className="bg-neon hover:bg-neon/80 text-white px-8 py-6 text-lg w-full sm:w-auto">
                Begin_Exploration()
              </Button>
              <Button variant="outline" className="border-neon text-neon hover:bg-neon/10 px-8 py-6 text-lg w-full sm:w-auto">
                View_Source_Code()
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;
