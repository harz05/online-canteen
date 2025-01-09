'use client';

import { useState } from 'react';
import { Tab } from '@headlessui/react';
import clsx from 'clsx';
import { menuItems } from '../data/menuItems';
import MenuItem from './MenuItem';

const categories = [
  { id: 'daily-specials', name: "Today's Specials" },
  { id: 'meals', name: 'Meals' },
  { id: 'snacks', name: 'Snacks' },
  { id: 'beverages', name: 'Beverages' },
  { id: 'combos', name: 'Combos' },
];

export default function ServiceTabs() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
      <Tab.List className="flex overflow-x-auto space-x-2 rounded-xl bg-red-100 p-1 no-scrollbar">
        {categories.map((category) => (
          <Tab
            key={category.id}
            className={({ selected }) =>
              clsx(
                'whitespace-nowrap px-4 py-2.5 text-sm font-medium leading-5',
                'ring-white ring-opacity-60 ring-offset-2 ring-offset-red-400 focus:outline-none focus:ring-2',
                selected
                  ? 'bg-red-500 text-white shadow'
                  : 'text-red-700 hover:bg-red-200 hover:text-red-800'
              )
            }
          >
            {category.name}
          </Tab>
        ))}
      </Tab.List>
      <Tab.Panels className="mt-6">
        {categories.map((category) => (
          <Tab.Panel
            key={category.id}
            className={clsx(
              'rounded-xl bg-white p-3',
              'ring-white ring-opacity-60 ring-offset-2 ring-offset-red-400 focus:outline-none focus:ring-2'
            )}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {menuItems[category.id].map((item) => (
                <MenuItem key={item.id} {...item} />
              ))}
            </div>
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
}