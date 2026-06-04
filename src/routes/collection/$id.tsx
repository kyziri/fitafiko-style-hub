import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, MessageCircle } from "lucide-react";
import { getProduct, products } from "@/lib/products";

export const Route = createFileRoute("/collection/$id")({
  loader: ({ params }) => {
    const product = getProduct(params.id);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.product.name} — Fitafiko` },
          { name: "description", content: loaderData.product.description },
          { property: "og:title", content: `${loaderData.product.name} — Fitafiko` },
          { property: "og:description", content: loaderData.product.description },
          { property: "og:image", content: loaderData.product.image },
        ]
      : [{ title: "Produit — Fitafiko" }],
  }),
  errorComponent: ({ error }) => (
    <div className="container-x py-24 text-center">
      <p className="text-destructive">Erreur : {error.message}</p>
    </div>
  ),
  notFoundComponent: () => (
    <div className="container-x py-24 text-center">
      <h1 className="text-3xl">Produit introuvable</h1>
      <Link to="/collection" className="mt-6 inline-block text-primary hover:underline">
        ← Retour à la collection
      </Link>
    </div>
  ),
  component: ProductPage,
});

function ProductPage() {
  const { product } = Route.useLoaderData();
  const related = products.filter((p) => p.id !== product.id).slice(0, 3);

  return (
    <article className="container-x py-12 md:py-16">
      <Link
        to="/collection"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"
      >
        <ArrowLeft className="h-4 w-4" /> Retour à la collection
      </Link>

      <div className="mt-8 grid gap-12 md:grid-cols-2">
        <div className="overflow-hidden rounded-md bg-muted">
          <img
            src={product.image}
            alt={product.name}
            width={900}
            height={1100}
            className="aspect-[4/5] w-full object-cover"
          />
        </div>
        <div className="flex flex-col">
          <p className="eyebrow">{product.category}</p>
          <h1 className="mt-3 text-4xl md:text-5xl">{product.name}</h1>
          <p className="mt-4 text-2xl text-primary">{product.price}</p>
          <p className="mt-6 leading-relaxed text-muted-foreground">{product.description}</p>

          <div className="mt-8 space-y-3 rounded-md border border-border/70 bg-secondary/40 p-5 text-sm">
            <p className="font-medium text-foreground">Sur-mesure inclus</p>
            <ul className="space-y-1 text-muted-foreground">
              <li>• Prise de mensurations à l'atelier ou à distance</li>
              <li>• Choix du tissu parmi notre sélection</li>
              <li>• Délai de confection : 2 à 3 semaines</li>
              <li>• Retouches incluses</li>
            </ul>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={`https://wa.me/261000000000?text=${encodeURIComponent(
                `Bonjour Fitafiko, je suis intéressé(e) par : ${product.name}`,
              )}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90"
            >
              <MessageCircle className="h-4 w-4" /> Commander via WhatsApp
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-primary/40 px-7 py-3 text-sm font-medium text-primary hover:bg-primary/5"
            >
              Nous contacter
            </Link>
          </div>
        </div>
      </div>

      <section className="mt-24">
        <h2 className="text-3xl">Vous aimerez aussi</h2>
        <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((p) => (
            <Link key={p.id} to="/collection/$id" params={{ id: p.id }} className="group block">
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
              <div className="mt-3 flex items-baseline justify-between">
                <h3 className="text-lg">{p.name}</h3>
                <span className="text-sm text-primary">{p.price}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </article>
  );
}
