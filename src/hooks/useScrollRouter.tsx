import { useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router";

export function useScrollRouter(sections: string[], scrollThreshold: number) {
  const location = useLocation();
  const navigate = useNavigate();
  const isScrollingRef = useRef(false); // 🔒 scroll lock
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null); // ⏳ debounce timer

  // Scroll when user navigates via navbar
  useEffect(() => {
    const sectionId =
      location.pathname === "/" ? "hero" : location.pathname.substring(1);

    const index = sections.indexOf(sectionId);
    if (index !== -1) {
      const top = index * window.innerHeight;

      isScrollingRef.current = true; // lock observer while scrolling
      window.scrollTo({ top });

      // unlock after animation
      const timeout = setTimeout(() => {
        isScrollingRef.current = false;
      }, 0);

      return () => clearTimeout(timeout);
    }
  }, [location, sections]);

  // Update URL when user scrolls manually
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (isScrollingRef.current) return; // 🔒 skip while animating

        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) {
          if (debounceRef.current) clearTimeout(debounceRef.current);

          debounceRef.current = setTimeout(() => {
            const id = visible.target.id;
            const newPath = id === "hero" ? "/" : `/${id}`;
            if (location.pathname !== newPath) {
              navigate(newPath, { replace: true });
            }
          }, 0); // ⏳ wait 0ms before updating
        }
      },
      { threshold: scrollThreshold }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
      observer.disconnect();
    };
  }, [sections, navigate, location, scrollThreshold]);
}