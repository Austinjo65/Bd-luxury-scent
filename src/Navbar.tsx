import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X, Search, User } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Collection', href: '#collection' },
    { name: 'Our Story', href: '#about' },
    { name: 'Bespoke', href: '#bespoke' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-background/90 backdrop-blur-md border-b py-6' : 'bg-transparent py-10'
      }`}
    >
      <div className="container mx-auto px-10 flex items-center justify-between">
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.slice(0, 2).map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[11px] uppercase tracking-[2px] text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        <a href="/" className="text-2xl font-heading tracking-[4px] uppercase font-light">
          BD <span className="text-gold">LUXURY</span>
        </a>

        <div className="hidden md:flex items-center space-x-10">
          {navLinks.slice(2).map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[11px] uppercase tracking-[2px] text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="flex items-center space-x-6 ml-6 border-l border-border pl-6">
            <button className="hover:text-gold transition-colors text-muted-foreground">
              <Search size={16} />
            </button>
            <button className="hover:text-gold transition-colors text-muted-foreground relative">
              <ShoppingBag size={16} />
              <span className="text-[10px] uppercase tracking-[1px] ml-2">Cart (0)</span>
            </button>
          </div>
        </div>

        <div className="md:hidden flex items-center space-x-4">
          <button className="hover:text-gold transition-colors">
            <ShoppingBag size={20} />
          </button>
          <Sheet>
            <SheetTrigger className="hover:text-gold transition-colors">
              <Menu size={24} />
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-background">
              <div className="flex flex-col space-y-8 mt-12">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-xl font-heading uppercase tracking-widest hover:text-gold transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
                <div className="pt-8 border-t flex flex-col space-y-4">
                  <a href="#" className="flex items-center space-x-2 text-sm uppercase tracking-widest">
                    <User size={18} />
                    <span>Account</span>
                  </a>
                  <a href="#" className="flex items-center space-x-2 text-sm uppercase tracking-widest">
                    <Search size={18} />
                    <span>Search</span>
                  </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};
