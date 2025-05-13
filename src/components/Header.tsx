
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Terminal, Code, Binary } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-black border-b border-neon/30 py-4">
      <div className="container mx-auto flex items-center justify-between px-4">
        <div className="flex items-center">
          <Terminal className="h-6 w-6 text-neon mr-2" />
          <span className="text-neon font-bold text-xl">DARK_NET</span>
        </div>
        
        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          <Code className="h-6 w-6" />
        </button>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink href="#services">Services</NavLink>
          <NavLink href="#features">Features</NavLink>
          <NavLink href="#testimonials">Intel</NavLink>
          <NavLink href="#pricing">Access</NavLink>
          <Button className="bg-neon hover:bg-neon/80 text-white">Enter_System()</Button>
        </nav>
        
        {/* Mobile Navigation */}
        {isOpen && (
          <div className="absolute top-16 left-0 right-0 bg-black border-b border-neon/30 p-4 md:hidden">
            <nav className="flex flex-col space-y-4">
              <NavLink href="#services" onClick={() => setIsOpen(false)}>Services</NavLink>
              <NavLink href="#features" onClick={() => setIsOpen(false)}>Features</NavLink>
              <NavLink href="#testimonials" onClick={() => setIsOpen(false)}>Intel</NavLink>
              <NavLink href="#pricing" onClick={() => setIsOpen(false)}>Access</NavLink>
              <Button className="bg-neon hover:bg-neon/80 text-white w-full">Enter_System()</Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

const NavLink = ({ href, children, onClick }: { href: string, children: React.ReactNode, onClick?: () => void }) => (
  <a 
    href={href} 
    onClick={onClick}
    className="text-gray-300 hover:text-neon transition-colors duration-300 border-b border-transparent hover:border-neon terminal"
  >
    {children}
  </a>
);

export default Header;
