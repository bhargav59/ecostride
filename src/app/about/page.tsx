import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle, Heart, Package, Globe } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About EcoStride | Our Mission for a Sustainable Future',
    description: 'Learn about EcoStride\'s story, our commitment to sustainability, and our mission to make eco-friendly living accessible to everyone.'
};

const teamMembers = [
  {
    name: 'Jasmine Green',
    role: 'Founder & CEO',
    avatarUrl: 'https://picsum.photos/200/200?random=130',
    bio: 'Jasmine founded EcoStride after a life-changing backpacking trip revealed the stark impact of plastic pollution. With a background in environmental science, she is the driving force behind our mission, meticulously vetting every product to ensure it meets our high standards of sustainability and quality.'
  },
  {
    name: 'Leo Rivera',
    role: 'Head of Operations',
    avatarUrl: 'https://picsum.photos/200/200?random=131',
    bio: 'Leo ensures that our passion for the planet translates into seamless practice. He manages our supply chain, champions our plastic-free packaging, and constantly seeks innovative ways to reduce our carbon footprint, making sure our operations are as green as our products.'
  }
];

export default function AboutPage() {
  return (
    <div className="flex-1">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] w-full bg-primary/20 flex items-center justify-center text-center">
        <Image
          src="https://picsum.photos/1800/1000?random=2"
          alt="A diverse group of people planting trees in a field"
          data-ai-hint="team planting trees"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div className="relative z-10 p-4">
          <h1 className="font-headline text-4xl font-bold md:text-6xl text-foreground drop-shadow-md">
            Making Sustainability the Standard
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg md:text-xl text-foreground drop-shadow-sm">
            We believe that every choice is a chance to make a positive impact. Our mission is to empower you with sustainable alternatives that are good for you and gentle on our planet.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 md:py-24">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="font-headline text-3xl font-bold md:text-4xl">Our Story: A Simple Stride Forward</h2>
          <div className="prose prose-lg dark:prose-invert max-w-none mx-auto mt-6 text-muted-foreground">
            <p>
              EcoStride began not in a boardroom, but on a windswept beach, cluttered with the plastic debris of a thousand distant choices. Our founder, Jasmine, was struck by a simple, powerful realization: we can do better. What started as a personal pledge to reduce waste evolved into a passionate mission to make sustainable living accessible to everyone.
            </p>
            <p>
              We wanted to create more than just a store; we envisioned a community built on the belief that eco-friendly products should not be a luxury, but a joyful, practical standard. We spent months searching for artisans and innovators who share our values—people who craft beautiful, durable products from responsible materials. EcoStride is the culmination of that search, a curated collection of goods that make it easy to take a conscious step—a stride—towards a better future.
            </p>
          </div>
        </div>
      </section>

      {/* Sustainability Commitment Section */}
      <section id="sustainability" className="bg-primary/5 py-16 md:py-24">
        <div className="container">
          <h2 className="mb-12 text-center font-headline text-3xl font-bold md:text-4xl">Our Green Commitment in Action</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <Card className="text-center">
              <CardContent className="p-8">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                  <Heart className="h-8 w-8" />
                </div>
                <h3 className="font-headline text-xl font-bold">Ethically Sourced Materials</h3>
                <p className="mt-2 text-muted-foreground">We partner with suppliers who uphold fair labor practices and prioritize the well-being of their workers and communities.</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-8">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                  <Package className="h-8 w-8" />
                </div>
                <h3 className="font-headline text-xl font-bold">100% Plastic-Free Packaging</h3>
                <p className="mt-2 text-muted-foreground">From our products to your doorstep, we are committed to using only plastic-free, recyclable, and compostable packaging.</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-8">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                  <Globe className="h-8 w-8" />
                </div>
                <h3 className="font-headline text-xl font-bold">Carbon-Conscious Shipping</h3>
                <p className="mt-2 text-muted-foreground">We offset the carbon emissions from every shipment, ensuring your delivery is as gentle on the environment as possible.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Meet the Team Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <h2 className="mb-12 text-center font-headline text-3xl font-bold md:text-4xl">Meet the Founders</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {teamMembers.map((member) => (
              <div key={member.name} className="flex flex-col items-center text-center">
                <Avatar className="h-32 w-32 mb-4">
                  <AvatarImage src={member.avatarUrl} alt={member.name} />
                  <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <h3 className="font-headline text-2xl font-bold">{member.name}</h3>
                <p className="text-primary font-semibold mb-2">{member.role}</p>
                <p className="text-muted-foreground">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="bg-primary/90 text-primary-foreground py-16 md:py-24">
          <div className="container text-center">
              <h2 className="font-headline text-3xl font-bold md:text-4xl">Join Our Sustainable Journey</h2>
              <p className="mt-4 max-w-2xl mx-auto text-lg text-primary-foreground/90">
                Ready to take the next step in green living? Explore our eco-friendly products and discover how simple and beautiful sustainability can be.
              </p>
              <Button asChild className="mt-8" size="lg" variant="secondary">
                <Link href="/products">
                  Shop All Sustainable Products
                </Link>
              </Button>
          </div>
      </section>
    </div>
  );
}
