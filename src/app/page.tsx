import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Leaf, Recycle, Truck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { featuredProducts, featuredCategories, blogArticles } from '@/lib/mock-data';
import ProductCard from '@/components/product-card';

export default function Home() {
  return (
    <div className="flex-1">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] w-full bg-primary/20">
        <Image
          src="https://picsum.photos/1800/1000"
          alt="Lush green valley"
          data-ai-hint="lush valley"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-foreground">
          <h1 className="font-headline text-4xl font-bold md:text-6xl">
            Live Green, Shop Smart
          </h1>
          <p className="mt-4 max-w-2xl text-lg md:text-xl">
            Discover curated eco-friendly products that are kind to you and the planet.
          </p>
          <Button asChild className="mt-8" size="lg">
            <Link href="/products">
              Explore Collection <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-12 md:py-24">
        <div className="container">
          <h2 className="mb-8 text-center font-headline text-3xl font-bold md:text-4xl">Shop by Category</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredCategories.map((category) => (
              <Link href={category.href} key={category.name}>
                <Card className="group overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1">
                  <CardContent className="p-0">
                    <div className="relative h-64 w-full">
                      <Image
                        src={category.image}
                        alt={category.name}
                        data-ai-hint={category.aiHint}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/20" />
                    </div>
                    <div className="absolute bottom-0 left-0 p-4">
                      <h3 className="font-headline text-2xl font-bold text-white">{category.name}</h3>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="bg-primary/5 py-12 md:py-24">
        <div className="container">
          <h2 className="mb-8 text-center font-headline text-3xl font-bold md:text-4xl">Featured Products</h2>
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button asChild variant="outline">
              <Link href="/products">View All Products</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Our Promise Section */}
      <section className="py-12 md:py-24">
        <div className="container">
          <h2 className="mb-8 text-center font-headline text-3xl font-bold md:text-4xl">Our Promise</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Leaf className="h-8 w-8" />
              </div>
              <h3 className="mt-4 font-headline text-xl font-bold">Sustainably Sourced</h3>
              <p className="mt-2 text-muted-foreground">Every item is selected for its eco-credentials and positive impact.</p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Recycle className="h-8 w-8" />
              </div>
              <h3 className="mt-4 font-headline text-xl font-bold">Mindful Packaging</h3>
              <p className="mt-2 text-muted-foreground">We use plastic-free, recyclable, or compostable materials for shipping.</p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Truck className="h-8 w-8" />
              </div>
              <h3 className="mt-4 font-headline text-xl font-bold">Carbon-Neutral Shipping</h3>
              <p className="mt-2 text-muted-foreground">We offset the carbon footprint of every delivery across Europe.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* From The Blog Section */}
      <section className="bg-primary/5 py-12 md:py-24">
        <div className="container">
          <h2 className="mb-8 text-center font-headline text-3xl font-bold md:text-4xl">From Our Blog</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {blogArticles.slice(0, 3).map((article) => (
              <Link href={`/blog/${article.slug}`} key={article.id}>
                <Card className="group h-full overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1">
                  <CardContent className="flex h-full flex-col p-0">
                    <div className="relative h-56 w-full">
                      <Image
                        src={article.imageUrl}
                        alt={article.title}
                        data-ai-hint="sustainability blog"
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-4">
                      <h3 className="font-headline text-xl font-semibold">{article.title}</h3>
                      <p className="mt-2 flex-1 text-muted-foreground">{article.excerpt}</p>
                      <div className="mt-4 text-sm font-semibold text-primary group-hover:text-accent">
                        Read More <ArrowRight className="inline h-4 w-4" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
