import { Link } from "react-router-dom";
import type { Guest } from "../../types/dashboard";

interface RecentGuestsProps {
  guests: Guest[];
}

const statusStyles: Record<Guest["rsvpStatus"], string> = {
  attending: "text-sage",
  pending: "text-muted",
  declined: "text-red-500",
};

export default function RecentGuests({
  guests,
}: RecentGuestsProps) {
  return (
    <div className="md:col-span-2 bg-white border border-border rounded-lg p-5">
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-medium text-ink text-sm">
          Recent RSVPs
        </h2>

        <Link
          to="/guests"
          className="text-terracotta text-xs hover:underline"
        >
          View all guests
        </Link>
      </div>

      {guests.length === 0 ? (
        <p className="text-muted text-xs py-6 text-center">
          No RSVPs yet. Share your invitation
          link to get started.
        </p>
      ) : (
        <div className="divide-y divide-border">
          {guests.map((guest) => (
            <div
              key={guest._id}
              className="py-3 flex items-center justify-between"
            >
              <div>
                <p className="text-ink text-sm">
                  {guest.name}
                </p>

                {guest.message && (
                  <p className="text-muted text-xs mt-0.5 line-clamp-1">
                    "{guest.message}"
                  </p>
                )}
              </div>

              <span
                className={`text-xs font-medium capitalize ${statusStyles[guest.rsvpStatus]}`}
              >
                {guest.rsvpStatus}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}