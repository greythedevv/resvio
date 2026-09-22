
import { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import {
  LuCalendarDays,
  LuMapPin,
  LuClock3,
  LuPencil,
  LuHeart,
  LuUsers,
  LuChevronRight,
  LuSettings2,
} from 'react-icons/lu';

import type { Wedding } from '../../types/wedding';

type ProfileTab = 'event' | 'story' | 'settings';

const TABS: {
  id: ProfileTab;
  label: string;
}[] = [
  { id: 'event', label: 'Event Details' },
  { id: 'story', label: 'Our Story' },
  { id: 'settings', label: 'Settings' },
];

export default function ProfilePage() {
  const { wedding } = useOutletContext<{
    wedding: Wedding | null;
  }>();

  const [tab, setTab] = useState<ProfileTab>('event');

  const partner1 = wedding?.partner1Name || 'Partner One';
  const partner2 = wedding?.partner2Name || 'Partner Two';

  const initials = `${partner1[0] || ''}${partner2[0] || ''}`.toUpperCase();

  const formattedDate = wedding?.weddingDate
    ? new Date(wedding.weddingDate).toLocaleDateString(undefined, {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      })
    : 'Not set';

  const formattedDeadline = wedding?.rsvpDeadline
    ? new Date(wedding.rsvpDeadline).toLocaleDateString(undefined, {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      })
    : 'Not set';

  return (
    <div>
      {/* Page Header */}
      <div className="mb-6">
        <p className="text-[10px] uppercase tracking-[0.16em] text-terracotta font-medium mb-1">
          Wedding profile
        </p>

        <h1 className="font-serif text-3xl italic text-ink">
          Profile
        </h1>

        <p className="text-body text-sm mt-1">
          Manage your wedding details, story, and guest settings.
        </p>
      </div>

      {/* Couple Header */}
      <section className="relative overflow-hidden bg-ink rounded-2xl mb-6">
        <div className="absolute -right-16 -top-20 w-56 h-56 rounded-full border border-white/5" />
        <div className="absolute -right-8 -bottom-28 w-64 h-64 rounded-full border border-white/5" />

        <div className="relative p-6 sm:p-7">
          <div className="flex flex-col sm:flex-row sm:items-center gap-5">
            {/* Initials */}
            <div className="w-16 h-16 rounded-full bg-terracotta-light flex items-center justify-center text-terracotta text-lg font-medium shrink-0">
              {initials}
            </div>

            <div className="min-w-0">
              <p className="text-[10px] uppercase tracking-[0.16em] text-ivory/40 mb-1">
                Our Wedding
              </p>

              <h2 className="font-serif italic text-2xl sm:text-3xl text-ivory">
                {partner1} &amp; {partner2}
              </h2>

              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-2 text-xs text-ivory/50">
                <span className="flex items-center gap-1.5">
                  <LuCalendarDays size={12} />
                  {formattedDate}
                </span>

                {wedding?.venue?.name && (
                  <span className="flex items-center gap-1.5">
                    <LuMapPin size={12} />
                    {wedding.venue.name}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <div className="border-b border-border mb-6">
        <div className="flex items-center gap-1 overflow-x-auto">
          {TABS.map((item) => {
            const active = tab === item.id;

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setTab(item.id)}
                className={`relative px-3 py-3 text-xs whitespace-nowrap transition-colors ${
                  active
                    ? 'text-terracotta font-medium'
                    : 'text-muted hover:text-ink'
                }`}
              >
                {item.label}

                {active && (
                  <span className="absolute left-2 right-2 -bottom-px h-0.5 bg-terracotta rounded-full" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Event Details */}
      {tab === 'event' && (
        <div className="max-w-3xl">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-sm font-medium text-ink">
                Event Details
              </h2>

              <p className="text-[11px] text-muted mt-1">
                The basic information about your wedding.
              </p>
            </div>

            <button
              type="button"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-terracotta hover:underline"
            >
              <LuPencil size={13} />
              Edit
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <DetailCard
              icon={LuHeart}
              label="Couple"
              value={`${partner1} & ${partner2}`}
            />

            <DetailCard
              icon={LuCalendarDays}
              label="Wedding Date"
              value={formattedDate}
            />

            <DetailCard
              icon={LuMapPin}
              label="Venue"
              value={wedding?.venue?.name || 'Not set'}
            />

            <DetailCard
              icon={LuMapPin}
              label="Location"
              value={wedding?.venue?.city || 'Not set'}
            />
          </div>

          {/* Event schedule */}
          <div className="bg-white border border-border rounded-xl mt-6 overflow-hidden">
            <div className="flex items-center justify-between px-5 py-4 border-b border-border">
              <div>
                <h3 className="text-sm font-medium text-ink">
                  Wedding Schedule
                </h3>

                <p className="text-[11px] text-muted mt-1">
                  Events and timings for your special day.
                </p>
              </div>

              <button
                type="button"
                className="inline-flex items-center gap-1 text-[11px] text-terracotta font-medium hover:underline"
              >
                <LuPencil size={12} />
                Edit
              </button>
            </div>

            {wedding?.schedule && wedding.schedule.length > 0 ? (
              <div className="divide-y divide-border">
                {wedding.schedule.map((event) => (
                  <div
                    key={event.title}
                    className="flex items-center gap-3 px-5 py-3.5"
                  >
                    <div className="w-8 h-8 rounded-lg bg-terracotta-light flex items-center justify-center text-terracotta shrink-0">
                      <LuClock3 size={14} />
                    </div>

                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-medium text-ink">
                        {event.title}
                      </p>

                      <p className="text-[11px] text-muted mt-0.5">
                        {new Date(event.time).toLocaleTimeString(
                          undefined,
                          {
                            hour: 'numeric',
                            minute: '2-digit',
                          }
                        )}
                      </p>
                    </div>

                    <LuChevronRight
                      size={14}
                      className="text-muted"
                    />
                  </div>
                ))}
              </div>
            ) : (
              <div className="px-5 py-10 text-center">
                <div className="w-9 h-9 rounded-full bg-terracotta-light flex items-center justify-center mx-auto mb-2">
                  <LuClock3
                    size={15}
                    className="text-terracotta"
                  />
                </div>

                <p className="text-xs font-medium text-ink">
                  No schedule added
                </p>

                <p className="text-[10px] text-muted mt-1">
                  Add your ceremony and other wedding events.
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Our Story */}
      {tab === 'story' && (
        <div className="max-w-3xl">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-sm font-medium text-ink">
                Our Story
              </h2>

              <p className="text-[11px] text-muted mt-1">
                Tell your guests the story behind your celebration.
              </p>
            </div>

            <button
              type="button"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-terracotta hover:underline"
            >
              <LuPencil size={13} />
              Edit Story
            </button>
          </div>

          <div className="bg-white border border-border rounded-xl overflow-hidden">
            <div className="h-28 bg-terracotta-light flex items-center justify-center">
              <LuHeart
                size={24}
                className="text-terracotta"
                strokeWidth={1.5}
              />
            </div>

            <div className="p-5 sm:p-6">
              <p className="text-[10px] uppercase tracking-[0.16em] text-terracotta font-medium mb-2">
                {partner1} &amp; {partner2}
              </p>

              <h3 className="font-serif italic text-2xl text-ink mb-4">
                How it all began
              </h3>

              {wedding?.story ? (
                <p className="text-body text-sm leading-7 whitespace-pre-line">
                  {wedding.story}
                </p>
              ) : (
                <div className="py-6 text-center">
                  <p className="text-sm font-medium text-ink">
                    Your story hasn't been added yet.
                  </p>

                  <p className="text-xs text-muted mt-1.5 max-w-sm mx-auto leading-relaxed">
                    Share how you met, your favorite memories,
                    and the journey that brought you here.
                  </p>

                  <button
                    type="button"
                    className="inline-flex items-center gap-1.5 mt-4 bg-ink text-ivory text-xs font-medium px-4 py-2.5 rounded-lg hover:bg-ink/90 transition-colors"
                  >
                    <LuPencil size={13} />
                    Write Our Story
                  </button>
                </div>
              )}
            </div>
          </div>

          <div className="mt-4 px-1">
            <p className="text-[11px] text-muted leading-relaxed">
              Your story can also appear on your public wedding
              website.
            </p>
          </div>
        </div>
      )}

      {/* Settings */}
      {tab === 'settings' && (
        <div className="max-w-3xl">
          <div className="mb-4">
            <h2 className="text-sm font-medium text-ink">
              Wedding Settings
            </h2>

            <p className="text-[11px] text-muted mt-1">
              Control how your RSVP and wedding information works.
            </p>
          </div>

          <div className="bg-white border border-border rounded-xl overflow-hidden">
            <SettingRow
              icon={LuCalendarDays}
              label="RSVP Deadline"
              description="The date guests should submit their RSVP by."
              value={formattedDeadline}
            />

            <SettingRow
              icon={LuUsers}
              label="Allow Plus-Ones"
              description="Allow guests to include an additional person."
              value={
                wedding?.settings?.allowPlusOnes
                  ? 'Enabled'
                  : 'Disabled'
              }
            />

            <SettingRow
              icon={LuUsers}
              label="Show Guest Count Publicly"
              description="Display the number of confirmed guests on your public page."
              value={
                wedding?.settings?.showGuestCountPublicly
                  ? 'Enabled'
                  : 'Disabled'
              }
            />

            <SettingRow
              icon={LuSettings2}
              label="Wedding Details"
              description="Manage the information displayed across your wedding experience."
              value="Manage"
              showArrow
            />
          </div>
        </div>
      )}
    </div>
  );
}

interface DetailCardProps {
  icon: React.ElementType;
  label: string;
  value: string;
}

function DetailCard({
  icon: Icon,
  label,
  value,
}: DetailCardProps) {
  return (
    <div className="bg-white border border-border rounded-xl p-4">
      <div className="flex items-center gap-2 text-muted mb-3">
        <Icon size={14} />
        <span className="text-[11px]">
          {label}
        </span>
      </div>

      <p className="text-sm font-medium text-ink">
        {value}
      </p>
    </div>
  );
}

interface SettingRowProps {
  icon: React.ElementType;
  label: string;
  description: string;
  value: string;
  showArrow?: boolean;
}

function SettingRow({
  icon: Icon,
  label,
  description,
  value,
  showArrow = false,
}: SettingRowProps) {
  return (
    <button
      type="button"
      className="w-full flex items-center gap-3 px-5 py-4 text-left border-b border-border last:border-b-0 hover:bg-ivory/60 transition-colors"
    >
      <div className="w-8 h-8 rounded-lg bg-terracotta-light flex items-center justify-center text-terracotta shrink-0">
        <Icon size={14} />
      </div>

      <div className="flex-1 min-w-0">
        <p className="text-xs font-medium text-ink">
          {label}
        </p>

        <p className="text-[10px] text-muted mt-0.5 leading-relaxed">
          {description}
        </p>
      </div>

      <div className="flex items-center gap-2 shrink-0">
        <span className="text-[11px] text-muted">
          {value}
        </span>

        {showArrow && (
          <LuChevronRight
            size={14}
            className="text-muted"
          />
        )}
      </div>
    </button>
  );
}
