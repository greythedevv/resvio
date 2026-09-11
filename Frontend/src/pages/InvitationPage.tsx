import { useParams, Link } from "react-router-dom";
import { useInvitation } from "../hooks/useInvitation";

export default function InvitationPage() {
  const { slug } = useParams<{ slug: string }>();
  const { invitation, loading, error } = useInvitation(slug);

  if (loading) {
    return (
      <div className="min-h-screen bg-ivory flex items-center justify-center">
        <p className="text-muted text-sm">Loading invitation...</p>
      </div>
    );
  }

  if (error || !invitation) {
    return (
      <div className="min-h-screen bg-ivory flex items-center justify-center px-6">
        <div className="text-center">
          <p className="font-serif text-xl text-ink mb-2">
            Invitation not found
          </p>

          <p className="text-muted text-sm mb-6">
            This link may be incorrect, or the invitation hasn't been published
            yet.
          </p>

          <Link
            to="/"
            className="text-terracotta text-sm hover:underline"
          >
            Back to Resvio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-ivory">
      {invitation.coverImageUrl && (
        <div
          className="h-56 bg-cover bg-center"
          style={{
            backgroundImage: `url(${invitation.coverImageUrl})`,
          }}
        />
      )}

      <div className="max-w-lg mx-auto px-6 py-10 text-center">
        <h1 className="font-serif text-3xl text-ink mb-2">
          {invitation.partner1Name} &amp; {invitation.partner2Name}
        </h1>

        {invitation.weddingDate && (
          <p className="font-serif italic text-terracotta text-sm mb-6">
            {new Date(invitation.weddingDate).toLocaleDateString(undefined, {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
            {invitation.venue?.city &&
              ` — ${invitation.venue.city}`}
          </p>
        )}

        {invitation.story && (
          <p className="text-body text-sm leading-relaxed mb-8">
            {invitation.story}
          </p>
        )}

        <Link
          to={`/rsvp/${slug}`}
          className="inline-block bg-terracotta text-ivory font-serif text-sm px-8 py-3 rounded-lg hover:bg-terracotta-dark transition-colors"
        >
          RSVP Now
        </Link>
      </div>
    </div>
  );
}