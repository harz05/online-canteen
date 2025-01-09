"use client"; 

import { useState } from 'react';
import { Card } from './ui/Card';

const offers = [
  {
    id: 1,
    title: 'Buy 1 Get 1 Free',
    description: 'On all main course meals',
    badge: 'LIMITED TIME',
  },
  {
    id: 2,
    title: 'Student Special',
    description: '20% off with valid student ID',
    badge: '20% OFF',
  },
  {
    id: 3,
    title: 'Combo Deal',
    description: 'Burger + Fries + Drink at ₹199',
    badge: 'BEST VALUE',
  },
];

export default function SpecialOffers() {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {offers.map((offer) => (
            <div key={offer.id} className="w-full flex-shrink-0 px-4">
              <Card variant="gradient" className="relative">
                <div className="absolute top-4 right-4 bg-white text-red-500 px-2 py-1 rounded-full text-sm font-semibold">
                  {offer.badge}
                </div>
                <h3 className="text-xl font-bold mb-2">{offer.title}</h3>
                <p className="mb-4">{offer.description}</p>
                <button className="bg-white text-red-500 px-4 py-2 rounded-md hover:bg-red-50 transition-colors">
                  Claim Now
                </button>
              </Card>
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={() => setCurrentSlide((prev) => Math.max(prev - 1, 0))}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg"
      >
        ←
      </button>
      <button
        onClick={() => setCurrentSlide((prev) => Math.min(prev + 1, offers.length - 1))}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg"
      >
        →
      </button>
    </div>
  );
}