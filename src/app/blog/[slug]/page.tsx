import { notFound } from 'next/navigation';
import Image from 'next/image';
import { blogArticles } from '@/lib/mock-data';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import type { Metadata, ResolvingMetadata } from 'next';

type BlogPostPageProps = {
  params: {
    slug: string;
  };
};

export async function generateMetadata(
  { params }: BlogPostPageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const article = blogArticles.find((a) => a.slug === params.slug);

  if (!article) {
    return {
      title: 'Article Not Found',
      description: 'The blog article you are looking for does not exist.',
    };
  }

  return {
    title: `${article.title} | Eco-Log`,
    description: article.excerpt,
  };
}

export async function generateStaticParams() {
  return blogArticles.map((article) => ({
    slug: article.slug,
  }));
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const article = blogArticles.find((a) => a.slug === params.slug);

  if (!article) {
    notFound();
  }

  return (
    <article className="py-12 md:py-20">
      <div className="container max-w-4xl">
        <header className="mb-8 text-center">
          <h1 className="font-headline text-4xl font-bold md:text-5xl mb-4">{article.title}</h1>
          <div className="flex items-center justify-center space-x-4 text-muted-foreground">
             <div className="flex items-center space-x-2">
                <Avatar className="h-8 w-8">
                    <AvatarImage src={`https://picsum.photos/100/100?random=${article.id}`} alt={article.author} />
                    <AvatarFallback>{article.author.charAt(0)}</AvatarFallback>
                </Avatar>
                <span>{article.author}</span>
            </div>
            <span>•</span>
            <time dateTime={article.date}>
              {new Date(article.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </time>
          </div>
        </header>

        <div className="relative h-96 w-full rounded-lg overflow-hidden mb-8 shadow-lg">
          <Image
            src={article.imageUrl}
            alt={article.title}
            fill
            className="object-cover"
            data-ai-hint="sustainability blog post"
          />
        </div>
        
        <div 
          className="prose prose-lg dark:prose-invert max-w-none mx-auto"
          dangerouslySetInnerHTML={{ __html: article.content }} 
        />
      </div>
    </article>
  );
}
