interface InvitationFooterProps {
  partner1Name: string;
  partner2Name: string;
}

export default function InvitationFooter({
  partner1Name,
  partner2Name,
}: InvitationFooterProps) {
  return (
    <footer className="bg-ink text-ivory border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">

        <p className="font-serif italic text-lg">
          {partner1Name} & {partner2Name}
        </p>

        <p className="text-xs text-ivory/40">
          Made with Resvio
        </p>

      </div>
    </footer>
  );
}