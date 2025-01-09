'use client';

import { useState } from 'react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { useCart } from '../context/CartContext';

const cuisineTypes = ['All', 'North Indian', 'South Indian', 'Chinese', 'Continental', 'Beverages'];
const dietaryTypes = ['All', 'Veg', 'Non-Veg', 'Vegan'];
const sortOptions = ['Recommended', 'Price: Low to High', 'Price: High to Low', 'Rating'];

const menuItems = [
  {
    id: 1,
    name: 'Butter Chicken',
    description: 'Tender chicken in rich tomato gravy',
    price: 220,
    rating: 4.5,
    reviews: 128,
    image: '/images/butter-chicken.jpg',
    cuisine: 'North Indian',
    dietary: 'Non-Veg',
    spicyLevel: 'Medium',
    bestSeller: true,
    mustTry: false
  },
  {
    id: 2,
    name: 'Masala Dosa',
    description: 'Crispy dosa with potato filling',
    price: 120,
    rating: 4.3,
    reviews: 95,
    image: '/images/masala-dosa.jpg',
    cuisine: 'South Indian',
    dietary: 'Veg',
    spicyLevel: 'Medium',
    bestSeller: true,
    mustTry: true
  }
];

export default function MenuPage() {
  const { addItem } = useCart();
  const [selectedCuisine, setSelectedCuisine] = useState('All');
  const [selectedDiet, setSelectedDiet] = useState('All');
  const [sortBy, setSortBy] = useState('Recommended');
  const [priceRange, setPriceRange] = useState([0, 500]);

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Filters Sidebar */}
        <div className="lg:w-1/4">
          <Card className="sticky top-24">
            <h2 className="text-lg font-semibold mb-4">Filters</h2>
            
            <div className="space-y-6">
              {/* Cuisine Filter */}
              <div>
                <h3 className="font-medium mb-2">Cuisine</h3>
                <div className="space-y-2">
                  {cuisineTypes.map((cuisine) => (
                    <label key={cuisine} className="flex items-center">
                      <input
                        type="radio"
                        name="cuisine"
                        checked={selectedCuisine === cuisine}
                        onChange={() => setSelectedCuisine(cuisine)}
                        className="text-red-500"
                      />
                      <span className="ml-2">{cuisine}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Dietary Preferences */}
              <div>
                <h3 className="font-medium mb-2">Dietary</h3>
                <div className="space-y-2">
                  {dietaryTypes.map((diet) => (
                    <label key={diet} className="flex items-center">
                      <input
                        type="radio"
                        name="diet"
                        checked={selectedDiet === diet}
                        onChange={() => setSelectedDiet(diet)}
                        className="text-red-500"
                      />
                      <span className="ml-2">{diet}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div>
                <h3 className="font-medium mb-2">Price Range</h3>
                <input
                  type="range"
                  min="0"
                  max="500"
                  step="50"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-gray-600">
                  <span>₹0</span>
                  <span>₹{priceRange[1]}</span>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Menu Items */}
        <div className="lg:w-3/4">
          {/* Sort Options */}
          <div className="flex justify-end mb-6">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="border rounded-md px-3 py-2"
            >
              {sortOptions.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </div>

          {/* Menu Items Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {menuItems.map((item) => (
              <Card key={item.id} className="relative">
                {item.bestSeller && (
                  <span className="absolute top-2 left-2 bg-yellow-400 text-xs font-bold px-2 py-1 rounded">
                    ⭐ BESTSELLER
                  </span>
                )}
                {item.mustTry && (
                  <span className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                    MUST TRY
                  </span>
                )}
                <div className="flex gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-32 h-32 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg">{item.name}</h3>
                    <div className="flex items-center space-x-2 mb-1">
                      <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded text-sm">
                        ⭐ {item.rating}
                      </span>
                      <span className="text-gray-500 text-sm">
                        ({item.reviews} reviews)
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm mb-2">{item.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="font-bold">₹{item.price}</span>
                      <Button
                        onClick={() => addItem({
                          id: item.id.toString(),
                          name: item.name,
                          price: item.price
                        })}
                      >
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}