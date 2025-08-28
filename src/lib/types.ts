export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  ecoLabels: ('Organic' | 'Recycled' | 'Vegan' | 'Fair Trade' | 'Plastic-Free')[];
  category: string;
  slug: string;
  aiHint: string;
};

export type BlogArticle = {
  id: string;
  title: string;
  excerpt: string;
  imageUrl: string;
  slug: string;
  author: string;
  date: string;
};

export type Category = {
  name: string;
  href: string;
  image: string;
  aiHint: string;
};
