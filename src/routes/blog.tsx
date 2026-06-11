import { createFileRoute, Link } from "@tanstack/react-router";
import atelier from "@/assets/atelier.jpg";
import hero from "@/assets/hero.jpg";
import p1 from "@/assets/product-1.jpg";
import p2 from "@/assets/product-2.jpg";
import p3 from "@/assets/product-3.jpg";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — Fitafiko" },
      { name: "description", content: "Conseils mode, tendances, guides des tissus et astuces couture." },
    ],
  }),
  component: Blog,
});

export const posts = [
  { slug: "choisir-costume", title: "Comment choisir un costume sur-mesure ?", excerpt: "Coupe, tissu, couleur : nos conseils pour un costume qui vous sublime.", image: p1, date: "12 mai 2026" },
  { slug: "tendances-mode", title: "Tendances mode 2026", excerpt: "Les couleurs, les matières et les coupes à adopter cette saison.", image: hero, date: "2 avril 2026" },
  { slug: "guide-tissus", title: "Le guide des tissus nobles", excerpt: "Soie, laine, lin, coton : tout savoir pour bien choisir.", image: p2, date: "20 mars 2026" },
  { slug: "entretien", title: "Conseils d'entretien", excerpt: "Comment prolonger la vie de vos pièces sur-mesure.", image: p3, date: "8 février 2026" },
  { slug: "prendre-mesures", title: "Comment prendre ses mesures ?", excerpt: "Un guide pas-à-pas pour des mesures précises chez vous.", image: atelier, date: "18 janvier 2026" },
];

function Blog() {
  return (
    <section className="container-x py-16 md:py-24">
      <div className="max-w-2xl">
        <p className="eyebrow">Le journal</p>
        <h1 className="mt-4 text-5xl md:text-6xl">Conseils & inspirations</h1>
        <p className="mt-5 text-muted-foreground">
          Découvrez nos articles sur la mode, le sur-mesure et l'art de la couture.
        </p>
      </div>
      <div className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Link key={post.slug} to="/blog/$slug" params={{ slug: post.slug }} className="group block">
            <div className="overflow-hidden rounded-md bg-muted">
              <img src={post.image} alt={post.title} loading="lazy"
                className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <p className="eyebrow mt-4">{post.date}</p>
            <h3 className="mt-2 text-2xl">{post.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{post.excerpt}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
