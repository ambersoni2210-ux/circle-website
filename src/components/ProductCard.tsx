'use client';

import { Product } from '@/data/products';
import { useCart } from '@/context/CartContext';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart();

  return (
    <div className="group">
      {/* Image */}
      <div className="relative aspect-[3/4] bg-gray-50 overflow-hidden mb-4">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Badge */}
        {product.badge && (
          <span className="absolute top-3 left-3 px-3 py-1 bg-black text-white text-[10px] tracking-widest uppercase">
            {product.badge}
          </span>
        )}
        {/* Quick Add */}
        <button
          onClick={() => addItem(product, product.sizes?.[1], product.colors?.[0])}
          className="absolute bottom-0 left-0 right-0 bg-black text-white text-xs tracking-[0.2em] uppercase py-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 hover:bg-gray-900"
        >
          Add to Cart
        </button>
      </div>

      {/* Info */}
      <div className="space-y-1">
        <h3 className="text-sm font-medium">{product.name}</h3>
        <p className="text-sm text-gray-500">
          &#8377;{product.price.toLocaleString('en-IN')}
        </p>
      </div>
    </div>
  );
}
