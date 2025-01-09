import { Card } from './ui/Card';

const diningOptions = [
  {
    id: 1,
    name: 'Student Cafeteria',
    cuisine: 'Multi-Cuisine',
    rating: 4.2,
    priceForTwo: 200,
    image: '/images/cafeteria.jpg'
  },
  {
    id: 2,
    name: 'Faculty Lounge',
    cuisine: 'Continental, Indian',
    rating: 4.5,
    priceForTwo: 300,
    image: '/images/lounge.jpg'
  }
];

export default function DiningOut() {
  return (
    <section className="py-8">
      <h2 className="text-2xl font-bold mb-6">Dine-In Options</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {diningOptions.map((option) => (
          <Card key={option.id} className="overflow-hidden">
            <img 
              src={option.image} 
              alt={option.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-1">{option.name}</h3>
              <p className="text-gray-600 text-sm mb-2">{option.cuisine}</p>
              <div className="flex items-center justify-between">
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">
                  ⭐ {option.rating}
                </span>
                <span className="text-gray-600 text-sm">
                  ₹{option.priceForTwo} for two
                </span>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}