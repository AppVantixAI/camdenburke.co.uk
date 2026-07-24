"use client";

import { useEffect, useState } from "react";

/** True when viewport is below Tailwind `md` (768px). SSR-safe default: true (mobile-first). */
export function useIsMobile(breakpointPx = 768) {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${breakpointPx - 1}px)`);
    const sync = () => setIsMobile(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, [breakpointPx]);

  return isMobile;
}
