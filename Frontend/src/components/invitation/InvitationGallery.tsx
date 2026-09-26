interface InvitationGalleryProps {
  images?: string[];
}

export default function InvitationGallery({
  images = [],
}: InvitationGalleryProps) {
  if (!images.length) return null;

  return (
    <section className="py-24 md:py-32 px-6 bg-[#F8F5F0]">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-14">
          <p className="text-terracotta uppercase tracking-[0.25em] text-xs mb-5">
            Moments
          </p>

          <h2 className="font-serif text-4xl md:text-5xl text-ink">
            A Few Memories
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {images.map((image, index) => (
            <div
              key={image + index}
              className={`overflow-hidden ${
                index === 0 ? "col-span-2 row-span-2" : ""
              }`}
            >
              <img
                src={image}
                alt={`Wedding memory ${index + 1}`}
                className="w-full h-full min-h-[180px] object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}