
import React from 'react';
import { Terminal } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-neon/30 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center mb-4 md:mb-0">
            <Terminal className="h-6 w-6 text-neon mr-2" />
            <span className="text-neon font-bold text-xl">DARK_NET</span>
          </div>
          
          <div className="flex space-x-8">
            <FooterLink href="#services">Services</FooterLink>
            <FooterLink href="#features">Features</FooterLink>
            <FooterLink href="#testimonials">Intel</FooterLink>
            <FooterLink href="#pricing">Access</FooterLink>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} DARK_NET Systems. All rights reserved.
          </p>
          
          <div className="flex space-x-4">
            <span className="text-gray-500 hover:text-neon cursor-pointer terminal">Privacy_Policy()</span>
            <span className="text-gray-500 hover:text-neon cursor-pointer terminal">Terms_Of_Use()</span>
            <span className="text-gray-500 hover:text-neon cursor-pointer terminal">Security()</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterLink = ({ href, children }: { href: string, children: React.ReactNode }) => (
  <a href={href} className="text-gray-400 hover:text-neon transition-colors duration-300">
    {children}
  </a>
);

export default Footer;
