import  { useState } from 'react';
import { LuShare2, LuCopy, LuCheck } from 'react-icons/lu';
import type { Wedding } from '../../types/wedding';

interface Props {
  wedding: Wedding;
  totalGuests: number;
}

export default function EventGlance({ wedding, totalGuests }: Props) {
  const [copied, setCopied] = useState(false);
  const inviteUrl = `${window.location.origin}/invite/${wedding.slug}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(inviteUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-sm font-medium text-ink mb-3 flex items-center gap-2">
          <LuShare2 size={15} strokeWidth={1.75} /> Share invitation
        </h2>
        <div className="space-y-2 text-sm mb-3">
          <div className="flex justify-between">
            <span className="text-muted">Event status</span>
            <span className="text-ink font-medium">{wedding.isPublished ? 'Live' : 'Draft'}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted">Invitation</span>
            <span className="text-ink font-medium">{wedding.isPublished ? 'Published' : 'Unpublished'}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted">Guests</span>
            <span className="text-ink font-medium">{totalGuests}</span>
          </div>
        </div>

        <div className="flex items-center gap-2 bg-white border border-border rounded-lg px-3 py-2 mb-2">
          <p className="text-muted text-xs truncate flex-1">{inviteUrl}</p>
          <button onClick={handleCopy} className="text-terracotta shrink-0" aria-label="Copy link">
            {copied ? <LuCheck size={14} /> : <LuCopy size={14} />}
          </button>
        </div>
        <button
          onClick={handleCopy}
          className="w-full bg-white border border-border text-ink text-sm py-2 rounded-lg hover:border-terracotta transition-colors mb-1.5"
        >
          {copied ? 'Copied!' : 'Copy link'}
        </button>
        <p className="text-muted text-xs">Anyone with this link can view your invitation.</p>
      </div>
    </div>
  );
}