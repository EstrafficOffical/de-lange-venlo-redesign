import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-night.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Sfeer in De Lange Venlo"
          className="h-full w-full object-cover"
          width={1920}
          height={1280}
        />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
      </div>

      {/* Concept badge */}
      <div className="absolute left-1/2 top-4 z-30 -translate-x-1/2 rounded-full border border-neon-pink/40 bg-background/70 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-neon-pink backdrop-blur md:left-auto md:right-6 md:translate-x-0">
        ● Concept redesign — niet officieel
      </div>

      {/* Nav */}
      <nav className="relative z-20 mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:py-8">
        <a href="#" className="font-display text-2xl tracking-wider text-neon-yellow text-glow-yellow md:text-3xl">
          DE LANGE<span className="text-foreground">.</span>
        </a>
        <div className="hidden gap-8 text-sm font-medium uppercase tracking-widest text-foreground/80 md:flex">
          <a href="#agenda" className="transition hover:text-neon-yellow">Agenda</a>
          <a href="#sfeer" className="transition hover:text-neon-yellow">Sfeer</a>
          <a href="#info" className="transition hover:text-neon-yellow">Info</a>
          <a href="#contact" className="transition hover:text-neon-yellow">Contact</a>
        </div>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noreferrer"
          className="hidden text-xs font-semibold uppercase tracking-widest text-neon-pink transition hover:text-neon-yellow md:block"
        >
          @delangevenlo
        </a>
      </nav>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-120px)] max-w-7xl flex-col justify-center px-6 pb-20">
        <div className="mb-6 flex items-center gap-3">
          <span className="h-2 w-2 animate-pulse rounded-full bg-neon-pink" style={{ background: "hsl(var(--neon-pink))" }} />
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-foreground/70">
            Live · Bar · Café · Venlo Centrum
          </span>
        </div>

        <h1 className="font-display text-[clamp(3rem,11vw,9rem)] leading-[0.85] text-foreground">
          Wrong place,<br />
          <span className="text-neon-yellow text-glow-yellow">wrong time,</span><br />
          be there.
        </h1>

        <p className="mt-8 max-w-xl text-base leading-relaxed text-foreground/75 md:text-lg">
          Concept voor <span className="text-foreground">De Lange Venlo</span> — een plek voor
          sfeer, muziek en avonden met vrienden in hartje Venlo. Denk aan een vrijdagavond die
          niet stopt bij middernacht.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Button asChild size="lg" variant="neon" className="font-semibold uppercase tracking-widest">
            <a href="#agenda">Bekijk agenda →</a>
          </Button>
          <Button asChild size="lg" variant="outlineNeon" className="font-semibold uppercase tracking-widest">
            <a href="#contact">Contact &amp; socials</a>
          </Button>
        </div>

        <div className="mt-16 flex flex-wrap gap-x-10 gap-y-4 text-xs font-medium uppercase tracking-[0.25em] text-foreground/50">
          <span>Parade 38, Venlo</span>
          <span>Actuele tijden via Instagram</span>
        </div>
      </div>

      {/* Marquee */}
      <div className="absolute bottom-0 left-0 right-0 z-10 overflow-hidden border-y border-border/50 bg-background/60 py-3 backdrop-blur">
        <div className="marquee flex w-max gap-12 whitespace-nowrap font-display text-xl tracking-wider text-foreground/70 md:text-2xl">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex gap-12">
              <span>★ STUDENT NIGHT DONDERDAG</span>
              <span className="text-neon-yellow">★ WEEKEND PARTY</span>
              <span>★ DJ SETS</span>
              <span className="text-neon-pink">★ COCKTAILS · BIER · SHOTS</span>
              <span>★ CARNAVAL SPECIAL</span>
              <span className="text-neon-blue">★ PARADE 38 VENLO</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
