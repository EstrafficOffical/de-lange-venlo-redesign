import { Clock, MapPin, Instagram, Facebook } from "lucide-react";

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
            <p className="text-sm leading-relaxed text-foreground/75">
              Actuele openingstijden en evenementen vind je via Instagram, Facebook of Google.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-foreground/55">
              Voor speciale avonden, feestdagen en events kunnen tijden afwijken.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-between rounded-full border border-border px-4 py-3 text-sm uppercase tracking-widest transition hover:border-neon-pink hover:text-neon-pink"
              >
                <span className="flex items-center gap-2"><Instagram className="h-4 w-4" /> Instagram</span>
                <span className="text-foreground/40">→</span>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-between rounded-full border border-border px-4 py-3 text-sm uppercase tracking-widest transition hover:border-neon-blue hover:text-neon-blue"
              >
                <span className="flex items-center gap-2"><Facebook className="h-4 w-4" /> Facebook</span>
                <span className="text-foreground/40">→</span>
              </a>
              <a
                href="https://www.google.com/search?q=De+Lange+Venlo"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-between rounded-full border border-border px-4 py-3 text-sm uppercase tracking-widest transition hover:border-neon-yellow hover:text-neon-yellow"
              >
                <span>Google</span>
                <span className="text-foreground/40">→</span>
              </a>
            </div>
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

        {/* Address row */}
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-gradient-card p-6">
            <MapPin className="mb-3 h-5 w-5 text-neon-pink" />
            <div className="text-xs uppercase tracking-widest text-foreground/50">Adres</div>
            <div className="mt-1 font-display text-2xl tracking-wider">Parade 38, Venlo</div>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Parade+38+Venlo"
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-block text-xs uppercase tracking-widest text-neon-pink hover:text-neon-yellow"
            >
              Route openen →
            </a>
          </div>
          <div className="rounded-2xl border border-border bg-gradient-card p-6">
            <div className="mb-3 flex gap-2">
              <Instagram className="h-5 w-5 text-neon-pink" />
              <Facebook className="h-5 w-5 text-neon-blue" />
            </div>
            <div className="text-xs uppercase tracking-widest text-foreground/50">Social</div>
            <div className="mt-2 flex flex-wrap gap-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-border px-4 py-2 text-sm transition hover:border-neon-pink hover:text-neon-pink"
              >
                Instagram
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
