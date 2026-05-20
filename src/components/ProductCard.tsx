'use client';

import { Product } from '@/data/products';
import { useCart } from '@/context/CartContext';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart();

  return (
    <article className="group h-full min-w-0">
      {/* Image */}
      <div className="relative mb-4 aspect-[3/4] overflow-hidden bg-gray-50">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {product.badge && (
          <span className="absolute left-3 top-3 bg-black px-3 py-1 text-[10px] uppercase tracking-widest text-white">
            {product.badge}
          </span>
        )}
        <button
          type="button"
          onClick={() => addItem(product, product.sizes?.[1], product.colors?.[0])}
          className="absolute bottom-0 left-0 right-0 min-h-11 bg-black py-3.5 text-xs uppercase tracking-[0.18em] text-white transition-all duration-300 hover:bg-gray-900 active:bg-gray-800 md:translate-y-full md:group-hover:translate-y-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-white"
        >
          Add to Cart
        </button>
      </div>

      {/* Info */}
      <div className="min-w-0 space-y-1 pr-1">
        <h3 className="truncate text-sm font-medium leading-6">{product.name}</h3>
        <p className="text-sm text-gray-500">
          &#8377;{product.price.toLocaleString('en-IN')}
        </p>
      </div>
    </article>
  );
}
