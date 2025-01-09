'use client';

import { MinusIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline';
import { useCart } from '../../context/CartContext';

interface CartItemProps {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

export default function CartItem({ id, name, price, quantity }: CartItemProps) {
  const { updateQuantity, removeItem } = useCart();

  return (
    <div className="flex items-center justify-between py-4 border-b last:border-0">
      <div>
        <h3 className="font-semibold">{name}</h3>
        <p className="text-gray-600">₹{price}</p>
      </div>
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <button
            onClick={() => updateQuantity(id, quantity - 1)}
            className="p-1 rounded-md hover:bg-gray-100"
          >
            <MinusIcon className="h-4 w-4" />
          </button>
          <span className="w-8 text-center">{quantity}</span>
          <button
            onClick={() => updateQuantity(id, quantity + 1)}
            className="p-1 rounded-md hover:bg-gray-100"
          >
            <PlusIcon className="h-4 w-4" />
          </button>
        </div>
        <button
          onClick={() => removeItem(id)}
          className="text-red-500 hover:text-red-600"
        >
          <TrashIcon className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}