import React from 'react';
import { Instagram, Facebook, Twitter, Mail, MapPin, Phone } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-background text-foreground py-20 border-t border-border">
      <div className="container mx-auto px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="space-y-8">
            <h3 className="text-2xl font-heading tracking-[4px] uppercase font-light">
              BD <span className="text-gold">LUXURY</span>
            </h3>
            <p className="text-[12px] text-muted-foreground leading-relaxed max-w-xs tracking-[1px]">
              Defining elegance through the art of fine perfumery. Exclusive scents 
              for those who appreciate the finer things in life.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-muted-foreground hover:text-gold transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-gold transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-gold transition-colors">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[3px] mb-10 text-gold">Collection</h4>
            <ul className="space-y-5 text-[11px] text-muted-foreground uppercase tracking-[2px]">
              <li><a href="#" className="hover:text-foreground transition-colors">All Fragrances</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Best Sellers</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Discovery Set</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Home Fragrance</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[3px] mb-10 text-gold">The House</h4>
            <ul className="space-y-5 text-[11px] text-muted-foreground uppercase tracking-[2px]">
              <li><a href="#" className="hover:text-foreground transition-colors">Our Story</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Atelier</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Sustainability</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Bespoke</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[3px] mb-10 text-gold">Concierge</h4>
            <ul className="space-y-5 text-[11px] text-muted-foreground uppercase tracking-[1px]">
              <li className="flex items-start space-x-3">
                <MapPin size={16} className="text-gold shrink-0" />
                <span>123 Avenue des Parfums, Paris</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={16} className="text-gold shrink-0" />
                <span>+33 1 23 45 67 89</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={16} className="text-gold shrink-0" />
                <span>concierge@bdluxury.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] uppercase tracking-[1px] text-muted-foreground">
            © 2024 BD LUXURY SCENT CO. ALL RIGHTS RESERVED.
          </p>
          <div className="flex items-center space-x-8 text-[10px] uppercase tracking-[2px] text-muted-foreground">
            <span>ESTABLISHED IN GRASSE</span>
            <div className="w-[1px] h-10 bg-gold" />
          </div>
        </div>
      </div>
    </footer>
  );
};
