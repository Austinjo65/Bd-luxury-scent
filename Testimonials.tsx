import React from 'react';
import { motion } from 'motion/react';
import { REVIEWS } from '../constants';
import { Star } from 'lucide-react';

export const Testimonials = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-[10px] uppercase tracking-[4px] text-gold mb-4 block">
            Voices of Elegance
          </span>
          <h2 className="text-4xl md:text-6xl font-heading font-light">Client Experiences</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {REVIEWS.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-secondary p-12 text-center flex flex-col items-center border border-border"
            >
              <div className="flex space-x-2 mb-8">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={12}
                    className={i < review.rating ? 'fill-gold text-gold' : 'text-muted-foreground'}
                  />
                ))}
              </div>
              <p className="text-xl italic font-heading mb-10 leading-relaxed font-light">
                "{review.comment}"
              </p>
              <div className="mt-auto">
                <p className="text-[11px] uppercase tracking-[3px] font-medium mb-2">
                  {review.author}
                </p>
                <p className="text-[9px] uppercase tracking-[2px] text-muted-foreground">
                  Verified Connoisseur
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
