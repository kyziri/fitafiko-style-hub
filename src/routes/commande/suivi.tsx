import { createFileRoute } from "@tanstack/react-router";
import { Check, Clock } from "lucide-react";

export const Route = createFileRoute("/commande/suivi")({
  head: () => ({ meta: [{ title: "Suivi de commande — Fitafiko" }] }),
  component: Suivi,
});

const statuses = [
  { t: "En attente", done: true },
  { t: "Confirmée", done: true },
  { t: "En fabrication", done: true, current: true },
  { t: "Expédiée", done: false },
  { t: "Livrée", done: false },
];

function Suivi() {
  return (
    <section className="container-x py-16 md:py-24">
      <p className="eyebrow">Suivi</p>
      <h1 className="mt-3 text-4xl md:text-5xl">Commande #FTK-1042</h1>
      <p className="mt-2 text-muted-foreground">Blazer Bordeaux · 320 000 Ar · passée le 28 mai 2026</p>

      <div className="mt-12 max-w-3xl">
        <ol className="space-y-6">
          {statuses.map((s, i) => (
            <li key={s.t} className="flex items-start gap-4">
              <div className={`mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 ${
                s.done ? "border-primary bg-primary text-primary-foreground" : "border-border text-muted-foreground"
              }`}>
                {s.done ? <Check className="h-4 w-4" /> : <Clock className="h-4 w-4" />}
              </div>
              <div>
                <p className={`text-lg ${s.current ? "font-semibold text-primary" : ""}`}>{s.t}</p>
                <p className="text-sm text-muted-foreground">
                  {s.done ? `Étape ${i + 1} validée` : `Étape ${i + 1} à venir`}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
