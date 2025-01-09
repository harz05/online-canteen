'use client';

import { useState } from 'react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { useCart } from '../context/CartContext';

const orderTypes = ['Delivery', 'Pickup'];
const paymentMethods = ['UPI', 'Card', 'Cash'];

export default function OrderPage() {
  const { items, totalPrice } = useCart();
  const [orderType, setOrderType] = useState('Delivery');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [specialInstructions, setSpecialInstructions] = useState('');

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Order Details */}
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <h2 className="text-xl font-semibold mb-4">Order Type</h2>
            <div className="flex gap-4 mb-4">
              {orderTypes.map((type) => (
                <button
                  key={type}
                  onClick={() => setOrderType(type)}
                  className={`flex-1 py-2 rounded-lg border ${
                    orderType === type
                      ? 'border-red-500 bg-red-50 text-red-500'
                      : 'border-gray-300 hover:border-red-500'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </Card>

          {orderType === 'Delivery' && (
            <Card>
              <h2 className="text-xl font-semibold mb-4">Delivery Address</h2>
              <textarea
                value={deliveryAddress}
                onChange={(e) => setDeliveryAddress(e.target.value)}
                placeholder="Enter your delivery address..."
                className="w-full p-3 border rounded-lg"
                rows={3}
              />
            </Card>
          )}

          <Card>
            <h2 className="text-xl font-semibold mb-4">Special Instructions</h2>
            <textarea
              value={specialInstructions}
              onChange={(e) => setSpecialInstructions(e.target.value)}
              placeholder="Any special instructions for your order..."
              className="w-full p-3 border rounded-lg"
              rows={2}
            />
          </Card>

          <Card>
            <h2 className="text-xl font-semibold mb-4">Payment Method</h2>
            <div className="grid grid-cols-3 gap-4">
              {paymentMethods.map((method) => (
                <button
                  key={method}
                  onClick={() => setPaymentMethod(method)}
                  className={`p-4 rounded-lg border text-center ${
                    paymentMethod === method
                      ? 'border-red-500 bg-red-50 text-red-500'
                      : 'border-gray-300 hover:border-red-500'
                  }`}
                >
                  {method}
                </button>
              ))}
            </div>
          </Card>
        </div>

        {/* Order Summary */}
        <div>
          <Card className="sticky top-24">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            <div className="space-y-4">
              {items.map((item) => (
                <div key={item.id} className="flex justify-between text-sm">
                  <span>{item.name} x {item.quantity}</span>
                  <span>₹{(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
              <div className="border-t pt-4">
                <div className="flex justify-between font-semibold">
                  <span>Subtotal</span>
                  <span>₹{totalPrice.toFixed(2)}</span>
                </div>
                {orderType === 'Delivery' && (
                  <div className="flex justify-between text-sm mt-2">
                    <span>Delivery Fee</span>
                    <span>₹30.00</span>
                  </div>
                )}
                <div className="flex justify-between font-bold text-lg mt-4">
                  <span>Total</span>
                  <span>₹{(totalPrice + (orderType === 'Delivery' ? 30 : 0)).toFixed(2)}</span>
                </div>
              </div>
              <Button className="w-full mt-4" disabled={!paymentMethod}>
                Place Order
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </main>
  );
}