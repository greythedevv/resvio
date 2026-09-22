
import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import {
  LuPencil,
  LuSend,
  LuCopy,
  LuCheck,
  LuExternalLink,
  LuUsers,
  LuEye,
  LuMailCheck,
  LuMailOpen,
  LuClock3,
  LuShare2,
} from "react-icons/lu";

import type { Wedding } from "../../types/wedding";

export default function InvitationManagePage() {
  const { wedding } = useOutletContext<{
    wedding: Wedding | null;
  }>();

  const [copied, setCopied] = useState(false);

  /*
   * Email tracking will be connected to the backend later.
   * Keeping the structure here means the UI can use real
   * backend values without needing to redesign the page.
   */
  const emailStats = {
    sent: 0,
    delivered: 0,
    opened: 0,
    pending: 0,
  };

  /*
   * The wedding slug is the identifier used by the public
   * wedding page.
   *
   * Example:
   * /w/john-and-sarah
   */
  const weddingSlug =
    (wedding as (Wedding & { slug?: string }) | null)?.slug?.trim() || "";

  /*
   * This is the actual public URL guests will use.
   */
  const publicUrl = weddingSlug
    ? `${window.location.origin}/w/${encodeURIComponent(weddingSlug)}`
    : "";

  const partner1 = wedding?.partner1Name || "Partner One";
  const partner2 = wedding?.partner2Name || "Partner Two";

  const initials = `${partner1[0] || ""}${partner2[0] || ""}`.toUpperCase();

  const copyLink = async () => {
    if (!publicUrl) return;

    try {
      await navigator.clipboard.writeText(publicUrl);

      setCopied(true);

      window.setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch {
      setCopied(false);
    }
  };

  const openInvitation = () => {
    if (!publicUrl) return;

    window.open(publicUrl, "_blank", "noopener,noreferrer");
  };

  const deliveryRate =
    emailStats.sent > 0
      ? Math.round((emailStats.delivered / emailStats.sent) * 100)
      : 0;

  const openRate =
    emailStats.delivered > 0
      ? Math.round((emailStats.opened / emailStats.delivered) * 100)
      : 0;

  return (
    <div>
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-6">
        <div>
          <p className="text-[10px] uppercase tracking-[0.16em] text-terracotta font-medium mb-1">
            Wedding invitation
          </p>

          <h1 className="font-serif text-3xl italic text-ink">
            Invitations
          </h1>

          <p className="text-body text-sm mt-1">
            Manage your invitation, share your wedding link, and
            track email activity.
          </p>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center gap-1.5 bg-ink text-ivory text-xs font-medium px-4 py-2.5 rounded-lg hover:bg-ink/90 transition-colors"
        >
          <LuSend size={14} />
          Create Invitation
        </button>
      </div>

      {/* Invitation Preview */}
      <section className="bg-white border border-border rounded-2xl overflow-hidden mb-6">
        <div className="flex flex-col lg:flex-row">
          {/* Preview image */}
          <div
            className="relative lg:w-3/5 min-h-[300px] bg-terracotta-light bg-cover bg-center flex items-end"
            style={{
              backgroundImage: wedding?.coverImageUrl
                ? `linear-gradient(to top, rgba(23,22,20,0.75), rgba(23,22,20,0.05)), url(${wedding.coverImageUrl})`
                : undefined,
            }}
          >
            {!wedding?.coverImageUrl && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-14 h-14 rounded-full bg-white/60 flex items-center justify-center mx-auto mb-3 text-terracotta">
                    <span className="font-serif italic text-xl">
                      {initials}
                    </span>
                  </div>

                  <p className="font-serif italic text-xl text-ink">
                    {partner1} &amp; {partner2}
                  </p>
                </div>
              </div>
            )}

            <div className="relative p-5 w-full">
              <span className="inline-flex items-center gap-1.5 bg-white/95 text-ink text-[10px] font-medium px-2.5 py-1.5 rounded-full">
                <LuEye size={11} />
                Invitation Preview
              </span>
            </div>
          </div>

          {/* Invitation details */}
          <div className="flex-1 p-6 sm:p-7">
            <p className="text-[10px] uppercase tracking-[0.16em] text-terracotta font-medium mb-2">
              Your invitation
            </p>

            <h2 className="font-serif italic text-2xl text-ink">
              {partner1} &amp; {partner2}
            </h2>

            <p className="text-xs text-muted mt-2 leading-relaxed">
              Your public wedding page is where guests can learn
              about your celebration and submit their RSVP.
            </p>

            <div className="flex flex-wrap gap-2 mt-5">
              <button
                type="button"
                className="inline-flex items-center justify-center gap-1.5 bg-ink text-ivory text-xs font-medium px-3.5 py-2.5 rounded-lg hover:bg-ink/90 transition-colors"
              >
                <LuPencil size={13} />
                Edit Design
              </button>

              <button
                type="button"
                onClick={openInvitation}
                disabled={!publicUrl}
                className="inline-flex items-center justify-center gap-1.5 border border-border text-ink text-xs font-medium px-3.5 py-2.5 rounded-lg hover:bg-ivory transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <LuExternalLink size={13} />
                Preview
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Public Wedding Link */}
      <section className="bg-white border border-border rounded-xl p-5 mb-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <LuShare2
                size={14}
                className="text-terracotta"
              />

              <h2 className="text-sm font-medium text-ink">
                Your Wedding Link
              </h2>
            </div>

            <p className="text-[11px] text-muted">
              Share this link anywhere. Guests can view your wedding
              and RSVP from the same page.
            </p>
          </div>

          <button
            type="button"
            onClick={copyLink}
            disabled={!publicUrl}
            className="inline-flex items-center justify-center gap-1.5 border border-border text-ink text-xs font-medium px-3.5 py-2.5 rounded-lg hover:bg-ivory transition-colors shrink-0 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {copied ? (
              <>
                <LuCheck size={13} />
                Copied
              </>
            ) : (
              <>
                <LuCopy size={13} />
                Copy link
              </>
            )}
          </button>
        </div>

        <div className="mt-4 flex items-center gap-2 bg-ivory rounded-lg px-3 py-2.5 overflow-hidden">
          {publicUrl ? (
            <>
              <span className="text-xs text-body truncate flex-1">
                {publicUrl}
              </span>

              <button
                type="button"
                onClick={copyLink}
                className="text-muted hover:text-ink transition-colors shrink-0"
                aria-label="Copy wedding link"
              >
                <LuCopy size={14} />
              </button>
            </>
          ) : (
            <span className="text-xs text-muted">
              Wedding link will appear once your wedding slug is available.
            </span>
          )}
        </div>

        {weddingSlug && (
          <div className="flex items-center justify-between gap-3 mt-3">
            <p className="text-[10px] text-muted">
              Your public wedding address uses your wedding slug.
            </p>

            <button
              type="button"
              onClick={openInvitation}
              className="inline-flex items-center gap-1 text-[10px] font-medium text-terracotta hover:text-terracotta/80 transition-colors shrink-0"
            >
              <LuExternalLink size={11} />
              Open page
            </button>
          </div>
        )}
      </section>

      {/* Email Tracking */}
      <section className="mb-6">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-4">
          <div>
            <h2 className="text-sm font-medium text-ink">
              Email Tracking
            </h2>

            <p className="text-[11px] text-muted mt-1">
              Monitor invitation delivery and engagement.
            </p>
          </div>

          <span className="inline-flex items-center gap-1.5 text-[10px] text-muted bg-border/60 px-2.5 py-1.5 rounded-full w-fit">
            <LuClock3 size={11} />
            Email tracking activates when email sending is enabled
          </span>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <EmailStatCard
            icon={LuSend}
            label="Sent"
            value={emailStats.sent}
          />

          <EmailStatCard
            icon={LuMailCheck}
            label="Delivered"
            value={emailStats.delivered}
            percentage={
              emailStats.sent > 0
                ? `${deliveryRate}%`
                : undefined
            }
          />

          <EmailStatCard
            icon={LuMailOpen}
            label="Opened"
            value={emailStats.opened}
            percentage={
              emailStats.delivered > 0
                ? `${openRate}%`
                : undefined
            }
          />

          <EmailStatCard
            icon={LuClock3}
            label="Pending"
            value={emailStats.pending}
          />
        </div>
      </section>

      {/* Email Activity */}
      <section className="bg-white border border-border rounded-xl overflow-hidden mb-6">
        <div className="px-5 py-4 border-b border-border flex items-center justify-between">
          <div>
            <h2 className="text-sm font-medium text-ink">
              Email Activity
            </h2>

            <p className="text-[11px] text-muted mt-1">
              Recent invitation email activity.
            </p>
          </div>

          <button
            type="button"
            disabled
            className="text-xs text-muted cursor-not-allowed"
          >
            View all
          </button>
        </div>

        <div className="px-5 py-12 text-center">
          <div className="w-10 h-10 rounded-full bg-terracotta-light flex items-center justify-center mx-auto mb-3">
            <LuMailCheck
              size={17}
              className="text-terracotta"
            />
          </div>

          <p className="text-sm font-medium text-ink">
            Email tracking is ready
          </p>

          <p className="text-xs text-muted mt-1 max-w-sm mx-auto leading-relaxed">
            Once the email-sending service is connected, sends,
            deliveries, opens, and pending invitations will appear
            here automatically.
          </p>
        </div>
      </section>

      {/* Future Email Sending */}
      <section className="bg-ivory border border-border rounded-xl p-5">
        <div className="flex items-start gap-3">
          <div className="w-9 h-9 rounded-lg bg-white border border-border flex items-center justify-center text-terracotta shrink-0">
            <LuUsers size={15} />
          </div>

          <div>
            <h3 className="text-xs font-medium text-ink">
              Send invitations to your guests
            </h3>

            <p className="text-[11px] text-muted mt-1 leading-relaxed max-w-2xl">
              Email sending will allow you to select guests from
              your guest list, send invitations, and monitor their
              delivery and engagement from this page.
            </p>

            <button
              type="button"
              disabled
              className="inline-flex items-center gap-1.5 mt-3 text-[11px] font-medium text-muted cursor-not-allowed"
            >
              <LuSend size={12} />
              Email sending coming soon
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

interface EmailStatCardProps {
  icon: React.ElementType;
  label: string;
  value: number;
  percentage?: string;
}

function EmailStatCard({
  icon: Icon,
  label,
  value,
  percentage,
}: EmailStatCardProps) {
  return (
    <div className="bg-white border border-border rounded-xl p-4">
      <div className="flex items-center justify-between gap-2 mb-3">
        <div className="flex items-center gap-2 text-muted">
          <Icon size={14} />

          <span className="text-[11px]">
            {label}
          </span>
        </div>

        {percentage && (
          <span className="text-[10px] text-sage font-medium">
            {percentage}
          </span>
        )}
      </div>

      <p className="text-xl font-medium text-ink tabular-nums">
        {value}
      </p>
    </div>
  );
}
