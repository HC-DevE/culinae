'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';

export function Newsletter() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {

      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      console.log({response});

      if (!response.ok) {
        throw new Error(data.error || 'Une erreur est survenue');
      }

      toast.success('Merci de votre inscription !');
      setEmail('');
    } catch (error) {
      console.error('Newsletter subscription error:', error);
      toast.error(error instanceof Error ? error.message : 'Une erreur est survenue. Veuillez réessayer.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Rejoignez notre communauté !</h2>
          <p className="text-primary-foreground/80 mb-8">
            Recevez nos meilleures recettes et des invitations exclusives à nos événements.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
            <Input
              type="email"
              placeholder="Votre adresse email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
            />
            <Button variant="secondary" type="submit" disabled={loading}>
              {loading ? 'Inscription...' : 'S\'inscrire'}
            </Button>
          </form>
          
          <p className="text-sm text-primary-foreground/60 mt-4">
            En vous inscrivant, vous acceptez notre politique de confidentialité et de recevoir nos communications par email.
          </p>
        </div>
      </div>
    </section>
  );
}