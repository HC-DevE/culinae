import { ChefHat } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function Header() {
  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ChefHat className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold">Culinæ</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#" className="text-sm font-medium hover:text-primary transition-colors">
              Accueil
            </Link>
            <Link href="#features" className="text-sm font-medium hover:text-primary transition-colors">
              Fonctionnalités
            </Link>
            <Link href="#pricing" className="text-sm font-medium hover:text-primary transition-colors">
              Tarifs
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>
          
          <Button size="lg" className="hidden md:inline-flex">
            Rejoindre maintenant
          </Button>
          
          <Button variant="outline" size="icon" className="md:hidden">
            <span className="sr-only">Menu</span>
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </Button>
        </div>
      </div>
    </header>
  );
}