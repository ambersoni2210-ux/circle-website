import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ProductCard from '@/components/ProductCard';
import ProductConfigurator from '@/components/ProductConfigurator';
import { getProductBySlug, getRelatedProducts, products } from '@/data/products';

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

type ProductPageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: 'Product' };
  return {
    title: product.name,
    description: product.description,
    openGraph: {
      title: `${product.name} | Circle`,
      description: product.description,
      images: [{ url: product.image, alt: product.name }],
    },
  };
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();
  const related = getRelatedProducts(product, 4);

  return (
    <div className="bg-circle-cream pt-24 sm:pt-28">
      <section className="container-c py-10 sm:py-16">
        <Link href="/shop" className="mb-7 inline-flex text-sm font-semibold text-black/52 transition hover:text-black">← Back to shop</Link>
        <div className="grid gap-8 lg:grid-cols-[1.05fr_.95fr] lg:gap-14">
          <div className="grid gap-4 sm:grid-cols-2">
            {product.images.map((image, index) => (
              <div key={`${image}-${index}`} className={`relative overflow-hidden rounded-[2rem] bg-white shadow-[0_1px_0_rgba(0,0,0,0.05)] ${index === 0 ? 'aspect-[4/5] sm:col-span-2 lg:col-span-2' : 'aspect-square'}`}>
                <Image src={image} alt={`${product.name} view ${index + 1}`} fill priority={index === 0} sizes="(max-width: 1024px) 100vw, 55vw" className="object-cover" />
              </div>
            ))}
          </div>

          <div className="lg:sticky lg:top-28 lg:h-fit">
            <ProductConfigurator product={product} />
          </div>
        </div>
      </section>

      <section className="container-c pb-16 sm:pb-24">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {[
            ['Material', product.material],
            ['Customization', product.placements.join(', ')],
            ['Best for', product.bestFor.join(', ')],
            ['Care', product.care],
            ['Bulk notes', product.bulkNotes],
          ].map(([title, text]) => (
            <div key={title} className="rounded-[2rem] bg-white p-6">
              <p className="kicker text-black/42">{title}</p>
              <p className="mt-4 text-sm leading-6 text-black/62">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {related.length > 0 && (
        <section className="bg-white py-16 sm:py-24">
          <div className="container-c">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="kicker text-black/42">Related products</p>
                <h2 className="display-md mt-4">Build the full kit.</h2>
              </div>
              <Link href="/shop" className="dark-magnetic magnetic-btn inline-flex min-h-12 items-center justify-center rounded-full border border-black/10 px-6 text-xs font-bold uppercase tracking-[0.2em]">View shop</Link>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-5 min-[520px]:grid-cols-2 lg:grid-cols-4">
              {related.map((item) => <ProductCard key={item.id} product={item} />)}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
