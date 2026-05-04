import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { MessageCircle } from "lucide-react";

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      toast.success("Bericht verzonden! We laten snel van ons horen.");
      (e.target as HTMLFormElement).reset();
      setLoading(false);
    }, 700);
  };

  return (
    <section id="contact" className="relative overflow-hidden border-t border-border bg-background py-24 md:py-32">
      <div className="absolute left-1/2 top-0 h-96 w-[60rem] -translate-x-1/2 rounded-full opacity-20 blur-[140px]" style={{ background: "hsl(var(--neon-yellow))" }} />

      <div className="relative mx-auto max-w-5xl px-6">
        <div className="mb-12 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-neon-pink">
            // Reserveren · Contact
          </span>
          <h2 className="mt-3 font-display text-5xl leading-none md:text-7xl">
            Stuur ons een<br />
            <span className="text-neon-yellow text-glow-yellow">bericht.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-foreground/65">
            Een feestje boeken, een groepsreservering of gewoon iets vragen? Laat het weten.
          </p>
        </div>

        <form onSubmit={onSubmit} className="rounded-3xl border border-border bg-gradient-card p-6 md:p-10">
          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-xs font-semibold uppercase tracking-widest text-foreground/60">
                Naam
              </label>
              <Input required name="name" placeholder="Hoe heet je?" className="border-border bg-background/60 h-12" />
            </div>
            <div>
              <label className="mb-2 block text-xs font-semibold uppercase tracking-widest text-foreground/60">
                E-mail
              </label>
              <Input required type="email" name="email" placeholder="jij@email.nl" className="border-border bg-background/60 h-12" />
            </div>
          </div>
          <div className="mt-5">
            <label className="mb-2 block text-xs font-semibold uppercase tracking-widest text-foreground/60">
              Bericht
            </label>
            <Textarea required name="message" rows={5} placeholder="Vertel ons waar je voor komt…" className="border-border bg-background/60 resize-none" />
          </div>

          <div className="mt-8 flex flex-col items-center justify-between gap-4 sm:flex-row">
            <a
              href="https://wa.me/31770000000"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-foreground/70 transition hover:text-neon-yellow"
            >
              <MessageCircle className="h-4 w-4" />
              Of stuur een WhatsApp
            </a>
            <Button type="submit" variant="neon" size="lg" disabled={loading} className="uppercase tracking-widest">
              {loading ? "Verzenden…" : "Verstuur bericht →"}
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
