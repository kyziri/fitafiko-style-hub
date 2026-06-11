import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { User, Package, MapPin, Ruler } from "lucide-react";

export const Route = createFileRoute("/compte")({
  head: () => ({ meta: [{ title: "Mon compte — Fitafiko" }] }),
  component: Compte,
});

function Compte() {
  const [logged, setLogged] = useState(false);
  if (!logged) return <Auth onLogin={() => setLogged(true)} />;
  return <Dashboard onLogout={() => setLogged(false)} />;
}

function Auth({ onLogin }: { onLogin: () => void }) {
  const [mode, setMode] = useState<"login" | "signup">("login");
  return (
    <section className="container-x py-16 md:py-24">
      <div className="mx-auto max-w-md rounded-md border border-border/60 bg-card p-8">
        <p className="eyebrow">Mon compte</p>
        <h1 className="mt-3 text-3xl">{mode === "login" ? "Connexion" : "Inscription"}</h1>
        <form onSubmit={(e) => { e.preventDefault(); onLogin(); }} className="mt-6 space-y-4">
          {mode === "signup" && (
            <div><label className="text-sm">Nom complet</label>
              <input required className="mt-1 w-full rounded-md border border-border bg-background px-3 py-2" /></div>
          )}
          <div><label className="text-sm">Email</label>
            <input type="email" required className="mt-1 w-full rounded-md border border-border bg-background px-3 py-2" /></div>
          <div><label className="text-sm">Mot de passe</label>
            <input type="password" required className="mt-1 w-full rounded-md border border-border bg-background px-3 py-2" /></div>
          <button className="w-full rounded-full bg-primary py-3 text-sm font-medium text-primary-foreground">
            {mode === "login" ? "Se connecter" : "Créer mon compte"}
          </button>
        </form>
        <button onClick={() => setMode(mode === "login" ? "signup" : "login")}
          className="mt-4 text-center text-sm text-primary hover:underline">
          {mode === "login" ? "Pas encore de compte ? Inscrivez-vous" : "Déjà inscrit ? Connectez-vous"}
        </button>
      </div>
    </section>
  );
}

function Dashboard({ onLogout }: { onLogout: () => void }) {
  return (
    <section className="container-x py-16 md:py-24">
      <div className="flex items-end justify-between">
        <div>
          <p className="eyebrow">Mon compte</p>
          <h1 className="mt-3 text-4xl md:text-5xl">Bonjour</h1>
        </div>
        <button onClick={onLogout} className="text-sm text-primary hover:underline">Déconnexion</button>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {[
          { icon: User, t: "Profil", d: "Vos informations personnelles" },
          { icon: Package, t: "Commandes", d: "Historique et suivi" },
          { icon: MapPin, t: "Adresses", d: "Gérez vos adresses" },
          { icon: Ruler, t: "Mes mesures", d: "Vos mensurations enregistrées" },
        ].map(({ icon: Icon, t, d }) => (
          <div key={t} className="rounded-md border border-border/60 p-6">
            <Icon className="h-6 w-6 text-primary" />
            <h3 className="mt-4 text-xl">{t}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{d}</p>
          </div>
        ))}
      </div>

      <div className="mt-12">
        <h2 className="text-2xl">Dernières commandes</h2>
        <div className="mt-6 overflow-hidden rounded-md border border-border/60">
          <table className="w-full text-sm">
            <thead className="bg-secondary/60 text-left">
              <tr><th className="px-4 py-3">N°</th><th className="px-4 py-3">Article</th><th className="px-4 py-3">Statut</th><th className="px-4 py-3">Total</th></tr>
            </thead>
            <tbody>
              {[
                { n: "#FTK-1042", a: "Blazer Bordeaux", s: "En fabrication", t: "320 000 Ar" },
                { n: "#FTK-1031", a: "Chemise Classique", s: "Livrée", t: "120 000 Ar" },
              ].map((o) => (
                <tr key={o.n} className="border-t border-border/60">
                  <td className="px-4 py-3"><Link to="/commande/suivi" className="text-primary hover:underline">{o.n}</Link></td>
                  <td className="px-4 py-3">{o.a}</td>
                  <td className="px-4 py-3">{o.s}</td>
                  <td className="px-4 py-3">{o.t}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
