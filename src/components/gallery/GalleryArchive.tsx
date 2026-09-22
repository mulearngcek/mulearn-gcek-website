"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { galleryCategories, type GalleryItem } from "@/content/gallery";
import { Lightbox } from "@/components/gallery/Lightbox";
import { cn } from "@/lib/utils";

/** Repeating composition cycle over a 6-column grid — wide pair, triplet, panorama. */
const SPANS = [
  "col-span-6 sm:col-span-3",
  "col-span-6 sm:col-span-3",
  "col-span-6 sm:col-span-2",
  "col-span-6 sm:col-span-2",
  "col-span-6 sm:col-span-2",
  "col-span-6",
];

type Filter = "all" | (typeof galleryCategories)[number]["id"];

function categoryLabel(id: GalleryItem["category"]) {
  return galleryCategories.find((c) => c.id === id)?.label ?? id;
}

function Plate({
  item,
  onOpen,
}: {
  item: GalleryItem;
  onOpen: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onOpen}
      aria-label={`View photograph: ${item.caption || item.alt}`}
      className="group relative block h-full min-h-36 w-full overflow-hidden rounded-xl bg-paper-soft text-left outline-offset-[-3px] outline-brand-600 focus-visible:outline-2"
    >
      <Image
        src={`/images/gallery/${item.src}`}
        alt={item.alt}
        width={800}
        height={600}
        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        className="h-full w-full object-cover transition-transform duration-300 ease-out-soft group-hover:scale-[1.02] motion-reduce:transition-none"
      />
      {item.caption && (
        <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/50 to-transparent px-4 pt-10 pb-3">
          <span className="truncate text-sm font-medium text-white">
            {item.caption}
          </span>
          {item.date && (
            <span className="ml-2 text-xs text-white/70">{item.date}</span>
          )}
        </span>
      )}
    </button>
  );
}

function PendingPlate({ label }: { label: string }) {
  return (
    <div
      aria-hidden="true"
      className="flex h-full min-h-36 flex-col items-center justify-center gap-2 rounded-xl border border-ink/5 bg-paper-soft"
    >
      <span className="size-10 rounded-xl bg-brand-50 font-display text-lg font-bold text-brand-300 flex items-center justify-center">μ</span>
      <span className="font-mono text-[10px] uppercase tracking-wider text-ink-muted">
        {label}
      </span>
    </div>
  );
}

export function GalleryArchive({ items }: { items: GalleryItem[] }) {
  const [filter, setFilter] = useState<Filter>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const counts = useMemo(() => {
    const map = new Map<Filter, number>([["all", items.length]]);
    for (const cat of galleryCategories) {
      map.set(cat.id, items.filter((i) => i.category === cat.id).length);
    }
    return map;
  }, [items]);

  const filtered = useMemo(
    () => (filter === "all" ? items : items.filter((i) => i.category === filter)),
    [items, filter],
  );

  // Empty archive — show clean pending plates
  if (items.length === 0) {
    return (
      <div>
        <div className="grid auto-rows-[150px] grid-cols-6 gap-4 sm:auto-rows-[190px]">
          {galleryCategories.map((cat, i) => (
            <div key={cat.id} className={cn(SPANS[i % SPANS.length])}>
              <PendingPlate label={cat.label} />
            </div>
          ))}
        </div>
        <p className="mt-5 text-xs text-ink-muted">
          Photos coming soon — stay tuned for workshop and activity highlights.
        </p>
      </div>
    );
  }

  return (
    <div>
      {/* Filter tabs */}
      <div
        role="group"
        aria-label="Filter photographs by category"
        className="flex flex-wrap gap-2"
      >
        {(["all", ...galleryCategories.map((c) => c.id)] as Filter[]).map((id) => {
          const active = filter === id;
          const count = counts.get(id) ?? 0;
          if (count === 0 && id !== "all") return null;
          return (
            <button
              key={id}
              type="button"
              onClick={() => setFilter(id)}
              aria-pressed={active}
              className={cn(
                "min-h-10 whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-colors duration-150 outline-offset-2 outline-brand-600 focus-visible:outline-2",
                active
                  ? "bg-brand-600 text-white"
                  : "bg-paper-soft text-ink-soft hover:bg-brand-50 hover:text-brand-700",
              )}
            >
              {id === "all" ? "All" : categoryLabel(id)}
              <span className={cn("ml-1.5", active ? "text-brand-200" : "text-ink-muted")}>
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Plates */}
      <div className="mt-8 grid auto-rows-[170px] grid-cols-6 gap-4 sm:auto-rows-[220px] lg:auto-rows-[260px]">
        {filtered.map((item, i) => (
          <div key={item.src} className={cn(SPANS[i % SPANS.length])}>
            <Plate
              item={item}
              onOpen={() => setLightboxIndex(i)}
            />
          </div>
        ))}
      </div>

      <p className="mt-5 text-xs text-ink-muted">
        Showing {filtered.length} of {items.length} · Click a photo to enlarge
      </p>

      {lightboxIndex !== null && (
        <Lightbox
          items={filtered}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={setLightboxIndex}
        />
      )}
    </div>
  );
}
