import React from 'react';
import { motion } from 'motion/react';
import { PRODUCTS } from '../constants';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { ShoppingBag, Heart } from 'lucide-react';

export const ProductGrid = () => {
  return (
    <section id="collection" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div>
            <span className="text-[10px] uppercase tracking-[4px] text-gold mb-4 block">
              The Collection
            </span>
            <h2 className="text-4xl md:text-6xl font-heading font-light">Signature Scents</h2>
          </div>
          <div className="flex gap-10 border-b border-border pb-4">
            {['All', 'Floral', 'Woody', 'Oriental', 'Fresh'].map((cat) => (
              <button
                key={cat}
                className={`text-[11px] uppercase tracking-[2px] transition-colors ${
                  cat === 'All' ? 'text-gold' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          {PRODUCTS.length > 0 ? (
            PRODUCTS.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="group border-none bg-transparent overflow-hidden rounded-none">
                  <CardContent className="p-0">
                    <div className="relative aspect-[4/5] overflow-hidden bg-secondary border border-border">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                        referrerPolicy="no-referrer"
                      />
                      {product.isFeatured && (
                        <Badge className="absolute top-6 left-6 bg-gold text-white border-none rounded-none uppercase text-[9px] tracking-[3px] px-4 py-1.5">
                          Limited
                        </Badge>
                      )}
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-6">
                        <button className="w-14 h-14 rounded-full border border-white/30 bg-black/20 backdrop-blur-sm text-white flex items-center justify-center hover:bg-gold hover:border-gold transition-all duration-300">
                          <ShoppingBag size={20} />
                        </button>
                        <button className="w-14 h-14 rounded-full border border-white/30 bg-black/20 backdrop-blur-sm text-white flex items-center justify-center hover:bg-gold hover:border-gold transition-all duration-300">
                          <Heart size={20} />
                        </button>
                      </div>
                    </div>
                    <div className="pt-8 text-center">
                      <span className="text-[9px] uppercase tracking-[3px] text-muted-foreground mb-3 block">
                        {product.category}
                      </span>
                      <h3 className="text-2xl font-heading mb-3 group-hover:text-gold transition-colors font-light">
                        {product.name}
                      </h3>
                      <p className="text-[13px] text-muted-foreground mb-6 line-clamp-1 px-6 tracking-[0.5px]">
                        {product.description}
                      </p>
                      <span className="text-xl font-heading tracking-[2px] text-gold">
                        {product.currency || '$'}{product.price.toLocaleString()}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))
          ) : (
            <div className="col-span-full py-20 text-center border border-dashed border-border">
              <p className="text-[11px] uppercase tracking-[4px] text-muted-foreground">
                New Collection Arriving Soon
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
