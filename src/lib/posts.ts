import atelier from "@/assets/atelier.jpg";
import hero from "@/assets/hero.jpg";
import p1 from "@/assets/product-1.jpg";
import p2 from "@/assets/product-2.jpg";
import p3 from "@/assets/product-3.jpg";

export type Post = { slug: string; title: string; excerpt: string; image: string; date: string };

export const posts: Post[] = [
  { slug: "choisir-costume", title: "Comment choisir un costume sur-mesure ?", excerpt: "Coupe, tissu, couleur : nos conseils pour un costume qui vous sublime.", image: p1, date: "12 mai 2026" },
  { slug: "tendances-mode", title: "Tendances mode 2026", excerpt: "Les couleurs, les matières et les coupes à adopter cette saison.", image: hero, date: "2 avril 2026" },
  { slug: "guide-tissus", title: "Le guide des tissus nobles", excerpt: "Soie, laine, lin, coton : tout savoir pour bien choisir.", image: p2, date: "20 mars 2026" },
  { slug: "entretien", title: "Conseils d'entretien", excerpt: "Comment prolonger la vie de vos pièces sur-mesure.", image: p3, date: "8 février 2026" },
  { slug: "prendre-mesures", title: "Comment prendre ses mesures ?", excerpt: "Un guide pas-à-pas pour des mesures précises chez vous.", image: atelier, date: "18 janvier 2026" },
];
