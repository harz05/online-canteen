'use client';

import { Card } from '../components/ui/Card';
import { useCart } from '../context/CartContext';
import CartItem from '../components/cart/CartItem';
import CartSummary from '../components/cart/CartSummary';

export default function CartPage() {
  const { items } = useCart();

  if (items.length === 0) {
    return (
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
        <Card>
          <p className="text-gray-500 text-center py-8">Your cart is empty</p>
        </Card>
      </main>
    );
  }

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <Card>
            <div className="space-y-4">
              {items.map((item) => (
                <CartItem key={item.id} {...item} />
              ))}
            </div>
          </Card>
        </div>
        <div>
          <CartSummary />
        </div>
      </div>
    </main>
  );
}