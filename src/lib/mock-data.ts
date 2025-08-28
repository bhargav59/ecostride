import type { Product, BlogArticle, Category } from './types';

export const featuredProducts: Product[] = [
  {
    id: '1',
    name: 'Reusable Bamboo Cutlery Set',
    description: 'Eco-friendly cutlery set for on-the-go meals.',
    price: 14.99,
    image: 'https://picsum.photos/400/400',
    aiHint: 'bamboo cutlery',
    ecoLabels: ['Plastic-Free', 'Vegan'],
    category: 'Kitchen',
    slug: 'reusable-bamboo-cutlery-set',
  },
  {
    id: '2',
    name: 'Organic Cotton Tote Bag',
    description: 'A stylish and durable tote bag for your daily needs.',
    price: 24.50,
    image: 'https://picsum.photos/400/400',
    aiHint: 'cotton bag',
    ecoLabels: ['Organic', 'Fair Trade'],
    category: 'Apparel',
    slug: 'organic-cotton-tote-bag',
  },
  {
    id: '3',
    name: 'Solid Shampoo Bar',
    description: 'Zero-waste shampoo bar that leaves your hair soft and clean.',
    price: 12.00,
    image: 'https://picsum.photos/400/400',
    aiHint: 'shampoo bar',
    ecoLabels: ['Plastic-Free', 'Vegan'],
    category: 'Beauty',
    slug: 'solid-shampoo-bar',
  },
  {
    id: '4',
    name: 'Recycled Glass Water Bottle',
    description: 'Stay hydrated with this beautifully designed water bottle.',
    price: 29.99,
    image: 'https://picsum.photos/400/400',
    aiHint: 'glass bottle',
    ecoLabels: ['Recycled', 'Plastic-Free'],
    category: 'Lifestyle',
    slug: 'recycled-glass-water-bottle',
  },
];

export const featuredCategories: Category[] = [
  {
    name: 'Home & Kitchen',
    href: '/products/kitchen',
    image: 'https://picsum.photos/600/600',
    aiHint: 'modern kitchen',
  },
  {
    name: 'Apparel',
    href: '/products/apparel',
    image: 'https://picsum.photos/600/600',
    aiHint: 'sustainable fashion',
  },
  {
    name: 'Health & Beauty',
    href: '/products/beauty',
    image: 'https://picsum.photos/600/600',
    aiHint: 'natural cosmetics',
  },
  {
    name: 'On The Go',
    href: '/products/lifestyle',
    image: 'https://picsum.photos/600/600',
    aiHint: 'outdoor adventure',
  },
];

export const blogArticles: BlogArticle[] = [
    {
      id: '1',
      title: '10 Simple Swaps for a Zero-Waste Kitchen',
      excerpt: 'Discover easy and affordable changes you can make in your kitchen to reduce waste and live more sustainably.',
      imageUrl: 'https://picsum.photos/600/400',
      slug: 'zero-waste-kitchen-swaps',
      author: 'Jane Doe',
      date: '2024-05-20',
    },
    {
      id: '2',
      title: 'The Ultimate Guide to Ethical Fashion',
      excerpt: 'Learn how to build a wardrobe that\'s both stylish and sustainable, with tips on fabrics, brands, and care.',
      imageUrl: 'https://picsum.photos/600/400',
      slug: 'guide-to-ethical-fashion',
      author: 'John Smith',
      date: '2024-05-15',
    },
    {
      id: '3',
      title: 'DIY Natural Cleaning Products for a Healthy Home',
      excerpt: 'Skip the harsh chemicals and create your own effective, non-toxic cleaners using simple household ingredients.',
      imageUrl: 'https://picsum.photos/600/400',
      slug: 'diy-natural-cleaning-products',
      author: 'Emily White',
      date: '2024-05-10',
    },
];
