import Image from 'next/image';
import Link from 'next/link';
import { blogArticles } from '@/lib/mock-data';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Eco-Log | Sustainable Living Blog by EcoStride',
    description: 'Explore our blog for green living tips, sustainability guides, product spotlights, and inspiration for an eco-friendly lifestyle.'
};

export default function BlogPage() {
  return (
    <div className="container py-12 md:py-20">
      <div className="mb-12 text-center">
        <h1 className="font-headline text-4xl font-bold md:text-5xl">Our Eco-Log: A Guide to Green Living</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Insights and inspiration for a more sustainable life.
        </p>
      </div>

      <div className="grid gap-12">
        {blogArticles.map((article, index) => (
          <Card key={article.id} className="grid md:grid-cols-2 overflow-hidden shadow-md hover:shadow-xl transition-shadow">
            <div className={`relative h-64 md:h-auto ${index % 2 === 1 ? 'md:order-2' : ''}`}>
              <Image
                src={article.imageUrl}
                alt={article.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col justify-center p-8">
              <p className="mb-2 text-sm text-muted-foreground">
                By {article.author} on {new Date(article.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
              <h2 className="font-headline text-2xl font-bold mb-4">
                <Link href={`/blog/${article.slug}`} className="hover:text-primary transition-colors">
                  {article.title}
                </Link>
              </h2>
              <p className="text-muted-foreground mb-6 line-clamp-3">{article.excerpt}</p>
              <Button asChild className="self-start">
                <Link href={`/blog/${article.slug}`}>
                  Read More <ArrowRight className="ml-2" />
                </Link>
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
