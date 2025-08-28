import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Leaf, Recycle, Truck, Star, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { featuredProducts, testimonials } from '@/lib/mock-data';
import ProductCard from '@/components/product-card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function Home() {
  return (
    <div className="flex-1">
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] w-full bg-primary/20">
        <Image
          src="https://picsum.photos/1800/1200"
          alt="Sunlight filtering through a lush green forest canopy"
          data-ai-hint="forest sunlight"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-foreground">
          <h1 className="font-headline text-4xl font-bold md:text-6xl drop-shadow-md">
            Sustainable Choices for a Thriving Planet
          </h1>
          <p className="mt-4 max-w-3xl text-lg md:text-xl drop-shadow-sm">
            Join us in making a difference. Discover high-quality, eco-friendly products that align with your values and help protect our world for generations to come.
          </p>
          <Button asChild className="mt-8" size="lg">
            <Link href="/products">
              Shop with Purpose <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 md:py-24">
        <div className="container text-center max-w-4xl">
            <h2 className="mb-4 text-center font-headline text-3xl font-bold md:text-4xl">Our Mission: Sustainability in Every Step</h2>
            <p className="text-muted-foreground text-lg">
              At EcoStride, we believe that small changes can create a big impact. Our mission is to make sustainable living accessible and effortless for everyone. We carefully curate products that are not only beautiful and functional but also kind to the earth. From responsibly sourced materials to plastic-free packaging, we're committed to eco-friendly principles every step of the way.
            </p>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="bg-primary/5 py-16 md:py-24">
        <div className="container">
          <h2 className="mb-10 text-center font-headline text-3xl font-bold md:text-4xl">Our Top Picks For You</h2>
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-5">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button asChild variant="outline">
              <Link href="/products">Explore All Products</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Eco-Friendly Matters Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <h2 className="mb-10 text-center font-headline text-3xl font-bold md:text-4xl">Why Choose Eco-Friendly?</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Leaf className="h-8 w-8" />
              </div>
              <h3 className="mt-4 font-headline text-xl font-bold">Protect Ecosystems</h3>
              <p className="mt-2 text-muted-foreground">Sustainably sourced materials reduce harm to our planet's delicate ecosystems and biodiversity.</p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Recycle className="h-8 w-8" />
              </div>
              <h3 className="mt-4 font-headline text-xl font-bold">Reduce Waste</h3>
              <p className="mt-2 text-muted-foreground">Mindful packaging and reusable designs help minimize landfill waste and plastic pollution in our oceans.</p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Truck className="h-8 w-8" />
              </div>
              <h3 className="mt-4 font-headline text-xl font-bold">Lower Carbon Footprint</h3>
              <p className="mt-2 text-muted-foreground">From production to carbon-neutral shipping, your choices help combat climate change.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="bg-primary/5 py-16 md:py-24">
        <div className="container">
          <h2 className="mb-10 text-center font-headline text-3xl font-bold md:text-4xl">What Our Customers Say</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="h-full">
                <CardContent className="flex h-full flex-col justify-between p-6">
                  <div>
                    <Quote className="h-8 w-8 text-primary/40 mb-4" />
                    <p className="text-muted-foreground mb-6">{testimonial.quote}</p>
                  </div>
                  <div className="flex items-center">
                    <Avatar className="h-12 w-12 mr-4">
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <div className="flex text-yellow-500">
                        {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
