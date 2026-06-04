import p1 from "@/assets/product-1.jpg";
import p2 from "@/assets/product-2.jpg";
import p3 from "@/assets/product-3.jpg";
import p4 from "@/assets/product-4.jpg";

export type Product = {
  id: string;
  name: string;
  category: string;
  price: string;
  image: string;
  description: string;
};

export const products: Product[] = [
  {
    id: "blazer-bordeaux",
    name: "Blazer Bordeaux",
    category: "Femme",
    price: "320 000 Ar",
    image: p1,
    description:
      "Blazer cintré en laine fine, doublure soie. Coupe tailleur entièrement réalisée à la main dans notre atelier.",
  },
  {
    id: "robe-soie-creme",
    name: "Robe Soie Crème",
    category: "Femme",
    price: "480 000 Ar",
    image: p2,
    description:
      "Robe longue en pure soie écrue, drapé asymétrique et taille marquée. Une pièce d'exception pour les grandes occasions.",
  },
  {
    id: "boubou-royal",
    name: "Boubou Royal",
    category: "Cérémonie",
    price: "550 000 Ar",
    image: p3,
    description:
      "Boubou en wax bordeaux et motifs dorés, coupe ample et fluide. Confection traditionnelle avec finitions haute couture.",
  },
  {
    id: "veste-tailleur-homme",
    name: "Veste Tailleur Homme",
    category: "Homme",
    price: "420 000 Ar",
    image: p4,
    description:
      "Veste sur-mesure en sergé bordeaux, doublure satin doré. Détails surpiqués et boutonnage main.",
  },
];

export function getProduct(id: string) {
  return products.find((p) => p.id === id);
}
