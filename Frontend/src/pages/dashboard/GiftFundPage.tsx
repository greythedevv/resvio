import { useState } from "react";
import { LuSettings2 } from "react-icons/lu";
import { useDashboardContext } from "../../hooks/useDashboardContext";
import { useGiftFund } from "../../hooks/useGiftFund";
import GiftSummaryCards from "../../components/gifts/GiftSummaryCards";
import FundOverview from "../../components/gifts/FundOverview";
import ContributionsPanel from "../../components/gifts/ContributionsPanel";
import GivingOptions from "../../components/gifts/GivingOptions";
import ManageFundModal from "../../components/gifts/ManageFundModal";
import AddContributionModal from "../../components/gifts/AddContributionModal";

type GiftModal = "fund" | "add" | null;

export default function GiftsPage() {
  const { wedding } = useDashboardContext();
  const { summary, loading, error, refetch, remove } = useGiftFund(wedding?._id);
  const [modal, setModal] = useState<GiftModal>(null);

  const closeModal = () => setModal(null);

  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-6">
        <div>
          <p className="text-[10px] uppercase tracking-[0.16em] text-terracotta font-medium mb-1">
            Contributions
          </p>
          <h1 className="font-serif text-3xl italic text-ink">Gift Fund</h1>
          <p className="text-body text-sm mt-1">
            Manage your wedding fund and keep track of guest contributions.
          </p>
        </div>

        <button
          type="button"
          onClick={() => setModal("fund")}
          disabled={!wedding}
          className="inline-flex items-center justify-center gap-2 bg-ink text-ivory text-xs font-medium px-4 py-2.5 rounded-lg hover:bg-ink/90 transition-colors disabled:opacity-60"
        >
          <LuSettings2 size={14} />
          Manage Fund
        </button>
      </div>

      {error && (
        <div role="alert" className="bg-red-soft text-red-text text-xs rounded-lg px-3 py-2.5 mb-6">
          {error}
        </div>
      )}

      {loading ? (
        <p className="text-muted text-sm">Loading gift fund...</p>
      ) : (
        <>
          <GiftSummaryCards summary={summary} />
          <FundOverview summary={summary} onSetGoal={() => setModal("fund")} />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <ContributionsPanel
              contributions={summary.contributions}
              count={summary.count}
              onAdd={() => setModal("add")}
              onDelete={remove}
            />
            <GivingOptions />
          </div>
        </>
      )}

      {wedding && modal === "fund" && (
        <ManageFundModal
          wedding={wedding}
          currentGoal={summary.goal}
          onClose={closeModal}
          onSaved={refetch}
        />
      )}
      {wedding && modal === "add" && (
        <AddContributionModal weddingId={wedding._id} onClose={closeModal} onSaved={refetch} />
      )}
    </div>
  );
}