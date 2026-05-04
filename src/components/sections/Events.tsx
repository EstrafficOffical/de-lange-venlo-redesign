// Concept agenda — events kunnen later worden aangepast.

const events = [
  {
    name: "Student Night",
    date: "Voorbeeld",
    day: "DO",
    desc: "Concept voor een doordeweekse studentenavond met aanbiedingen op drankjes.",
    accent: "yellow" as const,
    tag: "Concept",
  },
  {
    name: "Weekend Party",
    date: "Voorbeeld",
    day: "VR",
    desc: "Ideaal voor een lange weekendavond met muziek tot in de kleine uurtjes.",
    accent: "pink" as const,
    tag: "Concept",
  },
  {
    name: "DJ Night",
    date: "Voorbeeld",
    day: "ZA",
    desc: "Denk aan een avond met DJ-sets en een volle dansvloer.",
    accent: "blue" as const,
    tag: "Concept",
  },
  {
    name: "Carnaval Special",
    date: "Voorbeeld",
    day: "★",
    desc: "Concept voor een carnavalsweekend in hartje Venlo. Alaaf!",
    accent: "yellow" as const,
    tag: "Concept",
  },
];

const accentMap = {
  yellow: { text: "text-neon-yellow", border: "border-neon-yellow", bg: "hsl(var(--neon-yellow))", shadow: "shadow-neon" },
  pink: { text: "text-neon-pink", border: "border-neon-pink", bg: "hsl(var(--neon-pink))", shadow: "shadow-neon-pink" },
  blue: { text: "text-neon-blue", border: "border-neon-blue", bg: "hsl(var(--neon-blue))", shadow: "shadow-neon-blue" },
};

const Events = () => {
  return (
    <section id="agenda" className="relative border-t border-border bg-muted/20 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 flex flex-wrap items-end justify-between gap-6">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-neon-pink">
              // Agenda
            </span>
            <h2 className="mt-3 font-display text-5xl leading-none md:text-7xl">
              Wat staat er<br />op de <span className="text-neon-yellow text-glow-yellow">planning?</span>
            </h2>
          </div>
          <p className="max-w-sm text-foreground/65">
            Voorbeeldagenda – events kunnen later worden aangepast. Denk aan vaste avonden,
            DJ-sets en speciale weekenden.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {events.map((e) => {
            const a = accentMap[e.accent];
            return (
              <article
                key={e.name}
                className="group relative overflow-hidden rounded-2xl border border-border bg-gradient-card p-8 transition-all hover:-translate-y-1 hover:border-foreground/30"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                <div
                  className="absolute -right-20 -top-20 h-60 w-60 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-30"
                  style={{ background: a.bg }}
                />
                <div className="relative flex flex-col gap-6 sm:flex-row">
                  <div
                    className="flex h-20 w-20 shrink-0 flex-col items-center justify-center rounded-xl border-2 font-display text-3xl"
                    style={{ borderColor: a.bg, color: a.bg }}
                  >
                    {e.day}
                  </div>
                  <div className="flex-1">
                    <div className="mb-2 flex items-center gap-3">
                      <span
                        className="rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-widest"
                        style={{ background: a.bg, color: "hsl(var(--background))" }}
                      >
                        {e.tag}
                      </span>
                      <span className="text-xs uppercase tracking-widest text-foreground/55">{e.date}</span>
                    </div>
                    <h3 className="font-display text-3xl leading-none md:text-4xl">{e.name}</h3>
                    <p className="mt-3 text-sm text-foreground/70">{e.desc}</p>
                    <div className={`mt-5 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-widest ${a.text}`}>
                      Voorbeeld concept
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-12 text-center text-[11px] uppercase tracking-widest text-foreground/40">
          Voorbeeldagenda – events kunnen later worden aangepast.
        </div>
      </div>
    </section>
  );
};

export default Events;
