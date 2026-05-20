export interface Product {
  id: string;
  name: string;
  price: number;
  category: 'tshirts' | 'hoodies' | 'caps' | 'bottles' | 'bags';
  image: string;
  description: string;
  sizes?: string[];
  colors?: string[];
  badge?: string;
}

export const products: Product[] = [
  // T-Shirts
  {
    id: 'ts-001',
    name: 'Classic Circle Tee',
    price: 699,
    category: 'tshirts',
    image: 'https://images.unsplash.com/photo-1523398002811-999ca8dec234?w=600&h=700&fit=crop&q=80',
    description: 'Premium cotton crew-neck tee with a clean Circle mark. Relaxed fit for everyday wear.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['White', 'Black'],
    badge: 'Bestseller',
  },
  {
    id: 'ts-002',
    name: 'Vintage Oversize Tee',
    price: 799,
    category: 'tshirts',
    image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=600&h=700&fit=crop&q=80',
    description: 'Washed cotton oversized tee with a soft, lived-in feel and bold everyday attitude.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'Charcoal'],
  },
  {
    id: 'ts-003',
    name: 'Minimal Logo Tee',
    price: 599,
    category: 'tshirts',
    image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&h=700&fit=crop&q=80',
    description: 'Clean minimal tee with subtle branding and a soft 100% cotton hand-feel.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['White', 'Cream', 'Black'],
  },
  {
    id: 'ts-004',
    name: 'Heritage Stripe Tee',
    price: 899,
    category: 'tshirts',
    image: 'https://images.unsplash.com/photo-1562157873-818bc0726f68?w=600&h=700&fit=crop&q=80',
    description: 'Contrast striped tee with a woven detail. Heavy-weight cotton jersey with a sharp silhouette.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Navy/White', 'Black/Grey'],
    badge: 'New',
  },
  // Hoodies
  {
    id: 'hd-001',
    name: 'Essential Circle Hoodie',
    price: 1499,
    category: 'hoodies',
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&h=700&fit=crop&q=80',
    description: 'Heavyweight fleece hoodie with understated Circle detailing. Built for comfort, warmth, and repeat wear.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'Grey', 'Navy'],
    badge: 'Bestseller',
  },
  {
    id: 'hd-002',
    name: 'Premium Zip-Up Hoodie',
    price: 1799,
    category: 'hoodies',
    image: 'https://images.unsplash.com/photo-1578768079470-62f67e7a44e7?w=600&h=700&fit=crop&q=80',
    description: 'Full-zip hoodie in brushed French terry with tonal branding and premium hardware.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'Heather Grey'],
    badge: 'Premium',
  },
  {
    id: 'hd-003',
    name: 'Varsity Pullover',
    price: 1599,
    category: 'hoodies',
    image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=600&h=700&fit=crop&q=80',
    description: 'Vintage-inspired pullover with a structured oversized fit and bold graphic presence.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'Burgundy'],
  },
  // Caps
  {
    id: 'cp-001',
    name: 'Classic Dad Cap',
    price: 499,
    category: 'caps',
    image: 'https://images.unsplash.com/photo-1588850561407-ed78c334e67a?w=600&h=700&fit=crop&q=80',
    description: 'Unstructured six-panel cap with embroidered Circle mark and adjustable brass buckle.',
    colors: ['Black', 'Navy', 'White'],
    badge: 'Popular',
  },
  {
    id: 'cp-002',
    name: 'Snapback Pro Cap',
    price: 699,
    category: 'caps',
    image: 'https://images.unsplash.com/photo-1575428652377-a2d80e2277fc?w=600&h=700&fit=crop&q=80',
    description: 'Structured flat-brim snapback with a clean profile and premium wool-blend finish.',
    colors: ['Black', 'Black/Red'],
  },
  {
    id: 'cp-003',
    name: 'Minimal Beanie',
    price: 599,
    category: 'caps',
    image: 'https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?w=600&h=700&fit=crop&q=80',
    description: 'Ribbed-knit beanie with a subtle woven label and soft everyday texture.',
    colors: ['Black', 'Grey', 'Cream'],
  },
  // Bottles
  {
    id: 'bt-001',
    name: 'Insulated Steel Bottle',
    price: 799,
    category: 'bottles',
    image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=600&h=700&fit=crop&q=80',
    description: '500ml double-wall vacuum insulated bottle with a clean matte finish for daily carry.',
    colors: ['Matte Black', 'White', 'Steel'],
    badge: 'Eco-Friendly',
  },
  {
    id: 'bt-002',
    name: 'Everyday Water Bottle',
    price: 599,
    category: 'bottles',
    image: 'https://images.unsplash.com/photo-1523362628745-0c100150b504?w=600&h=700&fit=crop&q=80',
    description: '750ml BPA-free tritan bottle with a leak-proof flip lid and minimal Circle detail.',
    colors: ['Clear', 'Smoke', 'Black'],
  },
  // Bags
  {
    id: 'bg-001',
    name: 'Heritage Tote Bag',
    price: 999,
    category: 'bags',
    image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=600&h=700&fit=crop&q=80',
    description: 'Heavy-duty canvas tote with a clean printed mark and reinforced handles.',
    colors: ['Natural', 'Black'],
    badge: 'Bestseller',
  },
  {
    id: 'bg-002',
    name: 'Everyday Backpack',
    price: 1999,
    category: 'bags',
    image: 'https://images.unsplash.com/photo-1581605405669-fcdf81165afa?w=600&h=700&fit=crop&q=80',
    description: 'Water-resistant backpack with a padded laptop sleeve and organized compartments.',
    colors: ['Black', 'Olive'],
    badge: 'Premium',
  },
  {
    id: 'bg-003',
    name: 'Gym Duffel Bag',
    price: 1299,
    category: 'bags',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=700&fit=crop&q=80',
    description: 'Durable nylon duffel with a shoe compartment, structured handles, and a minimal finish.',
    colors: ['Black', 'Grey'],
  },
];

export const categories = [
  { id: 'all', name: 'All Products', count: products.length },
  { id: 'tshirts', name: 'T-Shirts', count: products.filter(p => p.category === 'tshirts').length },
  { id: 'hoodies', name: 'Hoodies', count: products.filter(p => p.category === 'hoodies').length },
  { id: 'caps', name: 'Caps & Beanies', count: products.filter(p => p.category === 'caps').length },
  { id: 'bottles', name: 'Bottles', count: products.filter(p => p.category === 'bottles').length },
  { id: 'bags', name: 'Bags', count: products.filter(p => p.category === 'bags').length },
];
