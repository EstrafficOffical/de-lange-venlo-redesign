import { Button } from "@/components/ui/button";
import { Instagram, Facebook, Mail } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="relative overflow-hidden border-t border-border bg-background py-24 md:py-32">
      <div className="absolute left-1/2 top-0 h-96 w-[60rem] -translate-x-1/2 rounded-full opacity-20 blur-[140px]" style={{ background: "hsl(var(--neon-yellow))" }} />

      <div className="relative mx-auto max-w-4xl px-6">
        <div className="mb-12 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-neon-pink">
            // Contact
          </span>
          <h2 className="mt-3 font-display text-5xl leading-none md:text-7xl">
            Zeg even<br />
            <span className="text-neon-yellow text-glow-yellow">hallo.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-foreground/65">
            De snelste weg loopt via social media. Een DM op Instagram werkt meestal het beste.
          </p>
          <p className="mx-auto mt-3 max-w-lg text-[11px] uppercase tracking-widest text-foreground/40">
            * Dit is een concept redesign — links zijn voorbeelden
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="group rounded-2xl border border-border bg-gradient-card p-8 transition hover:border-neon-pink"
          >
            <Instagram className="h-7 w-7 text-neon-pink" />
            <div className="mt-6 font-display text-2xl tracking-wider">Instagram</div>
            <div className="mt-1 text-sm text-foreground/60">Stuur een DM</div>
            <div className="mt-6 text-xs uppercase tracking-widest text-foreground/50 transition group-hover:text-neon-pink">
              Open →
            </div>
          </a>

          <a
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer"
            className="group rounded-2xl border border-border bg-gradient-card p-8 transition hover:border-neon-blue"
          >
            <Facebook className="h-7 w-7 text-neon-blue" />
            <div className="mt-6 font-display text-2xl tracking-wider">Facebook</div>
            <div className="mt-1 text-sm text-foreground/60">Stuur een bericht</div>
            <div className="mt-6 text-xs uppercase tracking-widest text-foreground/50 transition group-hover:text-neon-blue">
              Open →
            </div>
          </a>

          <a
            href="mailto:info@delangevenlo.nl"
            className="group rounded-2xl border border-border bg-gradient-card p-8 transition hover:border-neon-yellow"
          >
            <Mail className="h-7 w-7 text-neon-yellow" />
            <div className="mt-6 font-display text-2xl tracking-wider">Mail</div>
            <div className="mt-1 text-sm text-foreground/60 break-all">info@delangevenlo.nl</div>
            <div className="mt-6 text-xs uppercase tracking-widest text-foreground/50 transition group-hover:text-neon-yellow">
              Open →
            </div>
          </a>
        </div>

        <div className="mt-10 text-center">
          <Button asChild variant="outlineNeon" size="lg" className="uppercase tracking-widest">
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              Volg @delangevenlo →
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
