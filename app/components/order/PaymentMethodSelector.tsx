'use client';

import { Card } from '../ui/Card';

const paymentMethods = [
  { id: 'upi', name: 'UPI', icon: '📱', providers: ['Google Pay', 'PhonePe', 'Paytm'] },
  { id: 'card', name: 'Card', icon: '💳', providers: ['Credit Card', 'Debit Card'] },
  { id: 'cash', name: 'Cash', icon: '💵', providers: ['Cash on Delivery'] },
];

interface PaymentMethodSelectorProps {
  onSelect: (method: string, provider?: string) => void;
}

export default function PaymentMethodSelector({ onSelect }: PaymentMethodSelectorProps) {
  return (
    <Card>
      <h3 className="text-lg font-semibold mb-4">Payment Method</h3>
      <div className="space-y-4">
        {paymentMethods.map((method) => (
          <div key={method.id} className="space-y-2">
            <div className="flex items-center p-3 rounded-lg border hover:border-red-500">
              <span className="mr-2">{method.icon}</span>
              <span className="font-medium">{method.name}</span>
            </div>
            <div className="ml-8 space-y-2">
              {method.providers.map((provider) => (
                <button
                  key={provider}
                  onClick={() => onSelect(method.id, provider)}
                  className="w-full text-left p-2 text-sm rounded hover:bg-red-50"
                >
                  {provider}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}