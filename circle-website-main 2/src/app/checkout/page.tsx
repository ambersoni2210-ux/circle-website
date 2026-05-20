import type { Metadata } from 'next';
import CheckoutForm from '@/components/CheckoutForm';

export const metadata: Metadata = {
  title: 'Order Inquiry',
  description: 'Request a Circle merchandise order, bulk quote, custom store or voucher program.',
};

export default function CheckoutPage() {
  return (
    <div className="bg-circle-cream pt-24 sm:pt-28">
      <CheckoutForm />
    </div>
  );
}
