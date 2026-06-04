import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Scissors, Sparkles, HandHeart } from "lucide-react";
import hero from "@/assets/hero.jpg";
import atelier from "@/assets/atelier.jpg";
import { products } from "@/lib/products";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Fitafiko — Maison de couture | Votre style, notre savoir-faire" },
      { name: "description", content: "Découvrez Fitafiko, maison de couture créant des pièces uniques sur-mesure. Prêt-à-porter, cérémonie et créations exclusives." },
      { property: "og:title", content: "Fitafiko — Maison de couture" },
      { property: "og:description", content: "Votre style, notre savoir-faire." },
    ],
  }),
  component: Home,
});

function Home() {
  const featured = products.slice(0, 3);
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="container-x grid items-center gap-12 py-16 md:grid-cols-2 md:py-24">
          <div className="order-2 md:order-1">
            <p className="eyebrow">Maison de couture · depuis 2020</p>
            <h1 className="mt-5 font-display text-5xl leading-[1.05] text-foreground md:text-7xl">
              L'élégance <em className="text-primary not-italic">cousue</em><br />
              à votre mesure.
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
              Chez Fitafiko, chaque pièce raconte votre histoire. Du choix du tissu
              à la dernière finition, nous créons des vêtements pensés pour vous.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/collection"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-medium text-primary-foreground transition hover:bg-primary/90"
              >
                Découvrir la collection
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/atelier"
                className="inline-flex items-center gap-2 rounded-full border border-primary/40 px-7 py-3 text-sm font-medium text-primary transition hover:bg-primary/5"
              >
                Notre atelier
              </Link>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="relative">
              <div className="absolute -inset-4 -z-10 rounded-md bg-accent/30" />
              <img
                src={hero}
                alt="Création Fitafiko portée par une mannequin"
                width={1600}
                height={1280}
                className="aspect-[4/5] w-full rounded-md object-cover shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="border-y border-border/60 bg-secondary/40">
        <div className="container-x grid gap-10 py-16 md:grid-cols-3">
          {[
            { icon: Scissors, title: "Sur-mesure", text: "Chaque vêtement est coupé et cousu selon vos mensurations exactes." },
            { icon: HandHeart, title: "Fait main", text: "Confection artisanale dans notre atelier, avec une attention au moindre détail." },
            { icon: Sparkles, title: "Tissus nobles", text: "Soie, laine, lin et wax sélectionnés avec soin chez les meilleurs fournisseurs." },
          ].map(({ icon: Icon, title, text }) => (
            <div key={title} className="flex flex-col items-start">
              <Icon className="h-7 w-7 text-primary" />
              <h3 className="mt-4 text-2xl">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured */}
      <section className="container-x py-20">
        <div className="flex items-end justify-between">
          <div>
            <p className="eyebrow">Sélection</p>
            <h2 className="mt-3 text-4xl md:text-5xl">Pièces signature</h2>
          </div>
          <Link to="/collection" className="hidden text-sm text-primary hover:underline md:inline">
            Voir tout →
          </Link>
        </div>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {featured.map((p) => (
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

      {/* Atelier teaser */}
      <section className="container-x grid items-center gap-12 py-20 md:grid-cols-2">
        <img
          src={atelier}
          alt="L'atelier Fitafiko"
          loading="lazy"
          width={1400}
          height={1000}
          className="aspect-[4/3] w-full rounded-md object-cover"
        />
        <div>
          <p className="eyebrow">L'Atelier</p>
          <h2 className="mt-3 text-4xl md:text-5xl">Là où naissent vos pièces.</h2>
          <p className="mt-6 text-muted-foreground">
            Notre atelier est un lieu vivant où se rencontrent tradition et modernité.
            Chaque création passe entre les mains de couturières expérimentées qui
            transforment vos idées en pièces inoubliables.
          </p>
          <Link
            to="/atelier"
            className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
          >
            En savoir plus <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
