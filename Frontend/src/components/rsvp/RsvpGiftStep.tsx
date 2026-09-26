import { FiCheck, FiHeart, FiGift } from "react-icons/fi";

export interface WishlistItem {
  id: string;
  name: string;
  description: string;
  price: number;
  claimed: boolean;
}

interface Props {
  wishlist: WishlistItem[];
  selectedItem: WishlistItem | null;
  contribution: string;
  giftChoice: "wishlist" | "contribution" | "none" | null;
  onGiftChoiceChange: (
    choice: "wishlist" | "contribution" | "none"
  ) => void;
  onWishlistSelect: (item: WishlistItem) => void;
  onContributionChange: (value: string) => void;
}

export default function RsvpGiftStep({
  wishlist,
  selectedItem,
  contribution,
  giftChoice,
  onGiftChoiceChange,
  onWishlistSelect,
  onContributionChange,
}: Props) {
  return (
    <div className="space-y-8">

      {/* Header */}
      <div className="text-center">
        <div className="w-12 h-12 rounded-full bg-terracotta/10 text-terracotta flex items-center justify-center mx-auto mb-4">
          <FiHeart size={20} />
        </div>

        <h2 className="font-serif text-3xl text-ink">
          A little something
        </h2>

        <p className="text-muted text-sm leading-6 mt-3 max-w-md mx-auto">
          Your presence is already a gift. If you'd like to celebrate
          with something more, you can choose from the options below.
        </p>
      </div>

      {/* Choices */}
      <div className="space-y-3">

        <button
          type="button"
          onClick={() => onGiftChoiceChange("wishlist")}
          className={`w-full text-left border rounded-2xl p-5 transition ${
            giftChoice === "wishlist"
              ? "border-terracotta bg-terracotta/5"
              : "border-[#D8CFC4] bg-[#FBF9F6] hover:border-terracotta/50"
          }`}
        >
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-terracotta/10 text-terracotta flex items-center justify-center shrink-0">
              <FiGift size={17} />
            </div>

            <div className="flex-1">
              <div className="flex items-center justify-between gap-3">
                <h3 className="font-serif text-lg text-ink">
                  Choose from their wishlist
                </h3>

                {giftChoice === "wishlist" && (
                  <FiCheck
                    className="text-terracotta shrink-0"
                    size={18}
                  />
                )}
              </div>

              <p className="text-muted text-xs leading-5 mt-1">
                Help the couple with something they've chosen
                for their new chapter.
              </p>
            </div>
          </div>
        </button>

        <button
          type="button"
          onClick={() => onGiftChoiceChange("contribution")}
          className={`w-full text-left border rounded-2xl p-5 transition ${
            giftChoice === "contribution"
              ? "border-terracotta bg-terracotta/5"
              : "border-[#D8CFC4] bg-[#FBF9F6] hover:border-terracotta/50"
          }`}
        >
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-terracotta/10 text-terracotta flex items-center justify-center shrink-0">
              <span className="font-serif text-lg">₦</span>
            </div>

            <div className="flex-1">
              <div className="flex items-center justify-between gap-3">
                <h3 className="font-serif text-lg text-ink">
                  Make a contribution
                </h3>

                {giftChoice === "contribution" && (
                  <FiCheck
                    className="text-terracotta shrink-0"
                    size={18}
                  />
                )}
              </div>

              <p className="text-muted text-xs leading-5 mt-1">
                Give any amount you'd like towards their future
                together.
              </p>
            </div>
          </div>
        </button>

        <button
          type="button"
          onClick={() => onGiftChoiceChange("none")}
          className={`w-full text-left border rounded-2xl p-5 transition ${
            giftChoice === "none"
              ? "border-terracotta bg-terracotta/5"
              : "border-[#D8CFC4] bg-[#FBF9F6] hover:border-terracotta/50"
          }`}
        >
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-[#EEE8DF] text-muted flex items-center justify-center shrink-0">
              <span className="font-serif">♡</span>
            </div>

            <div className="flex-1">
              <div className="flex items-center justify-between gap-3">
                <h3 className="font-serif text-lg text-ink">
                  Just being there is enough
                </h3>

                {giftChoice === "none" && (
                  <FiCheck
                    className="text-terracotta shrink-0"
                    size={18}
                  />
                )}
              </div>

              <p className="text-muted text-xs leading-5 mt-1">
                No gift needed. Your presence means everything.
              </p>
            </div>
          </div>
        </button>

      </div>

      {/* Wishlist */}
      {giftChoice === "wishlist" && (
        <div className="space-y-4">

          <div>
            <p className="font-serif text-xl text-ink">
              Their wishlist
            </p>

            <p className="text-muted text-xs mt-1">
              Choose one item you'd like to gift.
            </p>
          </div>

          <div className="space-y-3">
            {wishlist.map((item) => (
              <button
                type="button"
                key={item.id}
                disabled={item.claimed}
                onClick={() => onWishlistSelect(item)}
                className={`w-full text-left border rounded-xl p-4 transition ${
                  selectedItem?.id === item.id
                    ? "border-terracotta bg-terracotta/5"
                    : item.claimed
                    ? "border-[#E4DDD4] bg-[#F1ECE6] opacity-60 cursor-not-allowed"
                    : "border-[#D8CFC4] bg-[#FBF9F6] hover:border-terracotta/50"
                }`}
              >
                <div className="flex items-start justify-between gap-4">

                  <div>
                    <h4 className="font-serif text-base text-ink">
                      {item.name}
                    </h4>

                    <p className="text-muted text-xs mt-1 leading-5">
                      {item.description}
                    </p>
                  </div>

                  <div className="text-right shrink-0">
                    <p className="font-serif text-terracotta">
                      ₦{item.price.toLocaleString()}
                    </p>

                    {item.claimed && (
                      <p className="text-[10px] text-muted mt-1">
                        Already chosen
                      </p>
                    )}
                  </div>

                </div>

                {selectedItem?.id === item.id && (
                  <div className="flex items-center gap-2 mt-3 text-terracotta text-xs">
                    <FiCheck size={14} />
                    Selected
                  </div>
                )}
              </button>
            ))}
          </div>

        </div>
      )}

      {/* Contribution */}
      {giftChoice === "contribution" && (
        <div className="space-y-4">

          <div>
            <p className="font-serif text-xl text-ink">
              Your contribution
            </p>

            <p className="text-muted text-xs mt-1">
              Enter the amount you'd like to contribute.
            </p>
          </div>

          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 font-serif text-muted">
              ₦
            </span>

            <input
              type="number"
              min="1"
              value={contribution}
              onChange={(e) =>
                onContributionChange(e.target.value)
              }
              placeholder="0"
              className="w-full pl-10 pr-4 py-4 bg-[#FBF9F6] border border-[#D8CFC4] rounded-xl text-ink text-lg font-serif focus:outline-none focus:border-terracotta focus:ring-1 focus:ring-terracotta"
            />
          </div>

          <div className="flex gap-2 flex-wrap">
            {[5000, 10000, 20000, 50000].map((amount) => (
              <button
                type="button"
                key={amount}
                onClick={() =>
                  onContributionChange(String(amount))
                }
                className="px-4 py-2 rounded-full border border-[#D8CFC4] text-xs text-muted hover:border-terracotta hover:text-terracotta transition"
              >
                ₦{amount.toLocaleString()}
              </button>
            ))}
          </div>

          <div className="bg-[#EEE8DF] rounded-xl p-4">
            <p className="text-xs text-muted leading-5">
              You'll be able to complete the contribution securely
              after submitting your RSVP.
            </p>
          </div>

        </div>
      )}

    </div>
  );
}