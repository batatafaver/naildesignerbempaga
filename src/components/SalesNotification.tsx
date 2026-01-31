
'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

const salesData = [
  { name: 'Ana P.', location: 'Rio de Janeiro, RJ' },
  { name: 'Juliana C.', location: 'Belo Horizonte, MG' },
  { name: 'Fernanda L.', location: 'Salvador, BA' },
  { name: 'Carla M.', location: 'Curitiba, PR' },
  { name: 'Mariana S.', location: 'Fortaleza, CE' },
  { name: 'Patrícia A.', location: 'Porto Alegre, RS' },
  { name: 'Camila F.', location: 'Recife, PE' },
  { name: 'Beatriz R.', location: 'Goiânia, GO' },
];

export function SalesNotification() {
  const [currentSale, setCurrentSale] = useState(salesData[0]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const showAndHideNotification = () => {
      // Pick a random sale
      const randomSale = salesData[Math.floor(Math.random() * salesData.length)];
      setCurrentSale(randomSale);
      setIsVisible(true);

      // Set timeout to hide
      setTimeout(() => {
        setIsVisible(false);
      }, 3000); // Keep it visible for 3 seconds
    };
    
    // Show first one after a small delay to let the user settle
    const firstTimeout = setTimeout(showAndHideNotification, 5000);

    // Then set an interval for subsequent notifications
    const intervalId = setInterval(showAndHideNotification, 8000); // Appear every 8 seconds (3s visible + 5s hidden)

    return () => {
      clearTimeout(firstTimeout);
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div
      className={`fixed top-28 right-4 z-50 transition-all duration-500 ease-in-out ${
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'
      }`}
    >
      <Card className="bg-card/95 backdrop-blur-sm shadow-xl border-primary/30">
        <CardContent className="p-3">
          <div className="flex items-center gap-3">
            <div className="bg-primary/10 p-2 rounded-full">
              <CheckCircle className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="font-bold text-sm text-foreground">Compra Aprovada!</p>
              <p className="text-xs text-muted-foreground">
                {currentSale.name} ({currentSale.location})
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
