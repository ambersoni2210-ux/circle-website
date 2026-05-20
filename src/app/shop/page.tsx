import type { Metadata } from 'next';
import ShopClient from '@/components/ShopClient';

export const metadata: Metadata = {
  title: 'Shop',
  description: 'Explore Circle products for custom campus stores, company stores, sports teams and community merchandise.',
};

export default function ShopPage() {
  return (
    <div className="bg-circle-cream pt-24 sm:pt-28">
      <section className="container-c pb-10 pt-10 sm:pb-14 sm:pt-16">
        <p className="kicker text-black/42">Circle product universe</p>
        <h1 className="display-lg mt-4 max-w-6xl">Products people will actually keep using.</h1>
        <p className="mt-6 max-w-2xl text-lg leading-9 text-black/62">
          Browse apparel, drinkware, stationery, bags, sportswear and accessories for custom stores, bulk orders, vouchers and community drops.
        </p>
      </section>
      <section className="container-c pb-20 sm:pb-28">
        <ShopClient />
      </section>
    </div>
  );
}
