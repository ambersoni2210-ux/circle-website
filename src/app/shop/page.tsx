import type { Metadata } from 'next';
import ShopClient from '@/components/ShopClient';

export const metadata: Metadata = {
  title: 'Products',
  description: 'Explore custom merchandise products including hoodies, T-shirts, jerseys, bottles, bags, stationery, kits, uniforms and gifting products.',
};

export default function ShopPage() {
  return (
    <div className="bg-circle-cream pt-24 sm:pt-28">
      <section className="container-c pb-10 pt-10 sm:pb-14 sm:pt-16">
        <p className="kicker text-black/45">Custom merchandise for communities across India</p>
        <h1 className="display-lg mt-4 max-w-6xl">Useful first. Branded second. Worth keeping.</h1>
        <p className="mt-6 max-w-2xl text-lg leading-9 text-black/62">
          The best merchandise fits into real life. It is worn to class, used at work, carried to events, taken to practice, gifted with pride and kept as a memory. Explore apparel, drinkware, stationery, bags, accessories, sportswear, uniforms and gifting products.
        </p>
      </section>
      <section className="container-c pb-20 sm:pb-28">
        <ShopClient />
      </section>
    </div>
  );
}
