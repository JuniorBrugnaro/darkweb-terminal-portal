
import React from 'react';
import { Button } from '@/components/ui/button';

const CTA = () => {
  return (
    <section className="py-20 bg-black binary-bg">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white glitch" data-text="🔥 Ele humilha, ensina e entrega">
            🔥 Ele humilha, ensina e entrega
          </h2>
          <p className="text-gray-300 mb-8 text-lg">
            💀 Zero filtro. 100% underground. 0% mimimi.<br />
            💸 Quer ver com os próprios olhos o que esse demônio do marketing tá fazendo?
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button className="bg-neon hover:bg-neon/80 text-white px-8 py-6 text-lg w-full sm:w-auto">
              QUERO ENTRAR NESSE INFERNO VIP
            </Button>
          </div>
          <p className="mt-6 text-gray-500 text-sm">
            <span className="text-neon">AVISO:</span> 🔒 O acesso é restrito e pode sair do ar a qualquer momento.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
