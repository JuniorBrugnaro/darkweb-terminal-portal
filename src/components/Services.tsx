
import React from 'react';
import { Terminal, Code, Binary } from 'lucide-react';

const Services = () => {
  return (
    <section id="services" className="py-20 bg-darkgray/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">
            <span className="terminal">Core_Services</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore our specialized digital tools designed for those who seek knowledge beyond conventional boundaries.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <ServiceCard 
            icon={<Terminal />}
            title="Secure_Access"
            description="Gain entry to restricted networks with our proprietary tunneling protocols. Anonymity guaranteed."
          />
          <ServiceCard 
            icon={<Code />}
            title="Data_Extraction"
            description="Extract valuable intelligence from various sources using advanced algorithms and pattern recognition."
          />
          <ServiceCard 
            icon={<Binary />}
            title="System_Integration"
            description="Seamlessly integrate our tools with your existing infrastructure for enhanced capabilities."
          />
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-neon inline-block border border-neon/30 bg-black/50 px-4 py-2 rounded-md">
            <span className="animate-blink">▌</span> All services include end-to-end encryption and leave no digital footprint
          </p>
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <div className="text-center">
    <div className="w-16 h-16 rounded-full bg-neon/20 flex items-center justify-center mx-auto mb-6">
      <span className="text-neon">{icon}</span>
    </div>
    <h3 className="text-white text-xl font-bold mb-4">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);

export default Services;
