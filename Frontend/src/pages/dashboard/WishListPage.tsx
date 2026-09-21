import { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import {
  LuPlus,
  LuGift,
  LuPencil,
  LuTrash2,
  LuCircleCheck,
  LuPackageOpen,
} from 'react-icons/lu';

import { getWishlist } from '../../services/wishlistService';

import type { Wedding } from '../../types/wedding';
import type { WishlistItem } from '../../types/wishlist';

export default function WishListPage() {
  const { wedding } = useOutletContext<{
    wedding: Wedding | null;
  }>();

  const [items, setItems] = useState<WishlistItem[]>([]);

  useEffect(() => {
    if (!wedding) return;

    getWishlist(wedding._id)
      .then(setItems)
      .catch(() => setItems([]));
  }, [wedding]);

  const claimedCount = items.filter(
    (item) => item.isClaimed
  ).length;

  const availableCount = items.length - claimedCount;

  return (
    <div>
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-6">
        <div>
          <p className="text-[10px] uppercase tracking-[0.16em] text-terracotta font-medium mb-1">
            Gift registry
          </p>

          <h1 className="font-serif text-3xl italic text-ink">
            Wishlist
          </h1>

          <p className="text-body text-sm mt-1">
            Manage the gifts your guests can choose for your wedding.
          </p>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center gap-1.5 bg-ink text-ivory text-xs font-medium px-4 py-2.5 rounded-lg hover:bg-ink/90 transition-colors"
        >
          <LuPlus size={15} />
          Add Item
        </button>
      </div>

      {/* Summary */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <div className="bg-white border border-border rounded-xl p-4">
          <div className="flex items-center gap-2 text-muted mb-2">
            <LuGift size={15} />
            <span className="text-[11px]">
              Total Items
            </span>
          </div>

          <p className="text-xl font-medium text-ink tabular-nums">
            {items.length}
          </p>
        </div>

        <div className="bg-white border border-border rounded-xl p-4">
          <div className="flex items-center gap-2 text-muted mb-2">
            <LuPackageOpen size={15} />
            <span className="text-[11px]">
              Available
            </span>
          </div>

          <p className="text-xl font-medium text-ink tabular-nums">
            {availableCount}
          </p>
        </div>

        <div className="bg-white border border-border rounded-xl p-4">
          <div className="flex items-center gap-2 text-muted mb-2">
            <LuCircleCheck size={15} />
            <span className="text-[11px]">
              Claimed
            </span>
          </div>

          <p className="text-xl font-medium text-ink tabular-nums">
            {claimedCount}
          </p>
        </div>
      </div>

      {/* Wishlist */}
      {items.length === 0 ? (
        <div className="bg-white border border-border rounded-xl py-16 px-6 text-center">
          <div className="w-11 h-11 rounded-full bg-terracotta-light flex items-center justify-center mx-auto mb-3">
            <LuGift
              size={19}
              className="text-terracotta"
            />
          </div>

          <p className="text-ink text-sm font-medium">
            Your wishlist is empty
          </p>

          <p className="text-muted text-xs mt-1 max-w-sm mx-auto">
            Add gifts you'd love to receive so your guests can
            choose something meaningful.
          </p>

          <button
            type="button"
            className="inline-flex items-center gap-1.5 mt-5 bg-ink text-ivory text-xs font-medium px-4 py-2.5 rounded-lg hover:bg-ink/90 transition-colors"
          >
            <LuPlus size={14} />
            Add your first item
          </button>
        </div>
      ) : (
        <div className="bg-white border border-border rounded-xl overflow-hidden">
          {/* Section Header */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-border">
            <div>
              <h2 className="text-sm font-medium text-ink">
                Your Wishlist
              </h2>

              <p className="text-[11px] text-muted mt-1">
                Gifts currently available to your guests.
              </p>
            </div>

            <span className="text-[11px] text-muted">
              {items.length} {items.length === 1 ? 'item' : 'items'}
            </span>
          </div>

          {/* Items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-5">
            {items.map((item) => (
              <div
                key={item._id}
                className="group bg-white border border-border rounded-xl overflow-hidden hover:border-terracotta/30 transition-colors"
              >
                {/* Image */}
                <div className="relative h-36 bg-terracotta-light flex items-center justify-center overflow-hidden">
                  {item.imageUrl ? (
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  ) : (
                    <LuGift
                      size={25}
                      className="text-terracotta"
                    />
                  )}

                  {/* Status */}
                  <span
                    className={`absolute top-2.5 right-2.5 text-[10px] font-medium px-2 py-1 rounded-full ${
                      item.isClaimed
                        ? 'bg-sage-soft text-sage'
                        : 'bg-white text-muted'
                    }`}
                  >
                    {item.isClaimed ? 'Claimed' : 'Available'}
                  </span>
                </div>

                {/* Details */}
                <div className="p-4">
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <p className="text-ink text-sm font-medium truncate">
                        {item.title}
                      </p>

                      {item.price !== undefined &&
                        item.price !== null && (
                          <p className="text-muted text-xs mt-1">
                            ₦{item.price.toLocaleString()}
                          </p>
                        )}
                    </div>

                    <div className="flex items-center gap-1 shrink-0">
                      <button
                        type="button"
                        aria-label={`Edit ${item.title}`}
                        className="w-7 h-7 rounded-md flex items-center justify-center text-muted hover:text-ink hover:bg-ivory transition-colors"
                      >
                        <LuPencil size={13} />
                      </button>

                      <button
                        type="button"
                        aria-label={`Delete ${item.title}`}
                        className="w-7 h-7 rounded-md flex items-center justify-center text-muted hover:text-red-text hover:bg-red-soft transition-colors"
                      >
                        <LuTrash2 size={13} />
                      </button>
                    </div>
                  </div>

                  {/* Claim information */}
                  <div className="mt-3 pt-3 border-t border-border">
                    {item.isClaimed ? (
                      <div className="flex items-center gap-2">
                        <LuCircleCheck
                          size={13}
                          className="text-sage shrink-0"
                        />

                        <p className="text-[11px] text-muted truncate">
                          Claimed by{' '}
                          <span className="text-ink font-medium">
                            {item.claimedBy || 'a guest'}
                          </span>
                        </p>
                      </div>
                    ) : (
                      <p className="text-[11px] text-muted">
                        Available for guests
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}

            {/* Add item card */}
            <button
              type="button"
              className="min-h-[250px] border border-dashed border-border rounded-xl flex flex-col items-center justify-center text-center px-5 hover:border-terracotta/40 hover:bg-ivory/50 transition-colors"
            >
              <div className="w-9 h-9 rounded-full bg-terracotta-light flex items-center justify-center text-terracotta mb-3">
                <LuPlus size={16} />
              </div>

              <p className="text-xs font-medium text-ink">
                Add another item
              </p>

              <p className="text-[10px] text-muted mt-1">
                Add something you'd love to receive.
              </p>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}