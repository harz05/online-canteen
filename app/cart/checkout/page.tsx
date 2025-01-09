'use client';

import { useState } from 'react';
import { useCart } from '../../context/CartContext';
import OrderTypeSelector from '../../components/order/OrderTypeSelector';
import PaymentMethodSelector from '../../components/order/PaymentMethodSelector';
import GroupOrderLink from '../../components/order/GroupOrderLink';
import QRCodeGenerator from '../../components/order/QRCodeGenerator';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';

export default function CheckoutPage() {
  const { items, totalPrice, clearCart } = useCart();
  const [orderType, setOrderType] = useState<'pickup' | 'delivery'>('pickup');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [paymentProvider, setPaymentProvider] = useState('');
  const [tableNumber, setTableNumber] = useState('1');

  const handlePaymentSelect = (method: string, provider?: string) => {
    setPaymentMethod(method);
    if (provider) setPaymentProvider(provider);
  };

  const handlePlaceOrder = () => {
    // In a real app, this would submit the order to a backend
    console.log('Order placed:', {
      items,
      orderType,
      paymentMethod,
      paymentProvider,
      totalAmount: totalPrice,
      tableNumber: orderType === 'pickup' ? tableNumber : undefined,
    });
    clearCart();
    // Redirect to order confirmation page
  };

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-6">
          <OrderTypeSelector onSelect={setOrderType} />
          <PaymentMethodSelector onSelect={handlePaymentSelect} />
          <GroupOrderLink />
          {orderType === 'pickup' && <QRCodeGenerator tableNumber={tableNumber} />}
        </div>
        <div>
          <Card>
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            <div className="space-y-4">
              {items.map((item) => (
                <div key={item.id} className="flex justify-between text-sm">
                  <span>{item.name} x {item.quantity}</span>
                  <span>₹{(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
              <div className="border-t pt-4">
                <div className="flex justify-between font-bold">
                  <span>Total</span>
                  <span>₹{totalPrice.toFixed(2)}</span>
                </div>
              </div>
            </div>
            <Button
              onClick={handlePlaceOrder}
              className="w-full mt-6"
              disabled={!paymentMethod}
            >
              Place Order
            </Button>
          </Card>
        </div>
      </div>
    </main>
  );
}