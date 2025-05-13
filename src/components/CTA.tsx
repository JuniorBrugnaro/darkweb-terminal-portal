
import React from 'react';
import { Button } from '@/components/ui/button';

const CTA = () => {
  return (
    <section className="py-20 bg-black binary-bg">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white glitch" data-text="Ready to Descend?">
            Ready to Descend?
          </h2>
          <p className="text-gray-300 mb-8 text-lg">
            The digital underground awaits your presence. Join the network of explorers who've broken free from conventional limitations.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button className="bg-neon hover:bg-neon/80 text-white px-8 py-6 text-lg w-full sm:w-auto">
              Join_now("curious_one")
            </Button>
            <Button variant="outline" className="border-neon text-neon hover:bg-neon/10 px-8 py-6 text-lg w-full sm:w-auto">
              Read_Documentation()
            </Button>
          </div>
          <p className="mt-6 text-gray-500 text-sm">
            <span className="text-neon">WARNING:</span> Access granted only to those who understand digital responsibility.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
