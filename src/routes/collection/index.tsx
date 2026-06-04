import { createFileRoute, Link } from "@tanstack/react-router";
import { products } from "@/lib/products";

export const Route = createFileRoute("/collection/")({
  head: () => ({
    meta: [
      { title: "Collection — Fitafiko" },
      { name: "description", content: "Découvrez toutes les créations Fitafiko : prêt-à-porter, cérémonie et pièces sur-mesure." },
      { property: "og:title", content: "Collection Fitafiko" },
      { property: "og:description", content: "Toutes nos créations couture." },
    ],
  }),
  component: Collection,
});

function Collection() {
  return (
    <section className="container-x py-16 md:py-24">
      <div className="max-w-2xl">
        <p className="eyebrow">La collection</p>
        <h1 className="mt-4 text-5xl md:text-6xl">Nos créations</h1>
        <p className="mt-5 text-muted-foreground">
          Une sélection de pièces couture, du quotidien aux grandes occasions.
          Chaque modèle est disponible sur-mesure dans le tissu de votre choix.
        </p>
      </div>

      <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((p) => (
          <Link
            key={p.id}
            to="/collection/$id"
            params={{ id: p.id }}
            className="group block"
          >
            <div className="overflow-hidden rounded-md bg-muted">
              <img
                src={p.image}
                alt={p.name}
                loading="lazy"
                width={900}
                height={1100}
                className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="mt-4 flex items-baseline justify-between">
              <div>
                <p className="eyebrow">{p.category}</p>
                <h3 className="mt-1 text-xl">{p.name}</h3>
              </div>
              <span className="text-sm text-primary">{p.price}</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
