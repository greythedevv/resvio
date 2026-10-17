import { LuHeart, LuPencil } from "react-icons/lu";
import type { Wedding } from "../../types/wedding";

interface Props {
  wedding: Wedding | null;
  onEdit: () => void;
}

export default function StoryTab({ wedding, onEdit }: Props) {
  const partner1 = wedding?.partner1Name || "Partner One";
  const partner2 = wedding?.partner2Name || "Partner Two";

  return (
    <div className="max-w-3xl">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-sm font-medium text-ink">Our Story</h2>
          <p className="text-[11px] text-muted mt-1">
            Tell your guests the story behind your celebration.
          </p>
        </div>

        <button
          type="button"
          onClick={onEdit}
          className="inline-flex items-center gap-1.5 text-xs font-medium text-terracotta hover:underline"
        >
          <LuPencil size={13} />
          Edit Story
        </button>
      </div>

      <div className="bg-white border border-border rounded-xl overflow-hidden">
        <div className="h-28 bg-terracotta-light flex items-center justify-center">
          <LuHeart size={24} className="text-terracotta" strokeWidth={1.5} />
        </div>

        <div className="p-5 sm:p-6">
          <p className="text-[10px] uppercase tracking-[0.16em] text-terracotta font-medium mb-2">
            {partner1} &amp; {partner2}
          </p>

          <h3 className="font-serif italic text-2xl text-ink mb-4">How it all began</h3>

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
                Share how you met, your favorite memories, and the journey that
                brought you here.
              </p>
              <button
                type="button"
                onClick={onEdit}
                className="inline-flex items-center gap-1.5 mt-4 bg-ink text-ivory text-xs font-medium px-4 py-2.5 rounded-lg hover:bg-ink/90 transition-colors"
              >
                <LuPencil size={13} />
                Write Our Story
              </button>
            </div>
          )}
        </div>
      </div>

      <p className="mt-4 px-1 text-[11px] text-muted leading-relaxed">
        Your story also appears on your public wedding website.
      </p>
    </div>
  );
}