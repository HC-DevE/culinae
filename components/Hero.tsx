'use client';

import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section className="pt-32 pb-24 bg-gradient-to-b from-primary/5 to-transparent">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl font-bold leading-tight mb-6">
              Apprenez à cuisiner <span className="text-primary">comme un chef !</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Des recettes uniques, des ateliers interactifs, pour amateurs et professionnels.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="w-full sm:w-auto">
                Essayer gratuitement
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                Découvrir nos fonctionnalités
              </Button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80"
              alt="Chef en action"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}