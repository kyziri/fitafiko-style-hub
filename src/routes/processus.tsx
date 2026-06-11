import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/processus")({
  head: () => ({
    meta: [
      { title: "Processus de commande — Fitafiko" },
      { name: "description", content: "Les étapes de votre commande chez Fitafiko, du choix du modèle à la livraison." },
    ],
  }),
  component: Processus,
});

const steps = [
  { k: "01", t: "Choix du modèle", d: "Sélectionnez une pièce dans notre catalogue ou décrivez-nous votre projet." },
  { k: "02", t: "Personnalisation", d: "Tissu, couleur, finitions : tout est ajusté selon vos envies." },
  { k: "03", t: "Prise de mesures", d: "En ligne ou à l'atelier, nous prenons vos mesures avec précision." },
  { k: "04", t: "Validation", d: "Devis détaillé, acompte et confirmation de votre commande." },
  { k: "05", t: "Fabrication", d: "Coupe, montage et finitions main dans notre atelier." },
  { k: "06", t: "Livraison", d: "Livraison à domicile ou retrait en atelier, ajustements offerts." },
];

function Processus() {
  return (
    <section className="container-x py-16 md:py-24">
      <div className="max-w-2xl">
        <p className="eyebrow">Processus</p>
        <h1 className="mt-4 text-5xl md:text-6xl">Comment ça marche</h1>
        <p className="mt-5 text-muted-foreground">
          De votre première idée à la pièce finie, voici les six étapes de notre accompagnement.
        </p>
      </div>
      <div className="mt-14 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {steps.map((s) => (
          <div key={s.k} className="rounded-md border border-border/60 p-8">
            <p className="font-display text-5xl text-primary/70">{s.k}</p>
            <h3 className="mt-3 text-2xl">{s.t}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
