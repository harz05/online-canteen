'use client';

import { useState } from 'react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { generateUniqueId } from '@/app/utils/uniqueId';

export default function GroupOrderLink() {
  const [groupLink, setGroupLink] = useState('');
  const [copied, setCopied] = useState(false);

  const generateGroupLink = () => {
    const uniqueId = generateUniqueId();
    const link = `${window.location.origin}/group-order/${uniqueId}`;
    setGroupLink(link);
  };

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(groupLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Card>
      <h3 className="text-lg font-semibold mb-4">Create Group Order</h3>
      <div className="space-y-4">
        <p className="text-sm text-gray-600">
          Share a link with friends to create a group order. Everyone can add items to the same cart.
        </p>
        <Button onClick={generateGroupLink} className="w-full">
          Generate Group Order Link
        </Button>
        {groupLink && (
          <div className="p-3 bg-gray-50 rounded-lg">
            <p className="text-sm mb-2">Share this link with your friends:</p>
            <div className="flex items-center space-x-2">
              <input
                type="text"
                value={groupLink}
                readOnly
                className="flex-1 p-2 text-sm border rounded bg-white"
              />
              <Button
                onClick={copyToClipboard}
                variant="outline"
                className="whitespace-nowrap"
              >
                {copied ? 'Copied!' : 'Copy Link'}
              </Button>
            </div>
          </div>
        )}
      </div>
    </Card>
  );
}