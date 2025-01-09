'use client';

import { useState } from 'react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';

interface OrderTypeSelectorProps {
  onSelect: (type: 'pickup' | 'delivery') => void;
}

export default function OrderTypeSelector({ onSelect }: OrderTypeSelectorProps) {
  const [selected, setSelected] = useState<'pickup' | 'delivery'>('pickup');

  const handleSelect = (type: 'pickup' | 'delivery') => {
    setSelected(type);
    onSelect(type);
  };

  return (
    <Card>
      <div className="flex space-x-4">
        <Button
          variant={selected === 'pickup' ? 'primary' : 'outline'}
          onClick={() => handleSelect('pickup')}
          className="flex-1"
        >
          Self Pickup
        </Button>
        <Button
          variant={selected === 'delivery' ? 'primary' : 'outline'}
          onClick={() => handleSelect('delivery')}
          className="flex-1"
        >
          Delivery
        </Button>
      </div>
    </Card>
  );
}