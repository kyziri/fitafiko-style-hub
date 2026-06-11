import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/tarifs")({
  head: () => ({
    meta: [
      { title: "Tarifs — Fitafiko" },
      { name: "description", content: "Découvrez nos tarifs pour le sur-mesure : chemises, costumes, robes, retouches." },
    ],
  }),
  component: Tarifs,
});

const rows = [
  { s: "Chemise sur mesure", p: "À partir de 120 000 Ar", d: "10 jours" },
  { s: "Costume sur mesure", p: "À partir de 420 000 Ar", d: "3 semaines" },
  { s: "Robe sur mesure", p: "À partir de 280 000 Ar", d: "2 à 3 semaines" },
  { s: "Tenue de cérémonie", p: "À partir de 550 000 Ar", d: "3 à 4 semaines" },
  { s: "Uniforme professionnel", p: "À partir de 180 000 Ar", d: "4 semaines" },
  { s: "Retouches", p: "À partir de 25 000 Ar", d: "3 à 7 jours" },
  { s: "Accessoires (nœud, pochette…)", p: "À partir de 45 000 Ar", d: "5 jours" },
];

function Tarifs() {
  return (
    <section className="container-x py-16 md:py-24">
      <div className="max-w-2xl">
        <p className="eyebrow">Tarifs</p>
        <h1 className="mt-4 text-5xl md:text-6xl">Nos tarifs</h1>
        <p className="mt-5 text-muted-foreground">
          Les prix indiqués sont des tarifs de départ. Un devis personnalisé vous est remis après
          le choix du tissu et des finitions.
        </p>
      </div>

      <div className="mt-12 overflow-hidden rounded-md border border-border/60">
        <table className="w-full text-sm">
          <thead className="bg-secondary/60 text-left">
            <tr>
              <th className="px-6 py-4 font-medium">Service</th>
              <th className="px-6 py-4 font-medium">Prix</th>
              <th className="hidden px-6 py-4 font-medium md:table-cell">Délai</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.s} className="border-t border-border/60">
                <td className="px-6 py-4">{r.s}</td>
                <td className="px-6 py-4 text-primary">{r.p}</td>
                <td className="hidden px-6 py-4 text-muted-foreground md:table-cell">{r.d}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-6 text-sm text-muted-foreground">
        Besoin d'un devis ? <Link to="/contact" className="text-primary hover:underline">Contactez-nous</Link>.
      </p>
    </section>
  );
}
