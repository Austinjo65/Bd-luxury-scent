import React from 'react';
import { motion } from 'motion/react';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1616949755610-8c9bbc08f138?auto=format&fit=crop&q=80&w=2000"
          alt="Luxury Perfume"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="container mx-auto px-10 relative z-10 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <span className="text-[10px] uppercase tracking-[4px] mb-6 block text-gold">
            Limited Edition Collection
          </span>
          <h1 className="text-6xl md:text-8xl font-heading mb-8 leading-[1.1] tracking-tight font-light">
            Noir <br />
            <span className="italic">D'Or</span>
          </h1>
          <p className="max-w-xl mx-auto text-sm md:text-base text-muted-foreground mb-12 font-light tracking-[1px] leading-[1.8]">
            An enigmatic fusion of midnight jasmine and rare agarwood. Noir D'Or captures the essence of Parisian nights, evolving on the skin to reveal a deep, golden heart.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button
              size="lg"
              className="bg-transparent border border-white text-white hover:bg-white hover:text-black px-12 py-8 text-[12px] uppercase tracking-[3px] transition-all duration-500 rounded-none"
            >
              Acquire Essence
            </Button>
            <a href="#collection" className="text-[10px] uppercase tracking-[2px] text-muted-foreground hover:text-white transition-colors underline underline-offset-4">
              Discover the Story
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-4"
      >
        <span className="text-[9px] uppercase tracking-[2px] text-muted-foreground">Scroll</span>
        <div className="w-[1px] h-10 bg-gold" />
      </motion.div>
    </section>
  );
};
