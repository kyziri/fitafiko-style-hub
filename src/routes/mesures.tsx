import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Calendar, Ruler } from "lucide-react";

export const Route = createFileRoute("/mesures")({
  head: () => ({
    meta: [
      { title: "Prise de mesures — Fitafiko" },
      { name: "description", content: "Renseignez vos mesures en ligne ou réservez un rendez-vous dans notre atelier." },
    ],
  }),
  component: Mesures,
});

function Mesures() {
  const [tab, setTab] = useState<"online" | "rdv">("online");
  return (
    <section className="container-x py-16 md:py-24">
      <div className="max-w-2xl">
        <p className="eyebrow">Mesures</p>
        <h1 className="mt-4 text-5xl md:text-6xl">Prendre vos mesures</h1>
        <p className="mt-5 text-muted-foreground">
          Deux options pour des mesures précises : remplissez le formulaire en ligne ou réservez
          une séance dans notre atelier.
        </p>
      </div>

      <div className="mt-10 flex gap-3">
        <button
          onClick={() => setTab("online")}
          className={`inline-flex items-center gap-2 rounded-full border px-6 py-3 text-sm transition ${
            tab === "online" ? "border-primary bg-primary text-primary-foreground" : "border-border"
          }`}
        >
          <Ruler className="h-4 w-4" /> Mesures en ligne
        </button>
        <button
          onClick={() => setTab("rdv")}
          className={`inline-flex items-center gap-2 rounded-full border px-6 py-3 text-sm transition ${
            tab === "rdv" ? "border-primary bg-primary text-primary-foreground" : "border-border"
          }`}
        >
          <Calendar className="h-4 w-4" /> Rendez-vous
        </button>
      </div>

      {tab === "online" ? (
        <form onSubmit={(e) => { e.preventDefault(); alert("Mesures enregistrées (démo)."); }}
          className="mt-10 grid max-w-3xl gap-6 sm:grid-cols-2">
          {[
            ["Tour de poitrine (cm)", "number"],
            ["Tour de taille (cm)", "number"],
            ["Tour de hanches (cm)", "number"],
            ["Longueur des manches (cm)", "number"],
            ["Hauteur (cm)", "number"],
            ["Poids (kg)", "number"],
          ].map(([label, type]) => (
            <div key={label}>
              <label className="text-sm">{label}</label>
              <input type={type} required className="mt-2 w-full rounded-md border border-border bg-background px-3 py-2" />
            </div>
          ))}
          <div className="sm:col-span-2">
            <label className="text-sm">Notes complémentaires</label>
            <textarea rows={4} className="mt-2 w-full rounded-md border border-border bg-background px-3 py-2" />
          </div>
          <button type="submit" className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground sm:col-span-2 sm:w-fit">
            Enregistrer mes mesures
          </button>
        </form>
      ) : (
        <form onSubmit={(e) => { e.preventDefault(); alert("Rendez-vous demandé (démo)."); }}
          className="mt-10 grid max-w-3xl gap-6 sm:grid-cols-2">
          <div><label className="text-sm">Nom complet</label>
            <input required className="mt-2 w-full rounded-md border border-border bg-background px-3 py-2" /></div>
          <div><label className="text-sm">Téléphone</label>
            <input required className="mt-2 w-full rounded-md border border-border bg-background px-3 py-2" /></div>
          <div><label className="text-sm">Date souhaitée</label>
            <input type="date" required className="mt-2 w-full rounded-md border border-border bg-background px-3 py-2" /></div>
          <div><label className="text-sm">Créneau</label>
            <select required className="mt-2 w-full rounded-md border border-border bg-background px-3 py-2">
              <option>Matin (9h–12h)</option>
              <option>Après-midi (14h–18h)</option>
            </select>
          </div>
          <div className="sm:col-span-2"><label className="text-sm">Type de vêtement</label>
            <input className="mt-2 w-full rounded-md border border-border bg-background px-3 py-2" /></div>
          <button type="submit" className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground sm:col-span-2 sm:w-fit">
            Réserver
          </button>
        </form>
      )}
    </section>
  );
}
