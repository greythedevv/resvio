import { useEffect, useState } from 'react';
import { getCountdown } from '../utils/countdown';
import type { CountdownParts } from '../utils/countdown';

export function useCountdown(targetDate: string | Date | undefined) {
  const [countdown, setCountdown] = useState<CountdownParts>(() =>
    targetDate ? getCountdown(targetDate) : { days: 0, hours: 0, minutes: 0, seconds: 0 }
  );

  useEffect(() => {
    if (!targetDate) return;
    const interval = setInterval(() => setCountdown(getCountdown(targetDate)), 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  return countdown;
}