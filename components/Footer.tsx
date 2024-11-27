import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import Link from 'next/link';
import { Newsletter } from './Newsletter';

export function Footer() {
  return (
    <footer className="bg-secondary py-12">
      {/* <Newsletter /> */}
      <div className="container mx-auto px-4 mb-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-semibold mb-4">À propos</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-muted-foreground hover:text-primary">Notre histoire</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary">Nos chefs</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary">Blog</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary">Carrières</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-muted-foreground hover:text-primary">FAQ</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary">Contact</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary">Aide</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Légal</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-muted-foreground hover:text-primary">Mentions légales</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary">Confidentialité</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary">CGU</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Suivez-nous</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <Newsletter />

        <div className="border-t pt-8 text-center text-muted-foreground">
          <p>© {new Date().getFullYear()} Culinæ. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}