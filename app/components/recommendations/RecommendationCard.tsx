'use client';

import { MenuItem } from '@/app/types';
import { Card } from '../ui/Card';
import { useCart } from '../../context/CartContext';

interface RecommendationCardProps {
  title: string;
  items: MenuItem[];
}

export default function RecommendationCard({ title, items }: RecommendationCardProps) {
  const { addItem } = useCart();

  return (
    <Card>
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      <div className="space-y-4">
        {items.map((item) => (
          <div key={item.id} className="flex justify-between items-center">
            <div>
              <h4 className="font-medium">{item.name}</h4>
              <p className="text-sm text-gray-600">₹{item.price}</p>
            </div>
            <button
              onClick={() => addItem({ id: item.id, name: item.name, price: item.price })}
              className="text-red-500 hover:text-red-600 text-sm font-medium"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </Card>
  );
}