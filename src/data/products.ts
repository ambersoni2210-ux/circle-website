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
    name: 'Classic College Tee',
    price: 699,
    category: 'tshirts',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=700&fit=crop',
    description: 'Premium cotton crew-neck tee with embroidered college crest. Relaxed fit for everyday comfort.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['White', 'Black'],
    badge: 'Bestseller',
  },
  {
    id: 'ts-002',
    name: 'Vintage Oversize Tee',
    price: 799,
    category: 'tshirts',
    image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=600&h=700&fit=crop',
    description: 'Washed cotton oversized tee with retro college print. Drop shoulders and boxy silhouette.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'Charcoal'],
  },
  {
    id: 'ts-003',
    name: 'Minimal Logo Tee',
    price: 599,
    category: 'tshirts',
    image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&h=700&fit=crop',
    description: 'Clean, minimal tee with subtle embossed logo. 100% organic cotton.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['White', 'Cream', 'Black'],
  },
  {
    id: 'ts-004',
    name: 'Heritage Stripe Tee',
    price: 899,
    category: 'tshirts',
    image: 'https://images.unsplash.com/photo-1562157873-818bc0726f68?w=600&h=700&fit=crop',
    description: 'Contrast striped tee with woven college label. Heavy-weight cotton jersey.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Navy/White', 'Black/Grey'],
    badge: 'New',
  },
  // Hoodies
  {
    id: 'hd-001',
    name: 'Essential College Hoodie',
    price: 1499,
    category: 'hoodies',
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&h=700&fit=crop',
    description: 'Heavyweight fleece hoodie with embroidered college name. Kangaroo pocket and ribbed cuffs.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'Grey', 'Navy'],
    badge: 'Bestseller',
  },
  {
    id: 'hd-002',
    name: 'Premium Zip-Up Hoodie',
    price: 1799,
    category: 'hoodies',
    image: 'https://images.unsplash.com/photo-1578768079470-62f67e7a44e7?w=600&h=700&fit=crop',
    description: 'Full-zip hoodie in brushed French terry. Metal hardware and tonal college crest.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'Heather Grey'],
    badge: 'Premium',
  },
  {
    id: 'hd-003',
    name: 'Varsity Pullover',
    price: 1599,
    category: 'hoodies',
    image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=600&h=700&fit=crop',
    description: 'Vintage varsity-style pullover with chenille lettering. Oversized fit.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'Burgundy'],
  },
  // Caps
  {
    id: 'cp-001',
    name: 'Classic Dad Cap',
    price: 499,
    category: 'caps',
    image: 'https://images.unsplash.com/photo-1588850561407-ed78c334e67a?w=600&h=700&fit=crop',
    description: 'Unstructured six-panel cap with embroidered college logo. Adjustable brass buckle.',
    colors: ['Black', 'Navy', 'White'],
    badge: 'Popular',
  },
  {
    id: 'cp-002',
    name: 'Snapback Pro Cap',
    price: 699,
    category: 'caps',
    image: 'https://images.unsplash.com/photo-1575428652377-a2d80e2277fc?w=600&h=700&fit=crop',
    description: 'Structured flat-brim snapback with 3D embroidered logo. Premium wool blend.',
    colors: ['Black', 'Black/Red'],
  },
  {
    id: 'cp-003',
    name: 'Minimal Beanie',
    price: 599,
    category: 'caps',
    image: 'https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?w=600&h=700&fit=crop',
    description: 'Ribbed-knit beanie with subtle woven label. Soft merino wool blend.',
    colors: ['Black', 'Grey', 'Cream'],
  },
  // Bottles
  {
    id: 'bt-001',
    name: 'Insulated Steel Bottle',
    price: 799,
    category: 'bottles',
    image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=600&h=700&fit=crop',
    description: '500ml double-wall vacuum insulated bottle. Keeps drinks cold 24hrs or hot 12hrs.',
    colors: ['Matte Black', 'White', 'Steel'],
    badge: 'Eco-Friendly',
  },
  {
    id: 'bt-002',
    name: 'Campus Water Bottle',
    price: 599,
    category: 'bottles',
    image: 'https://images.unsplash.com/photo-1523362628745-0c100150b504?w=600&h=700&fit=crop',
    description: '750ml BPA-free tritan bottle with college crest. Leak-proof flip lid.',
    colors: ['Clear', 'Smoke', 'Black'],
  },
  // Bags
  {
    id: 'bg-001',
    name: 'Heritage Tote Bag',
    price: 999,
    category: 'bags',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=700&fit=crop',
    description: 'Heavy-duty canvas tote with screen-printed college logo. Reinforced handles.',
    colors: ['Natural', 'Black'],
    badge: 'Bestseller',
  },
  {
    id: 'bg-002',
    name: 'Campus Backpack',
    price: 1999,
    category: 'bags',
    image: 'https://images.unsplash.com/photo-1581605405669-fcdf81165afa?w=600&h=700&fit=crop',
    description: 'Water-resistant backpack with padded laptop sleeve. Multiple compartments and college patch.',
    colors: ['Black', 'Olive'],
    badge: 'Premium',
  },
  {
    id: 'bg-003',
    name: 'Gym Duffel Bag',
    price: 1299,
    category: 'bags',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=700&fit=crop&q=80',
    description: 'Durable nylon duffel with shoe compartment. Embroidered college wordmark.',
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
