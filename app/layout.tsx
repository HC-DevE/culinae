import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import { Toaster } from '@/components/ui/sonner';
import { ThemeProvider } from '@/components/ThemeProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Culinæ | Apprenez à cuisiner comme un chef',
  description: 'Découvrez des recettes exclusives et participez à des ateliers en direct avec des chefs experts. Rejoignez notre communauté de passionnés de cuisine.',
  openGraph: {
    title: 'Culinæ | Apprenez à cuisiner comme un chef',
    description: 'Découvrez des recettes exclusives et participez à des ateliers en direct avec des chefs experts.',
    images: ['/og-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Culinæ | Apprenez à cuisiner comme un chef',
    description: 'Découvrez des recettes exclusives et participez à des ateliers en direct avec des chefs experts.',
    images: ['/og-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Analytics />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}