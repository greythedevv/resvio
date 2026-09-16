import { Link } from 'react-router-dom';

export default function RsvpHeader() {
  return (
    <div className="text-center mb-8">
      <Link to="/" className="font-serif text-xl text-ink">resvio</Link>
      <p className="text-muted text-xs mt-2">We'd love to know if you can make it.</p>
    </div>
  );
}