import { Clock, MapPin, Phone, Instagram, Facebook } from "lucide-react";

const hours = [
  { day: "Maandag", time: "Gesloten" },
  { day: "Dinsdag", time: "Gesloten" },
  { day: "Woensdag", time: "Gesloten" },
  { day: "Donderdag", time: "20:00 — 03:00", highlight: true },
  { day: "Vrijdag", time: "20:00 — 04:00", highlight: true },
  { day: "Zaterdag", time: "20:00 — 04:00", highlight: true },
  { day: "Zondag", time: "20:00 — 02:00", highlight: true },
];

const Info = () => {
  return (
    <section id="info" className="relative border-t border-border bg-muted/20 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-neon-yellow">
            // Praktisch
          </span>
          <h2 className="mt-3 font-display text-5xl leading-none md:text-7xl">
            Wanneer & <span className="text-neon-blue">waar.</span>
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Hours */}
          <div className="rounded-2xl border border-border bg-gradient-card p-8">
            <div className="mb-6 flex items-center gap-3">
              <Clock className="h-5 w-5 text-neon-yellow" />
              <h3 className="font-display text-2xl tracking-wider">Openingstijden</h3>
            </div>
            <ul className="space-y-3">
              {hours.map((h) => (
                <li
                  key={h.day}
                  className={`flex items-center justify-between border-b border-border/60 pb-3 text-sm ${
                    h.highlight ? "text-foreground" : "text-foreground/40"
                  }`}
                >
                  <span className="uppercase tracking-widest">{h.day}</span>
                  <span className={`font-mono ${h.highlight ? "text-neon-yellow" : ""}`}>
                    {h.time}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Map */}
          <div className="overflow-hidden rounded-2xl border border-border lg:col-span-2">
            <iframe
              title="Locatie De Lange Venlo"
              src="https://www.openstreetmap.org/export/embed.html?bbox=6.166%2C51.367%2C6.176%2C51.373&layer=mapnik&marker=51.370%2C6.171"
              className="h-80 w-full bg-muted lg:h-full"
              loading="lazy"
              style={{ filter: "invert(0.92) hue-rotate(180deg) saturate(0.7)" }}
            />
          </div>
        </div>

        {/* Contact details row */}
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-border bg-gradient-card p-6">
            <MapPin className="mb-3 h-5 w-5 text-neon-pink" />
            <div className="text-xs uppercase tracking-widest text-foreground/50">Adres</div>
            <div className="mt-1 font-display text-2xl tracking-wider">Parade 38</div>
            <div className="text-foreground/70">5911 CB Venlo</div>
          </div>
          <div className="rounded-2xl border border-border bg-gradient-card p-6">
            <Phone className="mb-3 h-5 w-5 text-neon-blue" />
            <div className="text-xs uppercase tracking-widest text-foreground/50">Bellen of appen</div>
            <div className="mt-1 font-display text-2xl tracking-wider">+31 77 000 0000</div>
            <div className="text-foreground/70">info@delangevenlo.nl</div>
          </div>
          <div className="rounded-2xl border border-border bg-gradient-card p-6">
            <div className="mb-3 flex gap-2">
              <Instagram className="h-5 w-5 text-neon-pink" />
              <Facebook className="h-5 w-5 text-neon-blue" />
            </div>
            <div className="text-xs uppercase tracking-widest text-foreground/50">Social</div>
            <div className="mt-1 flex flex-wrap gap-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-border px-4 py-2 text-sm transition hover:border-neon-pink hover:text-neon-pink"
              >
                @delangevenlo
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-border px-4 py-2 text-sm transition hover:border-neon-blue hover:text-neon-blue"
              >
                Facebook
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;
