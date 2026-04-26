"use client";
import { useState, useRef, useCallback } from "react";
import Image from "next/image";
import { BeforeAfterPair } from "@/lib/types";

export default function BeforeAfterCard({ pair }: { pair: BeforeAfterPair }) {
  const [divider, setDivider] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const updateDivider = useCallback((clientX: number) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    // RTL: invert direction
    const pct = ((rect.right - clientX) / rect.width) * 100;
    setDivider(Math.min(95, Math.max(5, pct)));
  }, []);

  const onMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    updateDivider(e.clientX);
  };
  const onMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (isDragging.current) updateDivider(e.clientX);
    },
    [updateDivider]
  );
  const onMouseUp = () => {
    isDragging.current = false;
  };

  const onTouchMove = useCallback(
    (e: React.TouchEvent) => {
      updateDivider(e.touches[0].clientX);
    },
    [updateDivider]
  );

  return (
    <div className="rounded-3xl overflow-hidden shadow-xl bg-white">
      <div
        ref={containerRef}
        className="relative h-72 select-none cursor-col-resize"
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
        onTouchMove={onTouchMove}
      >
        {/* Before image */}
        <div className="absolute inset-0">
          <Image
            src={pair.beforeUrl}
            alt="לפני"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
          <span className="absolute top-3 end-3 bg-black/60 text-white text-xs px-2 py-1 rounded-full">
            לפני
          </span>
        </div>

        {/* After image — clipped from the right (RTL) */}
        <div
          className="absolute inset-0"
          style={{ clipPath: `inset(0 0 0 ${100 - divider}%)` }}
        >
          <Image
            src={pair.afterUrl}
            alt="אחרי"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
          <span className="absolute top-3 start-3 bg-forest-600/90 text-white text-xs px-2 py-1 rounded-full">
            אחרי
          </span>
        </div>

        {/* Drag handle */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-white/90 shadow-lg flex items-center justify-center"
          style={{ right: `${divider}%`, transform: "translateX(50%)" }}
        >
          <div className="w-8 h-8 bg-white rounded-full shadow-lg border-2 border-forest-400 flex items-center justify-center text-forest-600 font-bold text-xs select-none">
            ↔
          </div>
        </div>
      </div>

      <div className="px-4 py-3 text-center">
        <p className="text-forest-700 text-sm font-medium">{pair.caption}</p>
      </div>
    </div>
  );
}
