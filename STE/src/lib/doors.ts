export type Door = {
  slug: string;
  name: string;
  tagline: string;
  price: string;
  oldPrice?: string;
  image: string;
  category: "Exterior" | "Interior";
  features: string[];
};

import avalon from "@/assets/door-avalon.jpg";
import arcadia from "@/assets/door-arcadia.jpg";
import elara from "@/assets/door-elara.jpg";

export const doors: Door[] = [
  {
    slug: "avalon",
    name: "Avalon",
    tagline: "Warm oak, horizontal relief",
    price: "₺2.900",
    oldPrice: "₺3.190",
    image: avalon,
    category: "Interior",
    features: ["Horizontal groove pattern", "Natural oak tone", "Stainless steel core"],
  },
  {
    slug: "arcadia",
    name: "Arcadia",
    tagline: "Walnut with brass inlay",
    price: "₺2.900",
    oldPrice: "₺3.190",
    image: arcadia,
    category: "Exterior",
    features: ["Vertical brass strip", "Dark walnut veneer", "Waterproof composite"],
  },
  {
    slug: "elara",
    name: "Elara",
    tagline: "Soft beech, classic panel",
    price: "₺2.900",
    oldPrice: "₺3.190",
    image: elara,
    category: "Interior",
    features: ["Two-panel silhouette", "Light beech finish", "Low-maintenance"],
  },
  {
    slug: "andora",
    name: "Andora",
    tagline: "Waterproof exterior",
    price: "₺3.450",
    image: arcadia,
    category: "Exterior",
    features: ["Rain & UV resistant", "Insulated foam core", "Custom sizing"],
  },
  {
    slug: "astraea",
    name: "Astraea",
    tagline: "Minimal contemporary",
    price: "₺3.190",
    image: avalon,
    category: "Interior",
    features: ["Flush surface", "Concealed hinges", "9 finish options"],
  },
  {
    slug: "atlas",
    name: "Atlas Double",
    tagline: "Grand entrance, double leaf",
    price: "₺5.900",
    image: elara,
    category: "Exterior",
    features: ["Double-leaf composite", "Reinforced frame", "Statement scale"],
  },
];
