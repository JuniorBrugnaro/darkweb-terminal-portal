
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Terminal, Code, Binary, Zap } from 'lucide-react';

const Features = () => {
  return (
    <section id="features" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">
            <span className="terminal">System_Capabilities</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Our toolkit offers unprecedented access to digital resources. Explore features designed for the curious minds who refuse to accept limitations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard 
            icon={<Terminal />}
            title="Secure_Terminal"
            description="Access command line interfaces with military-grade encryption. Leave no trace of your digital footprint."
          />
          <FeatureCard 
            icon={<Binary />}
            title="Binary_Decoder"
            description="Translate encrypted data streams into actionable intelligence. See what others can't."
          />
          <FeatureCard 
            icon={<Code />}
            title="Stealth_Scripts"
            description="Deploy autonomous scripts that operate below detection thresholds. Maximum impact, minimum visibility."
          />
          <FeatureCard 
            icon={<Zap />}
            title="Neural_Override"
            description="Bypass conventional security protocols using advanced algorithm manipulation techniques."
          />
          <FeatureCard 
            icon={<Terminal />}
            title="Root_Access"
            description="Gain privileged permissions to restricted system resources. The digital world becomes your playground."
          />
          <FeatureCard 
            icon={<Code />}
            title="Quantum_Cipher"
            description="Leverage quantum computing principles to encrypt your communications beyond conventional decryption capabilities."
          />
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <Card className="bg-darkgray/70 border-neon/30 hover:border-neon transition-colors duration-300">
    <CardHeader>
      <div className="w-12 h-12 rounded-full bg-neon/20 flex items-center justify-center mb-4">
        <span className="text-neon">{icon}</span>
      </div>
      <CardTitle className="text-white">{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-gray-400">{description}</p>
    </CardContent>
    <CardFooter>
      <p className="text-neon cursor-pointer hover:underline text-sm">Access_Documentation()</p>
    </CardFooter>
  </Card>
);

export default Features;
