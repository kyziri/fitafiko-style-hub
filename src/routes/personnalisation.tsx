import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";

export const Route = createFileRoute("/personnalisation")({
  head: () => ({
    meta: [
      { title: "Personnalisation — Fitafiko" },
      { name: "description", content: "Personnalisez votre vêtement sur-mesure : tissu, couleur, col, manches, broderie." },
    ],
  }),
  component: Personnalisation,
});

const opts = {
  type: ["Costume", "Chemise", "Robe", "Boubou", "Uniforme"],
  tissu: ["Laine", "Lin", "Soie", "Coton", "Wax"],
  couleur: ["Bordeaux", "Crème", "Noir", "Bleu nuit", "Or"],
  motifs: ["Uni", "Rayé", "À carreaux", "Floral"],
  col: ["Classique", "Italien", "Mao", "Châle"],
  manche: ["Courte", "3/4", "Longue", "Mousquetaire"],
  boutons: ["Nacre", "Bois", "Métal doré", "Recouverts"],
  broderie: ["Aucune", "Initiales", "Motif personnalisé"],
} as const;

function Personnalisation() {
  const [sel, setSel] = useState({
    type: "Costume", tissu: "Laine", couleur: "Bordeaux", motifs: "Uni",
    col: "Classique", manche: "Longue", boutons: "Nacre", broderie: "Aucune",
  });

  const recap = useMemo(() => Object.entries(sel).map(([k, v]) => `${k}: ${v}`).join(", "), [sel]);
  const wa = `https://wa.me/261340000000?text=${encodeURIComponent("Bonjour Fitafiko, je souhaite personnaliser : " + recap)}`;

  return (
    <section className="container-x py-16 md:py-24">
      <div className="max-w-2xl">
        <p className="eyebrow">Service sur-mesure</p>
        <h1 className="mt-4 text-5xl md:text-6xl">Créez votre pièce</h1>
        <p className="mt-5 text-muted-foreground">
          Composez votre vêtement étape par étape. Notre équipe vous contactera pour finaliser
          votre commande.
        </p>
      </div>

      <div className="mt-12 grid gap-10 lg:grid-cols-[2fr_1fr]">
        <div className="space-y-8">
          {(Object.keys(opts) as Array<keyof typeof opts>).map((k) => (
            <div key={k}>
              <h3 className="mb-3 text-sm font-medium uppercase tracking-wider text-foreground/80">{k}</h3>
              <div className="flex flex-wrap gap-2">
                {opts[k].map((v) => (
                  <button
                    key={v}
                    onClick={() => setSel((s) => ({ ...s, [k]: v }))}
                    className={`rounded-full border px-4 py-2 text-sm transition ${
                      sel[k] === v
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border hover:border-primary/60"
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        <aside className="h-fit rounded-md border border-border/60 bg-secondary/40 p-6 lg:sticky lg:top-28">
          <h3 className="text-2xl">Récapitulatif</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {Object.entries(sel).map(([k, v]) => (
              <li key={k} className="flex justify-between border-b border-border/60 pb-2">
                <span className="text-muted-foreground capitalize">{k}</span>
                <span className="font-medium">{v}</span>
              </li>
            ))}
          </ul>
          <a
            href={wa}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90"
          >
            Commander via WhatsApp
          </a>
        </aside>
      </div>
    </section>
  );
}
