import { Button } from "@/components/ui/button";
import { Instagram, Facebook, Mail, MapPin } from "lucide-react";

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
            Contact &amp;<br />
            <span className="text-neon-yellow text-glow-yellow">socials.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-foreground/70">
            Voor vragen, reserveringen of actuele informatie kun je De Lange Venlo bereiken
            via social media of e-mail.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="group rounded-2xl border border-border bg-gradient-card p-6 transition hover:border-neon-pink"
          >
            <Instagram className="h-6 w-6 text-neon-pink" />
            <div className="mt-5 font-display text-xl tracking-wider">Instagram</div>
            <div className="mt-4 text-xs uppercase tracking-widest text-foreground/50 transition group-hover:text-neon-pink">
              Open →
            </div>
          </a>

          <a
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer"
            className="group rounded-2xl border border-border bg-gradient-card p-6 transition hover:border-neon-blue"
          >
            <Facebook className="h-6 w-6 text-neon-blue" />
            <div className="mt-5 font-display text-xl tracking-wider">Facebook</div>
            <div className="mt-4 text-xs uppercase tracking-widest text-foreground/50 transition group-hover:text-neon-blue">
              Open →
            </div>
          </a>

          <a
            href="mailto:"
            className="group rounded-2xl border border-border bg-gradient-card p-6 transition hover:border-neon-yellow"
          >
            <Mail className="h-6 w-6 text-neon-yellow" />
            <div className="mt-5 font-display text-xl tracking-wider">E-mail</div>
            <div className="mt-4 text-xs uppercase tracking-widest text-foreground/50 transition group-hover:text-neon-yellow">
              Stuur bericht →
            </div>
          </a>

          <a
            href="https://www.google.com/maps/search/?api=1&query=Parade+38+Venlo"
            target="_blank"
            rel="noreferrer"
            className="group rounded-2xl border border-border bg-gradient-card p-6 transition hover:border-neon-pink"
          >
            <MapPin className="h-6 w-6 text-neon-pink" />
            <div className="mt-5 font-display text-xl tracking-wider">Route openen</div>
            <div className="mt-4 text-xs uppercase tracking-widest text-foreground/50 transition group-hover:text-neon-pink">
              Maps →
            </div>
          </a>
        </div>

        <div className="mt-10 text-center">
          <div className="font-display text-2xl tracking-wider">Parade 38, Venlo</div>
          <p className="mt-4 text-[11px] uppercase tracking-widest text-foreground/40">
            Concept redesign – contactgegevens kunnen later worden aangepast.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
