import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Fitafiko" },
      { name: "description", content: "Questions fréquentes sur nos services de couture sur-mesure." },
    ],
  }),
  component: FAQ,
});

const faqs = [
  { q: "Quel est le délai de fabrication ?", a: "Entre 10 jours et 4 semaines selon la pièce et les finitions choisies." },
  { q: "Comment prendre mes mesures ?", a: "Vous pouvez utiliser notre formulaire en ligne ou réserver une séance à l'atelier." },
  { q: "Puis-je modifier ma commande ?", a: "Oui, jusqu'à 48h après validation. Au-delà, contactez-nous directement." },
  { q: "Livrez-vous à l'international ?", a: "Oui, nous livrons partout dans le monde via DHL et La Poste." },
  { q: "Quels moyens de paiement acceptez-vous ?", a: "Carte bancaire, Mobile Money, PayPal et virement bancaire." },
  { q: "Les retouches sont-elles offertes ?", a: "Oui, toute première retouche est offerte dans les 30 jours suivant la livraison." },
  { q: "Puis-je fournir mon propre tissu ?", a: "Bien sûr, nous étudions sa compatibilité avec le modèle choisi avant validation." },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="container-x py-16 md:py-24">
      <div className="max-w-2xl">
        <p className="eyebrow">FAQ</p>
        <h1 className="mt-4 text-5xl md:text-6xl">Questions fréquentes</h1>
      </div>
      <div className="mt-12 max-w-3xl divide-y divide-border/60 border-y border-border/60">
        {faqs.map((f, i) => (
          <button key={i} onClick={() => setOpen(open === i ? null : i)} className="block w-full py-6 text-left">
            <div className="flex items-center justify-between gap-6">
              <h3 className="text-lg md:text-xl">{f.q}</h3>
              <ChevronDown className={`h-5 w-5 shrink-0 transition-transform ${open === i ? "rotate-180" : ""}`} />
            </div>
            {open === i && <p className="mt-3 text-muted-foreground">{f.a}</p>}
          </button>
        ))}
      </div>
    </section>
  );
}
