'use client';

import { useState } from 'react';
import { HeartIcon } from '@heroicons/react/24/outline';
import { HeartIcon as HeartSolidIcon } from '@heroicons/react/24/solid';
import { useCart } from '../context/CartContext';
import { Card } from './ui/Card';
import { Button } from './ui/Button';

interface MenuItemProps {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  ingredients?: string[];
  calories?: number;
}

export default function MenuItem({
  id,
  name,
  description,
  price,
  image,
  ingredients,
  calories,
}: MenuItemProps) {
  const { addItem } = useCart();
  const [isFavorite, setIsFavorite] = useState(false);

  const handleAddToCart = () => {
    addItem({ id, name, price });
  };

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
    // In a real app, this would sync with a backend
    if (!isFavorite) {
      // Show a toast notification
      alert('Added to favorites!');
    }
  };

  return (
    <Card className="h-full flex flex-col relative group">
      <button
        onClick={toggleFavorite}
        className="absolute top-2 right-2 z-10 p-2 bg-white rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
      >
        {isFavorite ? (
          <HeartSolidIcon className="h-6 w-6 text-red-500" />
        ) : (
          <HeartIcon className="h-6 w-6 text-gray-500 hover:text-red-500" />
        )}
      </button>
      <div className="relative pt-[60%]">
        <img
          src={image}
          alt={name}
          className="absolute top-0 left-0 w-full h-full object-cover rounded-t-lg"
        />
      </div>
      <div className="p-4 flex-1 flex flex-col">
        <h3 className="text-lg font-semibold mb-2">{name}</h3>
        <p className="text-gray-600 text-sm mb-4 flex-1">{description}</p>
        {ingredients && (
          <p className="text-sm text-gray-500 mb-2">
            🥘 {ingredients.join(', ')}
          </p>
        )}
        <div className="flex items-center justify-between mt-auto">
          <div>
            <p className="text-lg font-bold">₹{price}</p>
            {calories && (
              <p className="text-sm text-gray-500">{calories} kcal</p>
            )}
          </div>
          <Button onClick={handleAddToCart}>Add to Cart</Button>
        </div>
      </div>
    </Card>
  );
}