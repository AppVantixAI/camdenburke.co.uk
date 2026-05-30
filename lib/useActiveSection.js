import { useEffect, useState } from 'react';

export function useActiveSection(sectionIds) {
  const [activeId, setActiveId] = useState(sectionIds[0] || '');

  useEffect(() => {
    if (typeof window === 'undefined' || sectionIds.length === 0) {
      return undefined;
    }

    const onScroll = () => {
      const headerHeight =
        parseInt(
          getComputedStyle(document.documentElement).getPropertyValue('--header-height'),
          10
        ) || 120;

      let current = sectionIds[0];
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= headerHeight + 48) {
          current = id;
        }
      }
      setActiveId(current);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [sectionIds]);

  return activeId;
}
