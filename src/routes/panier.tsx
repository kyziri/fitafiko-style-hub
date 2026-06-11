import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Trash2, CreditCard, Smartphone, Banknote } from "lucide-react";
import { products } from "@/lib/products";

export const Route = createFileRoute("/panier")({
  head: () => ({ meta: [{ title: "Panier — Fitafiko" }] }),
  component: Panier,
});

function parsePrice(p: string) {
  return parseInt(p.replace(/\D/g, ""), 10) || 0;
}

function Panier() {
  const [items, setItems] = useState(
    products.slice(0, 2).map((p) => ({ ...p, qty: 1 })),
  );
  const [promo, setPromo] = useState("");
  const [applied, setApplied] = useState(0);

  const sub = items.reduce((s, i) => s + parsePrice(i.price) * i.qty, 0);
  const ship = items.length ? 20000 : 0;
  const total = Math.max(0, sub + ship - applied);
  const fmt = (n: number) => n.toLocaleString("fr-FR") + " Ar";

  return (
    <section className="container-x py-16 md:py-24">
      <p className="eyebrow">Panier</p>
      <h1 className="mt-3 text-4xl md:text-5xl">Votre sélection</h1>

      {items.length === 0 ? (
        <div className="mt-12 rounded-md border border-border/60 p-12 text-center">
          <p className="text-muted-foreground">Votre panier est vide.</p>
          <Link to="/collection" className="mt-4 inline-block text-primary hover:underline">Voir la boutique →</Link>
        </div>
      ) : (
        <div className="mt-10 grid gap-10 lg:grid-cols-[2fr_1fr]">
          <div className="space-y-4">
            {items.map((it) => (
              <div key={it.id} className="flex gap-4 rounded-md border border-border/60 p-4">
                <img src={it.image} alt={it.name} className="h-28 w-24 rounded object-cover" />
                <div className="flex-1">
                  <p className="eyebrow">{it.category}</p>
                  <h3 className="text-lg">{it.name}</h3>
                  <p className="mt-1 text-sm text-primary">{it.price}</p>
                  <div className="mt-3 flex items-center gap-3">
                    <button onClick={() => setItems((xs) => xs.map((x) => x.id === it.id ? { ...x, qty: Math.max(1, x.qty - 1) } : x))}
                      className="rounded border border-border px-3 py-1">−</button>
                    <span className="w-8 text-center">{it.qty}</span>
                    <button onClick={() => setItems((xs) => xs.map((x) => x.id === it.id ? { ...x, qty: x.qty + 1 } : x))}
                      className="rounded border border-border px-3 py-1">+</button>
                    <button onClick={() => setItems((xs) => xs.filter((x) => x.id !== it.id))}
                      className="ml-auto text-muted-foreground hover:text-destructive">
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <aside className="h-fit space-y-6 rounded-md border border-border/60 bg-secondary/40 p-6">
            <h3 className="text-2xl">Récapitulatif</h3>

            <div className="space-y-2 text-sm">
              <div className="flex justify-between"><span>Sous-total</span><span>{fmt(sub)}</span></div>
              <div className="flex justify-between"><span>Livraison</span><span>{fmt(ship)}</span></div>
              {applied > 0 && <div className="flex justify-between text-primary"><span>Réduction</span><span>− {fmt(applied)}</span></div>}
              <div className="flex justify-between border-t border-border/60 pt-2 text-base font-medium">
                <span>Total</span><span>{fmt(total)}</span>
              </div>
            </div>

            <div>
              <label className="text-sm">Code promo</label>
              <div className="mt-1 flex gap-2">
                <input value={promo} onChange={(e) => setPromo(e.target.value)}
                  className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm" />
                <button onClick={() => setApplied(promo.trim().toUpperCase() === "FITAFIKO10" ? Math.round(sub * 0.1) : 0)}
                  className="rounded-md bg-foreground px-4 py-2 text-sm text-background">Appliquer</button>
              </div>
              <p className="mt-1 text-xs text-muted-foreground">Essayez FITAFIKO10</p>
            </div>

            <div>
              <h4 className="mb-3 text-sm font-medium">Paiement</h4>
              <div className="space-y-2 text-sm">
                {[
                  { icon: CreditCard, l: "Carte bancaire" },
                  { icon: Smartphone, l: "Mobile Money" },
                  { icon: Banknote, l: "Virement bancaire" },
                ].map(({ icon: Icon, l }) => (
                  <label key={l} className="flex items-center gap-3 rounded-md border border-border bg-background px-3 py-2">
                    <input type="radio" name="pm" defaultChecked={l === "Carte bancaire"} />
                    <Icon className="h-4 w-4" /> {l}
                  </label>
                ))}
              </div>
            </div>

            <button className="w-full rounded-full bg-primary py-3 text-sm font-medium text-primary-foreground">
              Procéder au paiement
            </button>
          </aside>
        </div>
      )}
    </section>
  );
}
