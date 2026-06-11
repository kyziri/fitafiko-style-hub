import p1 from "@/assets/product-1.jpg";
import p2 from "@/assets/product-2.jpg";
import p3 from "@/assets/product-3.jpg";
import p4 from "@/assets/product-4.jpg";

export type Product = {
  id: string;
  name: string;
  category: ProductCategory;
  price: string;
  delai: string;
  image: string;
  description: string;
  options: string[];
};

export const categories = [
  "Costumes sur mesure",
  "Chemises sur mesure",
  "Robes sur mesure",
  "Tenues de cérémonie",
  "Uniformes",
  "Vêtements professionnels",
  "Accessoires",
] as const;

export type ProductCategory = (typeof categories)[number];

export const products: Product[] = [
  {
    id: "blazer-bordeaux",
    name: "Blazer Bordeaux",
    category: "Costumes sur mesure",
    price: "320 000 Ar",
    delai: "2 à 3 semaines",
    image: p1,
    description:
      "Blazer cintré en laine fine, doublure soie. Coupe tailleur entièrement réalisée à la main dans notre atelier.",
    options: ["Tissu", "Couleur", "Boutons", "Doublure", "Broderie"],
  },
  {
    id: "robe-soie-creme",
    name: "Robe Soie Crème",
    category: "Robes sur mesure",
    price: "480 000 Ar",
    delai: "3 semaines",
    image: p2,
    description:
      "Robe longue en pure soie écrue, drapé asymétrique et taille marquée. Une pièce d'exception pour les grandes occasions.",
    options: ["Tissu", "Couleur", "Longueur", "Type de col", "Broderie"],
  },
  {
    id: "boubou-royal",
    name: "Boubou Royal",
    category: "Tenues de cérémonie",
    price: "550 000 Ar",
    delai: "3 à 4 semaines",
    image: p3,
    description:
      "Boubou en wax bordeaux et motifs dorés, coupe ample et fluide. Confection traditionnelle avec finitions haute couture.",
    options: ["Tissu wax", "Motifs", "Broderie", "Doublure"],
  },
  {
    id: "veste-tailleur-homme",
    name: "Veste Tailleur Homme",
    category: "Costumes sur mesure",
    price: "420 000 Ar",
    delai: "3 semaines",
    image: p4,
    description:
      "Veste sur-mesure en sergé bordeaux, doublure satin doré. Détails surpiqués et boutonnage main.",
    options: ["Tissu", "Couleur", "Boutons", "Revers", "Doublure"],
  },
  {
    id: "chemise-classique",
    name: "Chemise Classique",
    category: "Chemises sur mesure",
    price: "120 000 Ar",
    delai: "10 jours",
    image: p4,
    description:
      "Chemise en popeline de coton égyptien, col français et poignets mousquetaires.",
    options: ["Tissu", "Col", "Manches", "Boutons", "Monogramme"],
  },
  {
    id: "uniforme-hotellerie",
    name: "Uniforme Hôtellerie",
    category: "Uniformes",
    price: "180 000 Ar",
    delai: "4 semaines",
    image: p1,
    description:
      "Uniforme professionnel sur-mesure pour le secteur hôtelier. Confort, élégance et durabilité.",
    options: ["Tissu technique", "Couleur", "Logo brodé", "Coupe"],
  },
  {
    id: "ensemble-bureau",
    name: "Ensemble Bureau",
    category: "Vêtements professionnels",
    price: "350 000 Ar",
    delai: "3 semaines",
    image: p2,
    description:
      "Ensemble veste + pantalon ou jupe, idéal pour le bureau. Tissu infroissable et coupe ajustée.",
    options: ["Tissu", "Couleur", "Coupe", "Doublure"],
  },
  {
    id: "noeud-papillon-soie",
    name: "Nœud Papillon Soie",
    category: "Accessoires",
    price: "45 000 Ar",
    delai: "5 jours",
    image: p3,
    description:
      "Nœud papillon en soie italienne, fait main. Plusieurs motifs disponibles.",
    options: ["Couleur", "Motif"],
  },
];

export function getProduct(id: string) {
  return products.find((p) => p.id === id);
}
