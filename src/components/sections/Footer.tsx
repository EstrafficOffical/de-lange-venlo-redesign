import { Instagram, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative border-t border-border bg-background py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="font-display text-3xl tracking-wider text-neon-yellow text-glow-yellow">
              DE LANGE<span className="text-foreground">.</span>
            </div>
            <p className="mt-4 max-w-sm text-sm text-foreground/60">
              De Lange Venlo – Concept redesign. Sfeer, muziek en avonden met vrienden in
              hartje Venlo.
            </p>
            <div className="mt-4 inline-block rounded-full border border-neon-pink/40 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-neon-pink">
              ● Concept redesign
            </div>
          </div>
          <div>
            <div className="mb-4 text-xs font-semibold uppercase tracking-widest text-foreground/50">Bezoek</div>
            <div className="text-foreground/80">Parade 38, Venlo</div>
            <div className="mt-2 text-foreground/60">Actuele tijden via Instagram</div>
          </div>
          <div>
            <div className="mb-4 text-xs font-semibold uppercase tracking-widest text-foreground/50">Volg ons</div>
            <div className="flex gap-3">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full border border-border transition hover:border-neon-pink hover:text-neon-pink">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full border border-border transition hover:border-neon-blue hover:text-neon-blue">
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 text-xs text-foreground/45 md:flex-row md:items-center">
          <div>
            Deze website is een vrijblijvend conceptvoorstel en geen officiële website.
          </div>
          <div className="uppercase tracking-widest">Concept · {new Date().getFullYear()}</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
