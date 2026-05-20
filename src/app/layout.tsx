import type { Metadata, Viewport } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CartDrawer from '@/components/CartDrawer';
import { CartProvider } from '@/context/CartContext';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.getcircle.in'),
  title: {
    default: 'Circle — Merchandise That Carries Belonging',
    template: '%s | Circle',
  },
  description: 'Circle builds premium merchandise and custom branded stores for colleges, companies, teams, alumni groups and communities.',
  openGraph: {
    title: 'Circle — Merchandise That Carries Belonging',
    description: 'Premium merchandise and custom branded stores for communities, campuses, companies and teams.',
    url: 'https://www.getcircle.in',
    siteName: 'Circle',
    images: [{ url: '/images/hero-belonging.webp', width: 1800, height: 1080, alt: 'Circle merchandise brand visual' }],
    locale: 'en_IN',
    type: 'website',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#050505',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <Navbar />
          <CartDrawer />
          <main>{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
