const casinos = Array.from({ length: 17 }, (_, i) => ({
  id: i + 1,
  name: `Casino ${i + 1}`,
  url: "#",
}));

const Index = () => {
  return (
    <div className="min-h-screen py-10 px-4">
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl tracking-widest uppercase font-bold bg-primary-foreground text-destructive-foreground" style={{ fontFamily: "'Orbitron', sans-serif" }}>
          All Casinos BG
        </h1>
      </header>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {casinos.map((casino) => (
          <a
            key={casino.id}
            href={casino.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 rounded-full px-3 py-3 transition-all duration-300 hover:scale-[1.03] hover:shadow-[var(--pill-glow)]"
            style={{
              background: "var(--pill-bg)",
              border: "1px solid var(--pill-border)",
            }}
          >
            <div className="h-12 w-24 shrink-0 rounded-full bg-muted flex items-center justify-center overflow-hidden">
              <img
                src="/placeholder.svg"
                alt={casino.name}
                className="h-full w-full object-cover opacity-60 group-hover:opacity-100 transition-opacity"
              />
            </div>

            <span className="flex-1 text-sm font-semibold text-primary truncate">
              {casino.name}
            </span>

            <span className="shrink-0 rounded-full bg-primary px-4 py-1.5 text-xs font-bold text-primary-foreground transition-colors group-hover:bg-accent">
              Visit Site
            </span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Index;
