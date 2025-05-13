
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react';

const Pricing = () => {
  const [isLoading, setIsLoading] = useState(false);
  
  const handleAccess = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  return (
    <section id="pricing" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">
            <span className="terminal">Access_Levels</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Choose your level of immersion in the digital underground. Each tier grants progressively deeper access to our system capabilities.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <PricingCard 
            title="Phantom"
            price="$0"
            description="Basic reconnaissance tools"
            features={[
              "Limited terminal access",
              "Public data scraping",
              "Basic encryption tools",
              "24-hour session limits"
            ]}
            buttonText="Access_Now()"
            buttonVariant="outline"
            onButtonClick={handleAccess}
            isLoading={isLoading}
          />
          
          <PricingCard 
            title="Shadow"
            price="$49"
            description="Enhanced digital capabilities"
            features={[
              "Full terminal access",
              "Advanced cryptography suite",
              "Stealth networking tools",
              "Data extraction modules",
              "Priority support channels"
            ]}
            buttonText="Upgrade_Access()"
            buttonVariant="default"
            popular={true}
            onButtonClick={handleAccess}
            isLoading={isLoading}
          />
          
          <PricingCard 
            title="Wraith"
            price="$99"
            description="Complete underground arsenal"
            features={[
              "Root-level system access",
              "Custom neural interfaces",
              "Quantum encryption protocols",
              "Anonymous routing infrastructure",
              "Unlimited compute resources",
              "Direct developer communication"
            ]}
            buttonText="Unlock_Maximum()"
            buttonVariant="outline"
            onButtonClick={handleAccess}
            isLoading={isLoading}
          />
        </div>
      </div>
    </section>
  );
};

interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  buttonText: string;
  buttonVariant: 'default' | 'outline';
  popular?: boolean;
  onButtonClick: () => void;
  isLoading: boolean;
}

const PricingCard = ({ 
  title, 
  price, 
  description, 
  features, 
  buttonText, 
  buttonVariant, 
  popular = false,
  onButtonClick,
  isLoading
}: PricingCardProps) => (
  <Card className={`bg-darkgray border-neon/30 ${popular ? 'border-neon ring-2 ring-neon/20' : ''}`}>
    {popular && (
      <div className="absolute top-0 right-0 transform translate-x-3 -translate-y-3 bg-neon text-black px-3 py-1 text-xs font-bold">
        RECOMMENDED
      </div>
    )}
    <CardHeader>
      <CardTitle className="text-2xl text-white">{title}</CardTitle>
      <div className="flex items-baseline mt-4">
        <span className="text-4xl font-bold text-white">{price}</span>
        <span className="ml-2 text-gray-400">/month</span>
      </div>
      <CardDescription className="text-gray-300 mt-2">{description}</CardDescription>
    </CardHeader>
    <CardContent>
      <ul className="space-y-3 text-sm">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <Check className="h-4 w-4 text-neon mr-2" />
            <span className="text-gray-300">{feature}</span>
          </li>
        ))}
      </ul>
    </CardContent>
    <CardFooter>
      <Button 
        className={`w-full ${buttonVariant === 'default' ? 'bg-neon hover:bg-neon/80 text-white' : 'border-neon text-neon hover:bg-neon/10'}`}
        onClick={onButtonClick}
        disabled={isLoading}
      >
        {isLoading ? (
          <div className="flex items-center">
            <span className="animate-pulse mr-2">...</span>
            <span>Processing</span>
          </div>
        ) : buttonText}
      </Button>
    </CardFooter>
  </Card>
);

export default Pricing;
