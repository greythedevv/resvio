import { Link } from "react-router-dom";
import {
  FiShare2,
  FiCopy,
} from "react-icons/fi";

interface ShareInvitationProps {
  inviteUrl: string;
  copied: boolean;
  onCopy: () => void;
}

export default function ShareInvitation({
  inviteUrl,
  copied,
  onCopy,
}: ShareInvitationProps) {
  return (
    <div className="bg-white border border-border rounded-lg p-5">
      <h2 className="font-medium text-ink text-sm mb-3 flex items-center gap-2">
        <FiShare2 size={14} />
        Share your invitation
      </h2>

      <div className="flex items-center gap-2 bg-ivory border border-border rounded-lg px-3 py-2">
        <p className="text-muted text-xs truncate flex-1">
          {inviteUrl}
        </p>

        <button
          onClick={onCopy}
          className="text-terracotta shrink-0"
        >
          <FiCopy size={14} />
        </button>
      </div>

      {copied && (
        <p className="text-sage text-xs mt-2">
          Copied!
        </p>
      )}

      <Link
        to="/settings#qr"
        className="block text-center text-xs text-terracotta mt-3 hover:underline"
      >
        Download QR code
      </Link>
    </div>
  );
}