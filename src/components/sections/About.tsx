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
            Dit is een <strong className="text-foreground">concept redesign</strong> voor De Lange
            op de Parade in Venlo — een bar waar studenten, locals en passanten elkaar tegen het
            lijf lopen. Geen dresscode, geen drempel, wel een goede playlist.
          </p>
          <p className="text-foreground/65">
            Deze pagina laat zien hoe de online aanwezigheid eruit zou kunnen zien: moderner,
            sfeervoller en handiger voor bezoekers. De teksten en beelden zijn een voorstel —
            geen officiële communicatie van het etablissement.
          </p>

          <div className="grid grid-cols-3 gap-4 pt-8">
            {[
              { k: "DO–ZO", v: "Nightlife focus" },
              { k: "Parade", v: "Hart van Venlo" },
              { k: "∞", v: "Goede nachten" },
            ].map((s) => (
              <div key={s.v} className="border-l-2 border-neon-yellow pl-4" style={{ borderColor: "hsl(var(--neon-yellow))" }}>
                <div className="font-display text-3xl text-neon-yellow md:text-4xl">{s.k}</div>
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
