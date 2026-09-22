"use client";

import { useCallback, useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, X } from "lucide-react";
import { galleryCategories, type GalleryItem } from "@/content/gallery";
import { trapTabKey } from "@/lib/focus-trap";

type LightboxProps = {
  items: GalleryItem[];
  index: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
};

export function Lightbox({ items, index, onClose, onNavigate }: LightboxProps) {
  const item = items[index];
  const total = items.length;
  const closeRef = useRef<HTMLButtonElement>(null);
  const rootRef = useRef<HTMLDivElement>(null);

  const goPrev = useCallback(() => {
    onNavigate((index - 1 + total) % total);
  }, [index, total, onNavigate]);

  const goNext = useCallback(() => {
    onNavigate((index + 1) % total);
  }, [index, total, onNavigate]);

  // Keyboard navigation + focus trap, scroll lock, initial focus, focus restore
  useEffect(() => {
    const trigger = document.activeElement as HTMLElement | null;

    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") goPrev();
      if (event.key === "ArrowRight") goNext();
      if (rootRef.current) trapTabKey(rootRef.current, event);
    };
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKeyDown);
      trigger?.focus();
    };
  }, [onClose, goPrev, goNext]);

  if (!item) return null;

  const categoryLabel =
    galleryCategories.find((c) => c.id === item.category)?.label ?? item.category;

  return (
    <div
      ref={rootRef}
      role="dialog"
      aria-modal="true"
      aria-label={`${item.caption || categoryLabel} — photograph ${index + 1} of ${total}`}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      className="fixed inset-0 z-[70] flex flex-col bg-black/90 backdrop-blur-sm"
    >
      {/* Top bar */}
      <div className="flex shrink-0 items-center justify-between px-4 py-3 sm:px-6">
        <p className="text-sm text-white/70">
          {index + 1} / {total}
        </p>
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Close viewer"
          className="inline-flex size-10 items-center justify-center rounded-full text-white/70 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-2 focus-visible:outline-brand-300"
        >
          <X className="size-5" aria-hidden="true" />
        </button>
      </div>

      {/* Image */}
      <div className="relative min-h-0 flex-1 p-4 sm:p-8">
        <Image
          key={item.src}
          src={`/images/gallery/${item.src}`}
          alt={item.alt}
          fill
          sizes="100vw"
          className="object-contain"
          priority
        />
      </div>

      {/* Caption + controls */}
      <div className="shrink-0">
        <div className="flex items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <p className="min-w-0 truncate text-sm text-white/85">
            {item.caption ?? item.alt}
          </p>
          <p className="hidden shrink-0 text-xs text-white/50 sm:block">
            {categoryLabel}
            {item.date ? ` · ${item.date}` : ""}
          </p>
        </div>
        <div className="grid grid-cols-2 sm:hidden">
          <button
            type="button"
            onClick={goPrev}
            className="flex min-h-12 items-center justify-center gap-2 border-t border-white/10 py-3 text-sm font-medium text-white/70 transition-colors hover:text-white"
          >
            <ArrowLeft className="size-4" aria-hidden="true" /> Prev
          </button>
          <button
            type="button"
            onClick={goNext}
            className="flex min-h-12 items-center justify-center gap-2 border-t border-l border-white/10 py-3 text-sm font-medium text-white/70 transition-colors hover:text-white"
          >
            Next <ArrowRight className="size-4" aria-hidden="true" />
          </button>
        </div>
      </div>

      {/* Desktop side arrows */}
      <button
        type="button"
        onClick={goPrev}
        aria-label="Previous photograph"
        className="absolute left-4 top-1/2 hidden size-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-brand-300 lg:inline-flex"
      >
        <ArrowLeft className="size-5" aria-hidden="true" />
      </button>
      <button
        type="button"
        onClick={goNext}
        aria-label="Next photograph"
        className="absolute right-4 top-1/2 hidden size-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-brand-300 lg:inline-flex"
      >
        <ArrowRight className="size-5" aria-hidden="true" />
      </button>
    </div>
  );
}
