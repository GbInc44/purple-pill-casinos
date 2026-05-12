import { useRef, useEffect, useState } from "react";

interface Props {
  src: string;
  className?: string;
  width?: number;
  height?: number;
  attributes?: Record<string, string>;
}

const ExternalScript = ({ src, className, width = 468, height = 60, attributes }: Props) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const update = () => {
      if (!wrapperRef.current) return;
      const parent = wrapperRef.current.parentElement;
      const available = parent ? parent.clientWidth : wrapperRef.current.clientWidth;
      setScale(Math.min(1, available / width));
    };
    update();
    window.addEventListener("resize", update);
    const ro = new ResizeObserver(update);
    if (wrapperRef.current?.parentElement) ro.observe(wrapperRef.current.parentElement);
    return () => {
      window.removeEventListener("resize", update);
      ro.disconnect();
    };
  }, [width]);

  const attrString = attributes
    ? Object.entries(attributes)
        .map(([k, v]) => `${k}="${String(v).replace(/"/g, "&quot;")}"`)
        .join(" ")
    : "";

  const srcDoc = `<!doctype html><html><head><style>html,body{margin:0;padding:0;overflow:hidden;background:transparent;}a,img{display:block;}</style></head><body><script type="text/javascript" src="${src}" ${attrString}><\/script></body></html>`;

  const scaledWidth = width * scale;
  const scaledHeight = height * scale;

  return (
    <div
      ref={wrapperRef}
      className={className}
      style={{
        width: scaledWidth,
        height: scaledHeight,
        overflow: "hidden",
        position: "relative",
      }}
    >
      <iframe
        title="Affiliate banner"
        srcDoc={srcDoc}
        width={width}
        height={height}
        scrolling="no"
        frameBorder={0}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          border: 0,
          background: "transparent",
          transform: `scale(${scale})`,
          transformOrigin: "top left",
          width,
          height,
        }}
      />
    </div>
  );
};

export default ExternalScript;
