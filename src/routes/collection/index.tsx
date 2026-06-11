import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { products, categories } from "@/lib/products";

export const Route = createFileRoute("/collection/")({
  head: () => ({
    meta: [
      { title: "Boutique — Fitafiko" },
      { name: "description", content: "Découvrez toutes les créations Fitafiko : costumes, chemises, robes, cérémonie, uniformes et accessoires." },
    ],
  }),
  component: Collection,
});

function Collection() {
  const [cat, setCat] = useState<string>("Toutes");
  const list = cat === "Toutes" ? products : products.filter((p) => p.category === cat);
  return (
    <section className="container-x py-16 md:py-24">
      <div className="max-w-2xl">
        <p className="eyebrow">La boutique</p>
        <h1 className="mt-4 text-5xl md:text-6xl">Nos créations</h1>
        <p className="mt-5 text-muted-foreground">
          Une sélection de pièces couture, du quotidien aux grandes occasions. Chaque modèle est
          disponible sur-mesure dans le tissu de votre choix.
        </p>
      </div>

      <div className="mt-10 flex flex-wrap gap-2">
        {["Toutes", ...categories].map((c) => (
          <button key={c} onClick={() => setCat(c)}
            className={`rounded-full border px-4 py-2 text-sm transition ${
              cat === c ? "border-primary bg-primary text-primary-foreground" : "border-border hover:border-primary/60"
            }`}>
            {c}
          </button>
        ))}
      </div>

      <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((p) => (
          <Link key={p.id} to="/collection/$id" params={{ id: p.id }} className="group block">
            <div className="overflow-hidden rounded-md bg-muted">
              <img src={p.image} alt={p.name} loading="lazy" width={900} height={1100}
                className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div className="mt-4 flex items-baseline justify-between">
              <div>
                <p className="eyebrow">{p.category}</p>
                <h3 className="mt-1 text-xl">{p.name}</h3>
                <p className="mt-1 text-xs text-muted-foreground">Délai : {p.delai}</p>
              </div>
              <span className="text-sm text-primary">{p.price}</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
