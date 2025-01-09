interface OrderStatus {
  id: string;
  status: 'preparing' | 'ready' | 'delivered';
  estimatedTime: string;
  currentStep: number;
}

export default function OrderTracker({ order }: { order: OrderStatus }) {
  const steps = [
    { id: 1, name: 'Order Placed', status: 'complete' },
    { id: 2, name: 'Preparing', status: order.currentStep >= 2 ? 'complete' : 'upcoming' },
    { id: 3, name: 'Ready', status: order.currentStep >= 3 ? 'complete' : 'upcoming' },
    { id: 4, name: 'Delivered', status: order.currentStep >= 4 ? 'complete' : 'upcoming' },
  ];

  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <h2 className="text-lg font-semibold mb-4">Order Status</h2>
      <div className="space-y-4">
        <div className="relative">
          <div className="absolute inset-0 flex items-center" aria-hidden="true">
            <div className="h-0.5 w-full bg-gray-200" />
          </div>
          <div className="relative flex justify-between">
            {steps.map((step) => (
              <div
                key={step.id}
                className={clsx(
                  'relative flex h-8 w-8 items-center justify-center rounded-full',
                  {
                    'bg-red-500 text-white': step.status === 'complete',
                    'bg-gray-200': step.status === 'upcoming',
                  }
                )}
              >
                {step.id}
              </div>
            ))}
          </div>
        </div>
        <p className="text-center text-sm text-gray-500">
          Estimated Time: {order.estimatedTime}
        </p>
      </div>
    </div>
  );
}