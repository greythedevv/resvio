export interface CountdownParts {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export function getCountdown(targetDate: string | Date): CountdownParts {
  const diff = Math.max(0, new Date(targetDate).getTime() - Date.now());
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff % 86400000) / 3600000),
    minutes: Math.floor((diff % 3600000) / 60000),
    seconds: Math.floor((diff % 60000) / 1000),
  };
}