import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProductGrid } from './components/ProductGrid';
import { About } from './components/About';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';
import { motion, useScroll, useSpring } from 'motion/react';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen selection:bg-gold selection:text-white">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-gold z-[60] origin-left"
        style={{ scaleX }}
      />

      <Navbar />
      
      <main>
        <Hero />
        
        {/* Featured Quote Section */}
        <section className="py-24 bg-background border-y border-gold/10">
          <div className="container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <h2 className="text-3xl md:text-5xl font-heading italic max-w-4xl mx-auto leading-tight">
                "A woman's perfume tells more about her than her handwriting."
              </h2>
              <p className="mt-8 text-xs uppercase tracking-[0.4em] text-gold">— Christian Dior</p>
            </motion.div>
          </div>
        </section>

        <ProductGrid />
        <About />
        
        {/* Newsletter Section */}
        <section className="py-32 bg-secondary text-foreground relative overflow-hidden border-y border-border">
          <div className="container mx-auto px-10 relative z-10 text-center">
            <span className="text-[10px] uppercase tracking-[4px] text-gold mb-8 block">
              The Inner Circle
            </span>
            <h2 className="text-4xl md:text-6xl font-heading mb-10 font-light">Exclusive Access</h2>
            <p className="max-w-xl mx-auto text-muted-foreground mb-12 tracking-[1px] font-light leading-[1.8]">
              Subscribe to receive early access to new collections, private events, 
              and olfactory insights from our master perfumers.
            </p>
            <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-6">
              <input
                type="email"
                placeholder="YOUR EMAIL ADDRESS"
                className="flex-1 bg-transparent border-b border-border py-4 text-[11px] uppercase tracking-[2px] focus:border-gold outline-none transition-colors"
                required
              />
              <button
                type="submit"
                className="bg-transparent border border-foreground hover:bg-foreground hover:text-background text-foreground px-10 py-4 text-[11px] uppercase tracking-[2px] transition-all duration-500"
              >
                Subscribe
              </button>
            </form>
          </div>
        </section>

        <Testimonials />
      </main>

      <Footer />
    </div>
  );
}
