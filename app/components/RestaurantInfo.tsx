import { Card } from './ui/Card';

export default function RestaurantInfo() {
  return (
    <Card className="mb-8">
      <div className="flex flex-col md:flex-row justify-between">
        <div>
          <h2 className="text-2xl font-bold mb-2">CanteenHub</h2>
          <div className="flex items-center space-x-4 mb-2">
            <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">⭐ 4.2</span>
            <span className="text-gray-600">500+ Ratings</span>
            <span className="text-gray-600">•</span>
            <span className="text-gray-600">25-30 mins</span>
          </div>
          <p className="text-gray-600">North Indian, Chinese, South Indian</p>
        </div>
        <div className="mt-4 md:mt-0">
          <div className="border p-3 rounded-lg">
            <div className="text-sm text-gray-600 mb-1">Opening Hours</div>
            <div className="font-semibold">9:00 AM - 9:00 PM</div>
          </div>
        </div>
      </div>
    </Card>
  );
}