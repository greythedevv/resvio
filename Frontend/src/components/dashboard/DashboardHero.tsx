import { FiExternalLink } from "react-icons/fi";
import { Link } from "react-router-dom";

import type { Wedding } from "../../types/dashboard";

interface DashboardHeroProps {
  wedding: Wedding;
}

export default function DashboardHero({
  wedding,
}: DashboardHeroProps) {
  const inviteUrl = `${window.location.origin}/invite/${wedding.slug}`;

  return (
    <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
      <div>
        <h1 className="font-serif text-2xl text-ink">
          {wedding.partner1Name} &amp;{" "}
          {wedding.partner2Name}
        </h1>

        <p className="text-muted text-xs mt-1">
          {wedding.isPublished ? "Live" : "Draft"} ·{" "}
          {new Date(
            wedding.weddingDate
          ).toLocaleDateString(undefined, {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </p>
      </div>

      <div className="flex items-center gap-2">
        <Link
          to={`/weddings/${wedding._id}/edit`}
          className="bg-white border border-border text-ink text-xs font-medium px-4 py-2 rounded-lg hover:border-terracotta transition-colors"
        >
          Edit wedding
        </Link>

        <a
          href={inviteUrl}
          target="_blank"
          rel="noreferrer"
          className="bg-terracotta text-ivory text-xs font-serif px-4 py-2 rounded-lg hover:bg-terracotta-dark transition-colors flex items-center gap-1.5"
        >
          View invitation

          <FiExternalLink size={13} />
        </a>
      </div>
    </div>
  );
}