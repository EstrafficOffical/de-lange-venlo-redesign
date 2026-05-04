const About = () => {
  return (
    <section className="relative overflow-hidden border-t border-border bg-background py-24 md:py-32">
      <div className="absolute -left-40 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full opacity-20 blur-[120px]" style={{ background: "hsl(var(--neon-pink))" }} />
      <div className="absolute -right-40 top-0 h-96 w-96 rounded-full opacity-15 blur-[120px]" style={{ background: "hsl(var(--neon-blue))" }} />

      <div className="relative mx-auto grid max-w-7xl gap-16 px-6 md:grid-cols-12">
        <div className="md:col-span-4">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-neon-yellow">
            // Over ons
          </span>
          <h2 className="mt-4 font-display text-5xl leading-none md:text-7xl">
            Geen plek<br />
            zoals <span className="text-neon-pink text-glow-pink">deze.</span>
          </h2>
        </div>

        <div className="space-y-6 text-lg leading-relaxed text-foreground/80 md:col-span-7 md:col-start-6">
          <p>
            Midden op de Parade in Venlo vind je <strong className="text-foreground">De Lange</strong> —
            een bar waar studenten, locals en mensen die net binnen komen lopen elkaar tegen het lijf
            lopen. Geen dresscode, geen drempel, wel een goede playlist.
          </p>
          <p className="text-foreground/65">
            Of je nu komt voor een rustig biertje op donderdag, een cocktail op vrijdag of de
            knalfeesten in het weekend: bij ons zit je goed. Doordeweeks gezellig, in het weekend
            tot diep in de nacht.
          </p>

          <div className="grid grid-cols-3 gap-4 pt-8">
            {[
              { k: "20+", v: "Jaar in Venlo" },
              { k: "4", v: "Avonden p/w open" },
              { k: "∞", v: "Goede nachten" },
            ].map((s) => (
              <div key={s.v} className="border-l-2 border-neon-yellow pl-4" style={{ borderColor: "hsl(var(--neon-yellow))" }}>
                <div className="font-display text-4xl text-neon-yellow md:text-5xl">{s.k}</div>
                <div className="mt-1 text-xs uppercase tracking-widest text-foreground/60">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
