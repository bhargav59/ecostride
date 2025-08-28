import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { Product } from '@/lib/types';
import { Button } from './ui/button';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="group flex h-full flex-col overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1">
      <CardHeader className="p-0">
        <Link href={`/products/${product.slug}`} className="block">
          <div className="relative aspect-square w-full">
            <Image
              src={product.images[0]}
              alt={product.name}
              data-ai-hint={product.aiHint}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        </Link>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col p-4">
        <div className="mb-2 flex flex-wrap gap-1">
          {product.ecoLabels.map((label) => (
            <Badge key={label} variant="secondary" className="font-normal text-xs">
              {label}
            </Badge>
          ))}
        </div>
        <CardTitle className="mb-1 text-base font-headline">
          <Link href={`/products/${product.slug}`} className="hover:text-primary">
            {product.name}
          </Link>
        </CardTitle>
        <CardDescription className="flex-1 text-xs text-muted-foreground">{product.description}</CardDescription>
      </CardContent>
      <CardFooter className="flex items-center justify-between p-4 pt-0">
        <p className="text-lg font-semibold">€{product.price.toFixed(2)}</p>
        <Button size="sm" variant="outline">
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
}
