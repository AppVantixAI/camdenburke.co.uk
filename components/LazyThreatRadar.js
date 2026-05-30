import { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';

const ThreatRadar = dynamic(() => import('./ThreatRadar'), { ssr: false });

export default function LazyThreatRadar() {
  const containerRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = containerRef.current;
    if (!node || typeof IntersectionObserver === 'undefined') {
      setVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px 0px' }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="flex shrink-0 items-center justify-center">
      {visible ? <ThreatRadar /> : <div className="h-[280px] w-[280px]" aria-hidden="true" />}
    </div>
  );
}
