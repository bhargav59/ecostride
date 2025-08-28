import { notFound } from 'next/navigation';
import Image from 'next/image';
import { allProducts } from '@/lib/mock-data';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Star, CheckCircle, ShieldCheck, Truck, RefreshCw } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import type { Metadata, ResolvingMetadata } from 'next';
import { Card, CardContent } from '@/components/ui/card';

type ProductPageProps = {
  params: {
    slug: string;
  };
};

export async function generateMetadata(
  { params }: ProductPageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const product = allProducts.find((p) => p.slug === params.slug);

  if (!product) {
    return {
      title: 'Product Not Found',
      description: 'The product you are looking for does not exist.',
    };
  }

  return {
    title: `${product.name} | EcoStride`,
    description: `Shop our ${product.name}. ${product.description} Discover sustainable materials and benefits.`,
  };
}


export async function generateStaticParams() {
  return allProducts.map((product) => ({
    slug: product.slug,
  }));
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = allProducts.find((p) => p.slug === params.slug);

  if (!product) {
    notFound();
  }
  
  const averageRating = product.reviews.length > 0 
    ? product.reviews.reduce((acc, review) => acc + review.rating, 0) / product.reviews.length
    : 0;

  return (
    <div className="container py-12 md:py-20">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Product Images Carousel */}
        <Carousel className="w-full">
          <CarouselContent>
            {product.images.map((img, index) => (
              <CarouselItem key={index}>
                <div className="relative aspect-square w-full rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src={img}
                    alt={`${product.name} image ${index + 1}`}
                    fill
                    priority={index === 0}
                    className="object-cover"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4" />
          <CarouselNext className="right-4" />
        </Carousel>
        
        {/* Product Details */}
        <div className="flex flex-col space-y-6">
          <div>
            <div className="flex flex-wrap gap-2 mb-2">
                {product.ecoLabels.map((label) => (
                    <Badge key={label} variant="secondary" className="text-sm font-medium flex items-center gap-1">
                        <CheckCircle className="h-4 w-4 text-primary"/>
                        {label}
                    </Badge>
                ))}
            </div>
            <h1 className="font-headline text-3xl md:text-4xl font-bold">{product.name}</h1>
            <p className="text-2xl font-semibold text-primary mt-2">€{product.price.toFixed(2)}</p>
             <div className="flex items-center gap-2 mt-2">
                <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`h-5 w-5 ${i < Math.round(averageRating) ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`} />
                    ))}
                </div>
                <span className="text-muted-foreground text-sm">({product.reviews.length} reviews)</span>
            </div>
          </div>
          
          <p className="text-lg text-muted-foreground">{product.description}</p>
          
          <Button size="lg" className="w-full md:w-auto">Add to Cart</Button>
          
           {/* Trust Signals */}
          <Card>
            <CardContent className="p-4 space-y-3 text-sm">
                <div className="flex items-center gap-3">
                    <ShieldCheck className="h-6 w-6 text-primary" />
                    <p className="text-muted-foreground">Secure checkout with EU-compliant gateways</p>
                </div>
                 <div className="flex items-center gap-3">
                    <Truck className="h-6 w-6 text-primary" />
                    <p className="text-muted-foreground">Free carbon-neutral shipping on orders over €50</p>
                </div>
                <div className="flex items-center gap-3">
                    <RefreshCw className="h-6 w-6 text-primary" />
                    <p className="text-muted-foreground">30-day hassle-free returns</p>
                </div>
            </CardContent>
          </Card>

          <Accordion type="single" collapsible defaultValue="description" className="w-full">
            <AccordionItem value="description">
              <AccordionTrigger className="text-lg font-headline">Full Description</AccordionTrigger>
              <AccordionContent className="prose prose-lg dark:prose-invert max-w-none">
                <p>{product.longDescription}</p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="care">
              <AccordionTrigger className="text-lg font-headline">Care Instructions</AccordionTrigger>
              <AccordionContent className="prose prose-lg dark:prose-invert max-w-none">
                <p>{product.careInstructions}</p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
      
      {/* Customer Reviews Section */}
      <div className="mt-16 md:mt-24">
        <h2 className="font-headline text-3xl font-bold mb-8">Customer Reviews</h2>
        <div className="space-y-8">
            {product.reviews.length > 0 ? product.reviews.map(review => (
                <div key={review.id} className="flex flex-col md:flex-row gap-6">
                    <div className="flex-shrink-0 flex md:flex-col items-center gap-4 text-center">
                        <Avatar className="h-16 w-16">
                            <AvatarFallback>{review.author.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div className="flex-grow">
                            <p className="font-semibold">{review.author}</p>
                            <p className="text-sm text-muted-foreground">
                                {new Date(review.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                            </p>
                        </div>
                    </div>
                    <div className="flex-grow bg-card p-6 rounded-lg shadow-sm">
                        <div className="flex items-center mb-2">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className={`h-5 w-5 ${i < review.rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`} />
                            ))}
                        </div>
                        <p className="text-muted-foreground">{review.text}</p>
                    </div>
                </div>
            )) : (
                <p className="text-muted-foreground">No reviews for this product yet. Be the first to write one!</p>
            )}
        </div>
      </div>
    </div>
  );
}
