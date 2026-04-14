import React from 'react';
import { motion } from 'motion/react';

export const About = () => {
  return (
    <section id="about" className="py-24 bg-secondary overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[3/4] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80&w=1000"
                alt="Perfume Creation"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-background p-8 hidden md:block">
              <p className="text-xs uppercase tracking-[0.2em] text-gold mb-4">Our Philosophy</p>
              <p className="text-sm italic font-heading leading-relaxed">
                "Fragrance is the most intense form of memory. It is a story told in scent, 
                a silent language that speaks of who we are and where we have been."
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[10px] uppercase tracking-[4px] text-gold mb-6 block">
              The House of BD
            </span>
            <h2 className="text-4xl md:text-6xl font-heading mb-10 leading-[1.1] font-light">
              Crafting Memories <br />
              <span className="italic">One Note</span> at a Time
            </h2>
            <div className="space-y-8 text-muted-foreground leading-[1.8] tracking-[0.5px] text-[15px] font-light">
              <p>
                Founded in the heart of the fragrance capital, BD Luxury Scent was born from 
                a passion for the olfactory arts. We believe that a perfume is more than just 
                a scent; it is an extension of one's identity.
              </p>
              <p>
                Our master perfumers source the rarest essences from across the globe—from 
                the rose fields of Grasse to the sandalwood forests of Mysore. Each bottle 
                is a testament to our commitment to quality, sustainability, and the 
                timeless traditions of fine perfumery.
              </p>
            </div>
            <div className="mt-16 grid grid-cols-3 gap-10 border-t border-border pt-10">
              <div>
                <p className="text-3xl font-heading text-foreground font-light">100%</p>
                <p className="text-[9px] uppercase tracking-[2px] text-muted-foreground mt-2">Natural Essences</p>
              </div>
              <div>
                <p className="text-3xl font-heading text-foreground font-light">24h+</p>
                <p className="text-[9px] uppercase tracking-[2px] text-muted-foreground mt-2">Longevity</p>
              </div>
              <div>
                <p className="text-3xl font-heading text-foreground font-light">Grasse</p>
                <p className="text-[9px] uppercase tracking-[2px] text-muted-foreground mt-2">Heritage</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
