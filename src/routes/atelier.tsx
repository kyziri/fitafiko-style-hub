import { createFileRoute } from "@tanstack/react-router";
import atelier from "@/assets/atelier.jpg";

export const Route = createFileRoute("/atelier")({
  head: () => ({
    meta: [
      { title: "L'Atelier — Fitafiko" },
      { name: "description", content: "Découvrez l'atelier Fitafiko, où chaque pièce de couture prend vie entre les mains de nos artisans." },
      { property: "og:title", content: "L'Atelier Fitafiko" },
      { property: "og:description", content: "Tradition, savoir-faire et passion." },
      { property: "og:image", content: atelier },
    ],
  }),
  component: Atelier,
});

function Atelier() {
  return (
    <>
      <section className="container-x py-16 md:py-24">
        <div className="max-w-2xl">
          <p className="eyebrow">L'Atelier</p>
          <h1 className="mt-4 text-5xl md:text-6xl">Le geste, la matière, le temps.</h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Fitafiko est née d'une conviction simple : un vêtement bien fait change
            la manière dont on se tient. Dans notre atelier, nous prenons le temps
            qu'il faut pour réaliser des pièces durables, pensées pour vous.
          </p>
        </div>
      </section>

      <section className="container-x grid gap-10 pb-16 md:grid-cols-2">
        <img
          src={atelier}
          alt="Notre atelier"
          loading="lazy"
          width={1400}
          height={1000}
          className="aspect-[4/3] w-full rounded-md object-cover"
        />
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl">Notre savoir-faire</h2>
          <p className="mt-4 text-muted-foreground">
            Coupe, montage, finitions main : chaque étape est réalisée chez nous,
            par une équipe formée aux techniques de la haute couture. Nous croyons
            que la qualité se voit, mais surtout qu'elle se sent.
          </p>
        </div>
      </section>

      <section className="border-t border-border/60 bg-secondary/40">
        <div className="container-x grid gap-10 py-16 md:grid-cols-3">
          {[
            { k: "01", t: "Rencontre", d: "Nous discutons de votre projet, de vos goûts et de vos mensurations." },
            { k: "02", t: "Création", d: "Choix du tissu, patronage et premier essayage dans notre atelier." },
            { k: "03", t: "Livraison", d: "Votre pièce finalisée, ajustée et prête à être portée." },
          ].map((s) => (
            <div key={s.k}>
              <p className="font-display text-5xl text-primary/70">{s.k}</p>
              <h3 className="mt-3 text-2xl">{s.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
