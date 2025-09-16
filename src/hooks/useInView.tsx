import { useState, useEffect, useRef } from "react";

export function useInView(options = { threshold: 0.6 }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const element = ref.current; // ✅ snapshot

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      options
    );

    observer.observe(element);

    return () => {
      if (element) observer.unobserve(element); // ✅ cleanup uses snapshot
    };
  }, [options]);

  return { ref, inView };
}