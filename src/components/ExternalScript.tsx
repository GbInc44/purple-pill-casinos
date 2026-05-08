interface Props {
  src: string;
  className?: string;
  width?: number;
  height?: number;
}

const ExternalScript = ({ src, className, width = 468, height = 60 }: Props) => {
  const srcDoc = `<!doctype html><html><head><style>html,body{margin:0;padding:0;overflow:hidden;background:transparent;}a,img{display:block;}</style></head><body><script type="text/javascript" src="${src}"><\/script></body></html>`;

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
