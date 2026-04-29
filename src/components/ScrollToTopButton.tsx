import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollUp = () =>
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

  return (
    <button
      type="button"
      aria-label="Към началото"
      onClick={scrollUp}
      className={`fixed bottom-6 right-6 z-50 h-12 w-12 rounded-full flex items-center justify-center transition-all duration-300 ${
        visible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-3 pointer-events-none"
      }`}
      style={{
        background: "transparent",
        border: "1px solid hsl(45, 100%, 55%)",
        color: "hsl(45, 100%, 55%)",
        boxShadow: "0 0 10px hsla(45, 100%, 55%, 0.45)",
      }}
    >
      <ArrowUp size={20} strokeWidth={2.5} />
    </button>
  );
};

export default ScrollToTopButton;
