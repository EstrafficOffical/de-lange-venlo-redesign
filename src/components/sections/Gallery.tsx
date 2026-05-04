import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";

const items = [
  { src: g1, alt: "Vrienden proosten", className: "md:col-span-2 md:row-span-2 aspect-square" },
  { src: g2, alt: "DJ aan het werk", className: "aspect-[4/3]" },
  { src: g3, alt: "Cocktail in de maak", className: "aspect-[4/3]" },
  { src: g5, alt: "Crowd op de dansvloer", className: "md:col-span-2 aspect-[16/9]" },
  { src: g4, alt: "Lachende gasten", className: "aspect-[4/3]" },
  { src: g6, alt: "Neon licht", className: "aspect-[4/3]" },
];

const Gallery = () => {
  return (
    <section id="sfeer" className="relative border-t border-border bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 flex flex-wrap items-end justify-between gap-6">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-neon-blue">
              // Sfeer
            </span>
            <h2 className="mt-3 font-display text-5xl leading-none md:text-7xl">
              Een avond bij <span className="text-neon-pink text-glow-pink">De Lange.</span>
            </h2>
          </div>
          <p className="max-w-sm text-foreground/65">
            Geen filters, geen poses. Gewoon hoe het er bij ons aan toe gaat.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {items.map((it, i) => (
            <figure
              key={i}
              className={`group relative overflow-hidden rounded-xl border border-border ${it.className}`}
            >
              <img
                src={it.src}
                alt={it.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
