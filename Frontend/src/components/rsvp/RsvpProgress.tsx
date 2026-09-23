interface Props {
  step: number;
}

const steps = [
  "Your details",
  "Your response",
  "Gift",
];

export default function RsvpProgress({ step }: Props) {
  return (
    <div className="mb-10">
      <div className="flex items-center justify-center">
        {steps.map((label, index) => {
          const stepNumber = index + 1;
          const active = stepNumber <= step;

          return (
            <div
              key={label}
              className="flex items-center"
            >
              <div className="flex flex-col items-center">

                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-xs transition ${
                    active
                      ? "bg-terracotta text-ivory"
                      : "bg-[#E5DED5] text-muted"
                  }`}
                >
                  {stepNumber}
                </div>

                <span
                  className={`text-[10px] mt-2 whitespace-nowrap ${
                    active
                      ? "text-terracotta"
                      : "text-muted"
                  }`}
                >
                  {label}
                </span>

              </div>

              {index < steps.length - 1 && (
                <div
                  className={`w-10 sm:w-16 h-px mx-2 mb-5 ${
                    stepNumber < step
                      ? "bg-terracotta"
                      : "bg-[#D8CFC4]"
                  }`}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}