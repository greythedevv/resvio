import { Link, useParams } from "react-router-dom";

import { useInvitation } from "../hooks/useInvitation";

import InvitationHero from "../components/invitation/InvitationHero";
import InvitationIntro from "../components/invitation/InvitationIntro";
import InvitationStory from "../components/invitation/InvitationStory";
import WeddingDetails from "../components/invitation/WeddingDetails";
import InvitationGallery from "../components/invitation/InvitationGallery";
import RsvpSection from "../components/invitation/RsvpSection";
import InvitationFooter from "../components/invitation/InvitationFooter";

export default function InvitationPage() {
  const { slug } = useParams<{ slug: string }>();

  const {
    invitation,
    loading,
    error,
  } = useInvitation(slug);

  if (loading) {
    return (
      <div className="min-h-screen bg-ivory flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-terracotta border-t-transparent rounded-full animate-spin mx-auto mb-4" />

          <p className="font-serif italic text-muted text-sm">
            Preparing your invitation...
          </p>
        </div>
      </div>
    );
  }

  if (error || !invitation) {
    return (
      <div className="min-h-screen bg-ivory flex items-center justify-center px-6">
        <div className="text-center max-w-md">

          <p className="font-serif text-3xl text-ink mb-3">
            Invitation not found
          </p>

          <p className="text-muted text-sm leading-relaxed mb-8">
            This wedding invitation may not be published yet,
            or the link you're using may be incorrect.
          </p>

          <Link
            to="/"
            className="inline-flex px-6 py-3 rounded-full bg-ink text-ivory text-sm hover:opacity-90 transition"
          >
            Back to Resvio
          </Link>

        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-ivory text-ink overflow-hidden">

      <InvitationHero
        partner1Name={invitation.partner1Name}
        partner2Name={invitation.partner2Name}
        weddingDate={invitation.weddingDate}
        city={invitation.venue?.city}
        coverImageUrl={invitation.coverImageUrl}
        slug={slug}
      />

      <InvitationIntro
        weddingDate={invitation.weddingDate}
      />

      {invitation.story && (
        <InvitationStory
          story={invitation.story}
          partner1Name={invitation.partner1Name}
          partner2Name={invitation.partner2Name}
          coverImageUrl={invitation.coverImageUrl}
        />
      )}

      <WeddingDetails
        weddingDate={invitation.weddingDate}
        venue={invitation.venue}
      />

      <InvitationGallery
        images={invitation.galleryImageUrls}
      />

      <RsvpSection
        slug={slug ?? ""}
      />

      <InvitationFooter
        partner1Name={invitation.partner1Name}
        partner2Name={invitation.partner2Name}
      />

    </main>
  );
}