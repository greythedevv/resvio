
import { useOutletContext } from 'react-router-dom';
import type { Wedding } from '../../types/wedding';

export default function GiftsPage() {
  useOutletContext<{ wedding: Wedding | null; }>();

  return (
    <div>
      <h1 className="font-serif text-2xl text-ink mb-6">Gifts</h1>
      <div className="bg-white border border-border rounded-lg p-8 text-center">
        <p className="text-muted text-sm">
          Gift registry management is coming here — items, cash funds, and who's contributed what.
        </p>
      </div>
    </div>
  );
}