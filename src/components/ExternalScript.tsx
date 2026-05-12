interface Props {
  src: string;
  className?: string;
  width?: number;
  height?: number;
  attributes?: Record<string, string>;
}

const ExternalScript = ({ src, className, width = 468, height = 60, attributes }: Props) => {
  const attrString = attributes
    ? Object.entries(attributes)
        .map(([k, v]) => `${k}="${String(v).replace(/"/g, "&quot;")}"`)
        .join(" ")
    : "";

  const srcDoc = `<!doctype html><html><head><style>html,body{margin:0;padding:0;overflow:hidden;background:transparent;}a,img{display:block;}</style></head><body><script type="text/javascript" src="${src}" ${attrString}><\/script></body></html>`;

  return (
    <iframe
      title="Affiliate banner"
      srcDoc={srcDoc}
      width={width}
      height={height}
      scrolling="no"
      frameBorder={0}
      className={className}
      style={{ border: 0, background: "transparent" }}
    />
  );
};

export default ExternalScript;
