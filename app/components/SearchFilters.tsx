import { useState } from 'react';
import { MenuItem } from '../types';
import { menuItems } from '../data/menuItems';

interface SearchFiltersProps {
  onSearch: (results: MenuItem[]) => void;
}

export default function SearchFilters({ onSearch }: SearchFiltersProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedCuisine, setSelectedCuisine] = useState('');
  const [priceRange, setPriceRange] = useState('');
  const [showOffers, setShowOffers] = useState(false);
  const [showVegOnly, setShowVegOnly] = useState(false);

  const handleSearch = () => {
    // Flatten the menuItems object into an array
    const allItems = Object.values(menuItems).flat();

    const filteredItems = allItems.filter(item => {
      const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = !selectedCategory || item.category === selectedCategory;
      const matchesPriceRange = !priceRange || 
        (priceRange === 'budget' && item.price <= 100) ||
        (priceRange === 'medium' && item.price > 100 && item.price <= 200) ||
        (priceRange === 'premium' && item.price > 200);

      return matchesSearch && matchesCategory && matchesPriceRange;
    });

    onSearch(filteredItems);
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <input
            type="search"
            placeholder="Search your favorite dish..."
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-transparent"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              handleSearch();
            }}
          />
        </div>
        <select
          className="px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-transparent"
          value={selectedCategory}
          onChange={(e) => {
            setSelectedCategory(e.target.value);
            handleSearch();
          }}
        >
          <option value="">All Categories</option>
          <option value="meals">Meals</option>
          <option value="snacks">Snacks</option>
          <option value="beverages">Beverages</option>
          <option value="daily-specials">Daily Specials</option>
        </select>
        <select
          className="px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-transparent"
          value={priceRange}
          onChange={(e) => {
            setPriceRange(e.target.value);
            handleSearch();
          }}
        >
          <option value="">Price Range</option>
          <option value="budget">Budget (≤₹100)</option>
          <option value="medium">Medium (₹101-200)</option>
          <option value="premium">Premium (>₹200)</option>
        </select>
      </div>
      <div className="flex items-center gap-6">
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            className="form-checkbox text-red-500"
            checked={showOffers}
            onChange={(e) => {
              setShowOffers(e.target.checked);
              handleSearch();
            }}
          />
          <span>Show Only Offers</span>
        </label>
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            className="form-checkbox text-red-500"
            checked={showVegOnly}
            onChange={(e) => {
              setShowVegOnly(e.target.checked);
              handleSearch();
            }}
          />
          <span>Vegetarian Only</span>
        </label>
      </div>
    </div>
  );
}