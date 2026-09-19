
import { useCountdown } from '../../hooks/useCountdown';

interface Props {
  weddingDate: string | undefined;
}

export default function CountdownStrip({ weddingDate }: Props) {
  const { days, hours, minutes, seconds } = useCountdown(weddingDate);

  const units = [
    { label: 'Days', value: days },
    { label: 'Hours', value: hours },
    { label: 'Mins', value: minutes },
    { label: 'Secs', value: seconds },
  ];

  return (
    <div className="bg-ink/80 backdrop-blur-sm rounded-xl px-5 py-3">
      <p className="text-ivory/60 text-[10px] text-center mb-1.5">Event is in</p>
      <div className="flex items-center gap-4">
        {units.map((u) => (
          <div key={u.label} className="text-center">
            <p className="text-ivory text-xl font-medium tabular-nums">{String(u.value).padStart(2, '0')}</p>
            <p className="text-ivory/50 text-[10px]">{u.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}