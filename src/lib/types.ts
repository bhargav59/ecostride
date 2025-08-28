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
  content: string;
};

export type Category = {
  name: string;
  href: string;
  image: string;
  aiHint: string;
};

export type Testimonial = {
  id: string;
  name: string;
  quote: string;
  avatar: string;
};
