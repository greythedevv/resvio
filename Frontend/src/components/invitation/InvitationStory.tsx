interface InvitationStoryProps {
  story: string;
  partner1Name: string;
  partner2Name: string;
  coverImageUrl?: string;
}

export default function InvitationStory({
  story,
  partner1Name,
  partner2Name,
  coverImageUrl,
}: InvitationStoryProps) {
  return (
    <section
      id="story"
      className="py-24 md:py-32 px-6 bg-[#E8DED3]"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          <div className="relative">
            {coverImageUrl ? (
              <img
                src={coverImageUrl}
                alt={`${partner1Name} and ${partner2Name}`}
                className="w-full aspect-[4/5] object-cover"
              />
            ) : (
              <div className="w-full aspect-[4/5] bg-[#D8CEC2] flex items-center justify-center">
                <span className="font-serif italic text-2xl text-muted">
                  Our story
                </span>
              </div>
            )}

            <div className="absolute -bottom-5 -right-5 w-32 h-32 border border-terracotta/40" />
          </div>

          <div>
            <p className="text-terracotta uppercase tracking-[0.25em] text-xs mb-5">
              How it began
            </p>

            <h2 className="font-serif text-4xl md:text-5xl text-ink leading-tight mb-8">
              Our Story
            </h2>

            <p className="text-body text-sm md:text-base leading-8 whitespace-pre-line">
              {story}
            </p>

            <p className="font-serif italic text-lg mt-10 text-ink">
              {partner1Name} & {partner2Name}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}