import { Card } from '../components/ui/Card';

export default function ProfilePage() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1">
          <Card>
            <div className="text-center">
              <div className="w-32 h-32 mx-auto bg-gray-200 rounded-full mb-4">
                {/* Profile image placeholder */}
              </div>
              <h2 className="text-xl font-semibold">John Doe</h2>
              <p className="text-gray-600">john.doe@example.com</p>
            </div>
            <div className="mt-6">
              <h3 className="font-semibold mb-2">Loyalty Points</h3>
              <div className="bg-red-100 p-4 rounded-lg text-center">
                <span className="text-2xl font-bold text-red-600">250</span>
                <p className="text-sm text-red-600">points available</p>
              </div>
            </div>
          </Card>
        </div>
        <div className="md:col-span-2">
          <Card>
            <h2 className="text-xl font-semibold mb-4">Order History</h2>
            <div className="space-y-4">
              {/* Sample order history item */}
              <div className="border-b pb-4">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-semibold">Order #12345</p>
                    <p className="text-sm text-gray-600">2 items • ₹360</p>
                    <p className="text-sm text-gray-600">March 15, 2024</p>
                  </div>
                  <button className="text-red-500 hover:text-red-600">
                    Reorder
                  </button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </main>
  );
}