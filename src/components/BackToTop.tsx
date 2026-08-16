import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { useNavigate, useRouterState } from "@tanstack/react-router";

export function BackToTop() {
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Jump to the home section. The site sets `scroll-behavior: smooth` on
  // <html>, so we temporarily switch it to "auto" to force an instant jump
  // instead of a slow animated scroll. On a section URL (/about, …) navigate
  // to "/" instead so the address bar matches what's on screen.
  const goTop = () => {
    if (pathname !== "/") {
      navigate({ to: "/" });
      return;
    }
    const root = document.documentElement;
    const prev = root.style.scrollBehavior;
    root.style.scrollBehavior = "auto";
    // First try to scroll to the home section (which has id="home" in Hero component)
    const homeElement = document.querySelector("#home");
    if (homeElement) {
      const top = homeElement.getBoundingClientRect().top + window.scrollY;
      window.scrollTo(0, top);
    } else {
      // Fallback to document top if home section not found
      window.scrollTo(0, 0);
    }
    root.style.scrollBehavior = prev;
  };

  return (
    <button
      type="button"
      onClick={goTop}
      aria-label="Back to top"
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
      className={`fixed right-5 bottom-5 z-40 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-all duration-300 hover:bg-primary/90 focus-visible:ring-2 focus-visible:ring-neon focus-visible:outline-none ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <ArrowUp className="h-5 w-5" aria-hidden />
    </button>
  );
}
