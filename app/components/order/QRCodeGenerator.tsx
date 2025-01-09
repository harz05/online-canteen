'use client';

import { useEffect, useState } from 'react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { generateQRCode } from '@/app/utils/qrCode';

interface QRCodeGeneratorProps {
  tableNumber: string;
}

export default function QRCodeGenerator({ tableNumber }: QRCodeGeneratorProps) {
  const [qrUrl, setQrUrl] = useState('');

  useEffect(() => {
    const generateCode = async () => {
      const menuUrl = `${window.location.origin}/menu?table=${tableNumber}`;
      const qrCodeUrl = await generateQRCode(menuUrl);
      setQrUrl(qrCodeUrl);
    };
    generateCode();
  }, [tableNumber]);

  const downloadQR = () => {
    const link = document.createElement('a');
    link.href = qrUrl;
    link.download = `table-${tableNumber}-qr.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Card>
      <h3 className="text-lg font-semibold mb-4">Table QR Code</h3>
      <div className="flex flex-col items-center">
        {qrUrl && (
          <>
            <img src={qrUrl} alt={`QR Code for table ${tableNumber}`} className="w-48 h-48" />
            <p className="mt-2 text-sm text-gray-600">
              Scan to view menu for Table {tableNumber}
            </p>
            <Button onClick={downloadQR} variant="outline" className="mt-4">
              Download QR Code
            </Button>
          </>
        )}
      </div>
    </Card>
  );
}