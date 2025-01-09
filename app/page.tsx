'use client';

import { useState } from 'react';
import HeroSection from './components/HeroSection';
import ServiceTabs from './components/ServiceTabs';
import SearchFilters from './components/SearchFilters';
import SpecialOffers from './components/SpecialOffers';
import MenuItem from './components/MenuItem';
import RestaurantInfo from './components/RestaurantInfo';
import DiningOut from './components/DiningOut';
import NightLife from './components/NightLife';
import { MenuItem as MenuItemType } from './types';
import { menuItems } from './data/menuItems';

const featuredItems = [
  {
    id: '1',
    name: 'Chicken Biryani',
    description: 'Aromatic basmati rice cooked with tender chicken and spices',
    price: 180,
    image: '/images/biryani.jpg',
    category: 'meals',
    ingredients: ['Basmati Rice', 'Chicken', 'Spices', 'Herbs'],
    calories: 550,
  },
];

export default function Home() {
  const [searchResults, setSearchResults] = useState<MenuItemType[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [activeTab, setActiveTab] = useState('delivery');

  const handleSearch = (results: MenuItemType[]) => {
    setSearchResults(results);
    setIsSearching(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSection />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
        {/* Tab Navigation */}
        <div className="flex space-x-6 mb-8 border-b">
          {['delivery', 'dining', 'nightlife'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-4 px-2 text-lg font-medium border-b-2 ${
                activeTab === tab
                  ? 'border-red-500 text-red-500'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {activeTab === 'delivery' && (
          <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6">
            <RestaurantInfo />
            <div className="mb-6 sm:mb-8">
              <SearchFilters onSearch={handleSearch} />
            </div>

            {isSearching ? (
              <div className="mt-6 sm:mt-8">
                <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Search Results</h2>
                {searchResults.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    {searchResults.map((item) => (
                      <MenuItem key={item.id} {...item} />
                    ))}
                  </div>
                ) : (
                  <p className="text-center text-gray-500 py-8">
                    No items found matching your search criteria
                  </p>
                )}
              </div>
            ) : (
              <>
                <ServiceTabs />
                <section className="mt-8 sm:mt-12">
                  <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Special Offers</h2>
                  <SpecialOffers />
                </section>
              </>
            )}
          </div>
        )}

        {activeTab === 'dining' && <DiningOut />}
        {activeTab === 'nightlife' && <NightLife />}
      </main>
    </div>
  );
}