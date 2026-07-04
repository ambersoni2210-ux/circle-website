import type { Metadata, Viewport } from 'next';
import { Inter, Fraunces } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CartDrawer from '@/components/CartDrawer';
import IntroAnimation from '@/components/IntroAnimation';
import { CartProvider } from '@/context/CartContext';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
  axes: ['opsz'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.getcircle.in'),
  title: {
    default: 'Circle — Merchandise That Carries Belonging',
    template: '%s | Circle',
  },
  description:
    'Circle builds premium merchandise and custom branded stores for colleges, companies, teams, alumni groups and communities across India.',
  openGraph: {
    title: 'Circle — Merchandise That Carries Belonging',
    description:
      'Premium merchandise and custom branded stores for communities, campuses, companies and teams.',
    url: 'https://www.getcircle.in',
    siteName: 'Circle',
    images: [{ url: '/images/svg/scene-hero.svg', width: 1800, height: 1100, alt: 'Circle merchandise brand visual' }],
    locale: 'en_IN',
    type: 'website',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#0A0A0A',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable}`}>
      <body>
        <IntroAnimation />
        <a href="#main" className="skip-link">Skip to content</a>
        <CartProvider>
          <Navbar />
          <CartDrawer />
          <main id="main">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
