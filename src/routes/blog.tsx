import { createFileRoute, Link } from "@tanstack/react-router";
import { posts } from "@/lib/posts";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — Fitafiko" },
      { name: "description", content: "Conseils mode, tendances, guides des tissus et astuces couture." },
    ],
  }),
  component: Blog,
});

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
