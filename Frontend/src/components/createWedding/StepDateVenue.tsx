interface StepDateVenueProps {
  form: {
    weddingDate: string;
    venueName: string;
    venueAddress: string;
    venueCity: string;
  };

  updateForm: (
    field: string,
    value: string
  ) => void;
}

export default function StepDateVenue({
  form,
  updateForm,
}: StepDateVenueProps) {
  return (
    <div className="space-y-4">
      <div>
        <label className="block text-xs font-medium text-ink mb-1.5">
          Wedding date
        </label>

        <input
          type="date"
          value={form.weddingDate}
          onChange={(e) =>
            updateForm(
              "weddingDate",
              e.target.value
            )
          }
          className="w-full px-3 py-2.5 text-sm border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-terracotta focus:border-transparent"
        />
      </div>

      <div>
        <label className="block text-xs font-medium text-ink mb-1.5">
          Venue name
        </label>

        <input
          type="text"
          value={form.venueName}
          onChange={(e) =>
            updateForm(
              "venueName",
              e.target.value
            )
          }
          placeholder="Eko Hotel & Suites"
          className="w-full px-3 py-2.5 text-sm border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-terracotta focus:border-transparent"
        />
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="block text-xs font-medium text-ink mb-1.5">
            Address
          </label>

          <input
            type="text"
            value={form.venueAddress}
            onChange={(e) =>
              updateForm(
                "venueAddress",
                e.target.value
              )
            }
            className="w-full px-3 py-2.5 text-sm border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-terracotta focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-xs font-medium text-ink mb-1.5">
            City
          </label>

          <input
            type="text"
            value={form.venueCity}
            onChange={(e) =>
              updateForm(
                "venueCity",
                e.target.value
              )
            }
            className="w-full px-3 py-2.5 text-sm border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-terracotta focus:border-transparent"
          />
        </div>
      </div>
    </div>
  );
}