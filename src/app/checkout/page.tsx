import type { Metadata } from 'next';
import CheckoutForm from '@/components/CheckoutForm';

export const metadata: Metadata = {
  title: 'Order Inquiry',
  description: 'Submit your Circle order inquiry for custom merchandise, bulk products, branded stores, uniforms, kits, vouchers and community merchandise.',
};

export default function CheckoutPage() {
  return (
    <div className="bg-circle-cream pt-24 sm:pt-28">
      <CheckoutForm />
    </div>
  );
}
