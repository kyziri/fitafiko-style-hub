import { createFileRoute } from "@tanstack/react-router";
import { products } from "@/lib/products";
import hero from "@/assets/hero.jpg";
import atelier from "@/assets/atelier.jpg";

export const Route = createFileRoute("/galerie")({
  head: () => ({
    meta: [
      { title: "Galerie — Fitafiko" },
      { name: "description", content: "Photos de nos réalisations, défilés et nouvelles collections." },
    ],
  }),
  component: Galerie,
});

function Galerie() {
  const images = [hero, ...products.map((p) => p.image), atelier];
  return (
    <section className="container-x py-16 md:py-24">
      <div className="max-w-2xl">
        <p className="eyebrow">Galerie</p>
        <h1 className="mt-4 text-5xl md:text-6xl">Nos réalisations</h1>
        <p className="mt-5 text-muted-foreground">
          Un aperçu de nos créations, clients satisfaits, défilés et collections récentes.
        </p>
      </div>
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((src, i) => (
          <div key={i} className="overflow-hidden rounded-md bg-muted">
            <img src={src} alt={`Création ${i + 1}`} loading="lazy"
              className={`w-full object-cover transition-transform duration-700 hover:scale-105 ${
                i % 3 === 0 ? "aspect-[3/4]" : i % 3 === 1 ? "aspect-square" : "aspect-[4/5]"
              }`} />
          </div>
        ))}
      </div>
    </section>
  );
}
