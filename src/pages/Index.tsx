const casinos = Array.from({ length: 17 }, (_, i) => ({
  id: i + 1,
  name: `Casino ${i + 1}`,
  url: "#",
}));

const Index = () => {
  return (
    <div className="min-h-screen py-10 px-4">
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl tracking-widest uppercase font-bold text-destructive-foreground bg-inherit" style={{ fontFamily: "'Orbitron', sans-serif" }}>
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

      <footer className="max-w-6xl mx-auto mt-16 mb-8 text-center text-muted-foreground text-xs leading-relaxed">
        <div className="flex items-center justify-center gap-2 mb-2">
          <span className="inline-flex items-center justify-center h-8 w-8 rounded-full border-2 border-destructive text-destructive font-bold text-sm">
            18+
          </span>
          <span className="font-semibold">18+ | Отговорна игра</span>
        </div>
        <p>Сайтът е предназначен само за лица над 18 години. Хазартът крие риск от зависимост. Играйте отговорно.</p>
        <p className="mt-1">
          Помощ:{" "}
          <a
            href="https://www.begambleaware.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline hover:text-accent transition-colors"
          >
            https://www.begambleaware.org/
          </a>
        </p>
      </footer>
    </div>
  );
};

export default Index;
