
import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Features from '@/components/Features';
import Testimonials from '@/components/Testimonials';
import Pricing from '@/components/Pricing';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import { useToast } from '@/components/ui/use-toast';

const Index = () => {
  const [isInitializing, setIsInitializing] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    // Simulate initialization process
    const timer = setTimeout(() => {
      setIsInitializing(false);
      toast({
        title: "Connection Secure",
        description: "End-to-end encryption enabled. Your session is now protected.",
        className: "bg-darkgray border-neon text-white",
      });
    }, 2000);

    return () => clearTimeout(timer);
  }, [toast]);

  if (isInitializing) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black p-4">
        <div className="text-center">
          <h2 className="text-neon mb-4 text-xl">Initializing Secure Environment...</h2>
          <div className="w-64 h-2 bg-darkgray rounded-full mb-8 overflow-hidden">
            <div className="h-full bg-neon rounded-full animate-loading"></div>
          </div>
          <p className="text-gray-400 text-sm">Establishing encrypted connection</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white font-mono">
      <Header />
      <Hero />
      <Services />
      <Features />
      <Testimonials />
      <Pricing />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
