import { createFileRoute, Link } from "@tanstack/react-router";
import atelier from "@/assets/atelier.jpg";
import hero from "@/assets/hero.jpg";
import { Target, Eye, Heart, Users } from "lucide-react";

export const Route = createFileRoute("/a-propos")({
  head: () => ({
    meta: [
      { title: "À propos — Fitafiko" },
      { name: "description", content: "Découvrez l'histoire, la mission et les valeurs de la maison Fitafiko." },
      { property: "og:title", content: "À propos de Fitafiko" },
      { property: "og:description", content: "Notre histoire, notre équipe, nos valeurs." },
    ],
  }),
  component: APropos,
});

function APropos() {
  return (
    <>
      <section className="container-x py-16 md:py-24">
        <div className="max-w-3xl">
          <p className="eyebrow">À propos</p>
          <h1 className="mt-4 text-5xl md:text-6xl">Une maison, une vision.</h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Fitafiko est une maison de couture indépendante fondée en 2020 à Antananarivo.
            Nous croyons que chaque vêtement doit être pensé pour celle ou celui qui le portera.
          </p>
        </div>
      </section>

      <section className="container-x grid gap-12 pb-20 md:grid-cols-2">
        <img src={hero} alt="Création Fitafiko" className="aspect-[4/5] w-full rounded-md object-cover" />
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl">Notre histoire</h2>
          <p className="mt-4 text-muted-foreground">
            Née de la passion d'une famille de couturiers, Fitafiko a démarré dans un petit atelier
            de quartier. Six ans plus tard, nous habillons des centaines de clients fidèles à
            travers Madagascar et au-delà, sans jamais avoir trahi notre exigence du beau geste.
          </p>
          <p className="mt-4 text-muted-foreground">
            Chaque pièce porte la marque d'un savoir-faire transmis, d'un dialogue avec le client,
            et d'un respect des matières.
          </p>
        </div>
      </section>

      <section className="border-y border-border/60 bg-secondary/40">
        <div className="container-x grid gap-10 py-16 md:grid-cols-2">
          <div className="rounded-md border border-border/60 bg-background p-8">
            <Target className="h-7 w-7 text-primary" />
            <h3 className="mt-4 text-2xl">Notre mission</h3>
            <p className="mt-3 text-muted-foreground">
              Rendre la couture sur-mesure accessible et désirable, en alliant tradition artisanale
              et créativité contemporaine.
            </p>
          </div>
          <div className="rounded-md border border-border/60 bg-background p-8">
            <Eye className="h-7 w-7 text-primary" />
            <h3 className="mt-4 text-2xl">Notre vision</h3>
            <p className="mt-3 text-muted-foreground">
              Devenir la maison de couture de référence de l'océan Indien, reconnue pour
              l'excellence de ses finitions et le respect de ses artisans.
            </p>
          </div>
        </div>
      </section>

      <section className="container-x py-20">
        <div className="text-center">
          <p className="eyebrow">Nos valeurs</p>
          <h2 className="mt-3 text-4xl md:text-5xl">Ce qui nous guide</h2>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {[
            { icon: Heart, t: "Passion", d: "Aimer ce que l'on fait, et le faire avec soin." },
            { icon: Users, t: "Proximité", d: "Une relation humaine et durable avec chaque client." },
            { icon: Target, t: "Exigence", d: "Refuser le médiocre, viser la beauté juste." },
          ].map(({ icon: Icon, t, d }) => (
            <div key={t} className="text-center">
              <Icon className="mx-auto h-7 w-7 text-primary" />
              <h3 className="mt-4 text-2xl">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-x grid gap-12 pb-20 md:grid-cols-2">
        <div className="flex flex-col justify-center">
          <p className="eyebrow">L'équipe</p>
          <h2 className="mt-3 text-3xl md:text-4xl">Des mains expertes</h2>
          <p className="mt-4 text-muted-foreground">
            Notre équipe rassemble huit couturières et couturiers, un maître tailleur, deux
            brodeuses et une styliste. Ensemble, ils donnent vie à vos pièces dans notre atelier
            d'Antananarivo.
          </p>
          <Link to="/atelier" className="mt-6 text-sm font-medium text-primary hover:underline">
            Visiter l'atelier →
          </Link>
        </div>
        <img src={atelier} alt="L'atelier" className="aspect-[4/3] w-full rounded-md object-cover" />
      </section>
    </>
  );
}
