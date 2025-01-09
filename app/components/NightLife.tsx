import { Card } from './ui/Card';

const nightOptions = [
  {
    id: 1,
    name: 'Late Night Cafe',
    timing: 'Open till 2 AM',
    type: 'Cafe, Beverages',
    image: '/images/night-cafe.jpg'
  },
  {
    id: 2,
    name: 'Study Hub',
    timing: '24/7',
    type: 'Snacks & Beverages',
    image: '/images/study-hub.jpg'
  }
];

export default function NightLife() {
  return (
    <section className="py-8">
      <h2 className="text-2xl font-bold mb-6">Night Life & Late Night Options</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {nightOptions.map((option) => (
          <Card key={option.id} className="overflow-hidden">
            <img 
              src={option.image} 
              alt={option.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-1">{option.name}</h3>
              <p className="text-gray-600 text-sm mb-2">{option.type}</p>
              <span className="text-purple-600 text-sm font-medium">
                🌙 {option.timing}
              </span>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}