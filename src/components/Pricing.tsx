
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
            <span className="terminal">Esse é o conteúdo que ninguém tem coragem de vender</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Mentoria direta com um traficante de tráfego pago real, o Lek do Black.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Card className="bg-darkgray border-neon/30 border-neon ring-2 ring-neon/20 mb-8">
            <CardHeader>
              <CardTitle className="text-2xl text-white">Tu vai acessar o conteúdo que ensina:</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-neon mr-2" />
                  <span className="text-gray-300">Como usar cloaker sem tomar no cu</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-neon mr-2" />
                  <span className="text-gray-300">Estratégias de contingência que fazem até o Zuck chorar</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-neon mr-2" />
                  <span className="text-gray-300">Copy que vende até golpe do pix</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <div className="text-gray-300 text-sm">
                🤐 Esse link era pago. Agora é teu... por tempo <span className="text-neon font-bold">LIMITADO</span>.
              </div>
            </CardFooter>
          </Card>
          
          <div className="flex justify-center">
            <Button 
              className="bg-neon hover:bg-neon/80 text-white px-12 py-8 text-xl w-full sm:w-auto"
              onClick={handleAccess}
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="flex items-center">
                  <span className="animate-pulse mr-2">...</span>
                  <span>Processando</span>
                </div>
              ) : (
                <>👉 QUERO ENTRAR NESSE INFERNO VIP 👈</>
              )}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
