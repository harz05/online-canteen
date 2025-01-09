'use client';

import { useState } from 'react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';

const offerCategories = ['All Offers', 'Bank Offers', 'Restaurant Offers', 'Membership Offers'];

const offers = [
  {
    id: 1,
    title: 'Student Special',
    discount: '20% OFF',
    description: 'Get 20% off on all orders with valid student ID',
    code: 'STUDENT20',
    validUntil: '2024-03-31',
    minOrder: 200,
    maxDiscount: 100,
    bankPartner: null,
    type: 'Restaurant Offers',
    termsAndConditions: [
      'Valid student ID must be shown at delivery',
      'Not valid on special menu items',
      'Cannot be combined with other offers'
    ]
  },
  {
    id: 2,
    title: 'HDFC Bank Offer',
    discount: '15% OFF',
    description: 'Get instant 15% off with HDFC Bank cards',
    code: 'HDFC15',
    validUntil: '2024-03-15',
    minOrder: 300,
    maxDiscount: 150,
    bankPartner: 'HDFC Bank',
    type: 'Bank Offers',
    termsAndConditions: [
      'Valid on HDFC credit and debit cards only',
      'Minimum order value ₹300',
      'Maximum discount ₹150'
    ]
  },
  {
    id: 3,
    title: 'Pro Membership Deal',
    discount: '25% OFF',
    description: 'Exclusive discount for Pro members',
    code: 'PRO25',
    validUntil: '2024-12-31',
    minOrder: 400,
    maxDiscount: 200,
    type: 'Membership Offers',
    termsAndConditions: [
      'Valid for Pro members only',
      'Minimum order value ₹400',
      'Maximum discount ₹200 per order'
    ]
  }
];

export default function OffersPage() {
  const [selectedCategory, setSelectedCategory] = useState('All Offers');
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const filteredOffers = selectedCategory === 'All Offers'
    ? offers
    : offers.filter(offer => offer.type === selectedCategory);

  const copyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-6">Special Offers & Discounts</h1>
        
        {/* Category Tabs */}
        <div className="flex overflow-x-auto space-x-4 pb-4 no-scrollbar">
          {offerCategories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full whitespace-nowrap ${
                selectedCategory === category
                  ? 'bg-red-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredOffers.map((offer) => (
          <Card key={offer.id} className="overflow-hidden">
            {/* Offer Header */}
            <div className="bg-gradient-to-r from-red-500 to-pink-500 p-6 text-white">
              <h2 className="text-2xl font-bold mb-2">{offer.title}</h2>
              <p className="text-3xl font-bold">{offer.discount}</p>
            </div>

            {/* Offer Details */}
            <div className="p-6">
              <p className="text-gray-600 mb-4">{offer.description}</p>
              
              {/* Offer Code */}
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex-1 bg-gray-100 p-3 rounded-lg">
                  <p className="text-sm text-gray-500">Use Code</p>
                  <p className="font-mono font-bold">{offer.code}</p>
                </div>
                <Button
                  onClick={() => copyCode(offer.code)}
                  variant="outline"
                >
                  {copiedCode === offer.code ? 'Copied!' : 'Copy Code'}
                </Button>
              </div>

              {/* Offer Details */}
              <div className="space-y-2 text-sm text-gray-600 mb-6">
                <p>• Valid until: {new Date(offer.validUntil).toLocaleDateString()}</p>
                <p>• Minimum order: ₹{offer.minOrder}</p>
                <p>• Maximum discount: ₹{offer.maxDiscount}</p>
                {offer.bankPartner && <p>• Partner: {offer.bankPartner}</p>}
              </div>

              {/* Terms and Conditions */}
              <div className="mt-4">
                <details className="text-sm">
                  <summary className="font-medium text-gray-700 cursor-pointer">
                    Terms & Conditions
                  </summary>
                  <ul className="mt-2 space-y-1 text-gray-600 pl-4">
                    {offer.termsAndConditions.map((term, index) => (
                      <li key={index}>• {term}</li>
                    ))}
                  </ul>
                </details>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </main>
  );
}