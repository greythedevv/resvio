
import { LuCalendar, LuMapPin } from 'react-icons/lu';
import CountdownStrip from './CountdownStrip';
import type { Wedding } from '../../types/wedding';

interface Props {
  wedding: Wedding;
}

export default function WeddingHero({ wedding }: Props) {
  const dateLabel = wedding.weddingDate
    ? new Date(wedding.weddingDate).toLocaleDateString(undefined, {
        weekday: 'short',
        day: 'numeric',
        month: 'short',
        year: 'numeric',
      })
    : '';
  const timeLabel = wedding.weddingDate
    ? new Date(wedding.weddingDate).toLocaleTimeString(undefined, { hour: 'numeric', minute: '2-digit' })
    : '';

  return (
    <div
      className="relative rounded-2xl overflow-hidden bg-cover bg-center px-8 py-8"
      style={{
        backgroundImage: wedding.coverImageUrl
          ? `linear-gradient(to right, rgba(23,22,20,0.75), rgba(23,22,20,0.3)), url(${wedding.coverImageUrl})`
          : undefined,
        backgroundColor: wedding.coverImageUrl ? undefined : '#171614',
      }}
    >
      <div className="flex items-start justify-between flex-wrap gap-6">
        <div>
          <p className="text-terracotta text-xs tracking-widest mb-2">THE WEDDING OF</p>
          <h1 className="font-serif text-3xl md:text-4xl text-ivory mb-3">
            {wedding.partner1Name} &amp; {wedding.partner2Name}
          </h1>
          <div className="flex items-center gap-4 text-ivory/80 text-xs mb-3">
            <span className="flex items-center gap-1.5">
              <LuCalendar size={13} /> {dateLabel} {timeLabel && `• ${timeLabel}`}
            </span>
            {wedding.venue?.name && (
              <span className="flex items-center gap-1.5">
                <LuMapPin size={13} /> {wedding.venue.name}
              </span>
            )}
          </div>
          <p className="font-serif italic text-ivory/70 text-sm">Same love, new chapter</p>
        </div>

        {wedding.weddingDate && <CountdownStrip weddingDate={wedding.weddingDate} />}
      </div>
    </div>
  );
}