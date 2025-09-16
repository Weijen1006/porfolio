import { useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router";

export function useScrollRouter(sections: string[], scrollThreshold: number) {
  const location = useLocation();
  const navigate = useNavigate();
  const isScrollingRef = useRef(false); // 🔒 scroll lock

  // Scroll when user navigates via navbar
  useEffect(() => {
    const sectionId =
      location.pathname === "/" ? "hero" : location.pathname.substring(1);

    const index = sections.indexOf(sectionId);
    if (index !== -1) {
      const top = index * window.innerHeight;

      isScrollingRef.current = true; // lock observer while scrolling
      window.scrollTo({ top, behavior: "smooth" });

      // unlock after animation (~600ms is safe for smooth scroll)
      const timeout = setTimeout(() => {
        isScrollingRef.current = false;
      }, 700);

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
          const id = visible.target.id;
          const newPath = id === "hero" ? "/" : `/${id}`;
          if (location.pathname !== newPath) {
            navigate(newPath, { replace: true });
          }
        }
      },
      { threshold: scrollThreshold }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections, navigate, location, scrollThreshold]);
}
