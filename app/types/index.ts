export interface MenuItem {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
  ingredients?: string[];
  calories?: number;
}

export interface OrderType {
  id: string;
  items: Array<{
    id: string;
    quantity: number;
    name: string;
    price: number;
  }>;
  status: 'pending' | 'preparing' | 'ready' | 'delivered';
  type: 'pickup' | 'delivery';
  deliveryAddress?: string;
  pickupTime?: string;
  totalAmount: number;
  paymentMethod: string;
  createdAt: string;
}

export interface RecommendationType {
  id: string;
  type: 'history' | 'combo' | 'popular';
  title: string;
  items: MenuItem[];
}