import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { posts } from "./blog";

export const Route = createFileRoute("/blog/$slug")({
  component: BlogPost,
});

function BlogPost() {
  const { slug } = Route.useParams();
  const post = posts.find((p) => p.slug === slug);
  if (!post) throw notFound();
  return (
    <article className="container-x py-16 md:py-24">
      <Link to="/blog" className="text-sm text-primary hover:underline">← Tous les articles</Link>
      <p className="eyebrow mt-6">{post.date}</p>
      <h1 className="mt-3 max-w-3xl text-5xl md:text-6xl">{post.title}</h1>
      <img src={post.image} alt={post.title} className="mt-10 aspect-[16/9] w-full rounded-md object-cover" />
      <div className="prose mt-10 max-w-3xl text-muted-foreground">
        <p className="text-lg">{post.excerpt}</p>
        <p className="mt-6">
          Cet article fait partie de notre série de conseils pour vous accompagner dans votre
          démarche sur-mesure. Pour aller plus loin, nos artisans sont à votre écoute en atelier
          ou par téléphone.
        </p>
        <p className="mt-4">
          Le sur-mesure n'est pas un luxe inaccessible : c'est avant tout une rencontre entre
          un savoir-faire et votre singularité. Chaque pièce est pensée pour durer, se transmettre
          et raconter votre style.
        </p>
      </div>
    </article>
  );
}
