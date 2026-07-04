import type { Metadata, Viewport } from 'next';
import { Outfit, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CartDrawer from '@/components/CartDrawer';
import IntroAnimation from '@/components/IntroAnimation';
import { CartProvider } from '@/context/CartContext';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-space',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.getcircle.in'),
  title: {
    default: 'Circle | Custom Merchandise and Branded Stores in India',
    template: '%s | Circle',
  },
  description:
    'Create premium custom merchandise and branded stores for colleges, companies, sports teams, events, alumni groups and communities across India.',
  openGraph: {
    title: 'Circle | Merchandise That Carries Belonging',
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
    <html lang="en" className={`${plusJakarta.variable} ${outfit.variable}`}>
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
