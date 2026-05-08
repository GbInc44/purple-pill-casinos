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

    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = src;
    script.async = true;
    container.appendChild(script);

    return () => {
      container.innerHTML = "";
    };
  }, [src]);

  return <div ref={containerRef} className={className} />;
};

export default ExternalScript;
