import { useEffect, useRef } from "react";

interface Props {
  src: string;
  className?: string;
}

const ExternalScript = ({ src, className }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let cancelled = false;

    fetch(src)
      .then((r) => r.text())
      .then((code) => {
        if (cancelled || !container) return;
        // Intercept document.write calls from the affiliate script
        const writes: string[] = [];
        const fakeDoc = {
          write: (html: string) => writes.push(html),
          writeln: (html: string) => writes.push(html + "\n"),
        };
        try {
          // eslint-disable-next-line no-new-func
          new Function("document", code)(fakeDoc);
          container.innerHTML = writes.join("");
        } catch (err) {
          console.error("ExternalScript execution failed:", err);
        }
      })
      .catch((err) => console.error("ExternalScript fetch failed:", err));

    return () => {
      cancelled = true;
      if (container) container.innerHTML = "";
    };
  }, [src]);

  return <div ref={containerRef} className={className} />;
};

export default ExternalScript;
