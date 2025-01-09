'use client';

import { useCart } from '../../context/CartContext';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';

export default function CartSummary() {
  const { totalPrice } = useCart();

  return (
    <Card>
      <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
      <div className="space-y-2 mb-4">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>₹{totalPrice.toFixed(2)}</span>
        </div>
        <div className="flex justify-between font-bold">
          <span>Total</span>
          <span>₹{totalPrice.toFixed(2)}</span>
        </div>
      </div>
      <Button className="w-full">Checkout</Button>
    </Card>
  );
}