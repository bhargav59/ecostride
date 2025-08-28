'use server';

/**
 * @fileOverview This file contains the Genkit flow for optimizing website SEO using AI-driven recommendations.
 *
 * - optimizeSEO - A function that handles the SEO optimization process.
 * - OptimizeSEOInput - The input type for the optimizeSEO function.
 * - OptimizeSEOOutput - The return type for the optimizeSEO function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const OptimizeSEOInputSchema = z.object({
  websiteContent: z
    .string()
    .describe('The content of the website page to be optimized.'),
  keywords: z.string().describe('The target keywords for SEO optimization.'),
  currentRanking: z
    .string()
    .describe('The current search engine ranking of the page.'),
});
export type OptimizeSEOInput = z.infer<typeof OptimizeSEOInputSchema>;

const OptimizeSEOOutputSchema = z.object({
  titleTag: z.string().describe('Recommended optimized title tag.'),
  metaDescription: z
    .string()
    .describe('Recommended optimized meta description.'),
  headerTags: z
    .string()
    .describe('Recommended optimized header tags (H1, H2, etc.).'),
  contentSuggestions: z
    .string()
    .describe('Suggestions for improving the content for SEO.'),
  keywordSuggestions: z
    .string()
    .describe('Suggestions for related keywords to target.'),
  internalLinking: z
    .string()
    .describe('Suggestions for internal linking opportunities.'),
  altTextSuggestions: z
    .string()
    .describe('Suggestions for alt text for images.'),
});
export type OptimizeSEOOutput = z.infer<typeof OptimizeSEOOutputSchema>;

export async function optimizeSEO(input: OptimizeSEOInput): Promise<OptimizeSEOOutput> {
  return optimizeSEOFlow(input);
}

const prompt = ai.definePrompt({
  name: 'optimizeSEOPrompt',
  input: {schema: OptimizeSEOInputSchema},
  output: {schema: OptimizeSEOOutputSchema},
  prompt: `You are an SEO expert, and your job is to optimize website content for better search engine rankings.

  Based on the provided website content, target keywords, and current ranking, provide specific recommendations for:

  - Optimized title tag
  - Optimized meta description
  - Optimized header tags (H1, H2, etc.)
  - Suggestions for improving the content for SEO
  - Suggestions for related keywords to target
  - Internal linking opportunities
  - Alt text suggestions for images

  Website Content: {{{websiteContent}}}
  Target Keywords: {{{keywords}}}
  Current Ranking: {{{currentRanking}}}

  Please provide your recommendations in a structured format.
  Here are the current safetySettings:
  [
    {
      category: 'HARM_CATEGORY_HATE_SPEECH',
      threshold: 'BLOCK_ONLY_HIGH',
    },
    {
      category: 'HARM_CATEGORY_DANGEROUS_CONTENT',
      threshold: 'BLOCK_NONE',
    },
    {
      category: 'HARM_CATEGORY_HARASSMENT',
      threshold: 'BLOCK_MEDIUM_AND_ABOVE',
    },
    {
      category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT',
      threshold: 'BLOCK_LOW_AND_ABOVE',
    },
  ]
  `,config: {
    safetySettings: [
      {
        category: 'HARM_CATEGORY_HATE_SPEECH',
        threshold: 'BLOCK_ONLY_HIGH',
      },
      {
        category: 'HARM_CATEGORY_DANGEROUS_CONTENT',
        threshold: 'BLOCK_NONE',
      },
      {
        category: 'HARM_CATEGORY_HARASSMENT',
        threshold: 'BLOCK_MEDIUM_AND_ABOVE',
      },
      {
        category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT',
        threshold: 'BLOCK_LOW_AND_ABOVE',
      },
    ],
  },
});

const optimizeSEOFlow = ai.defineFlow(
  {
    name: 'optimizeSEOFlow',
    inputSchema: OptimizeSEOInputSchema,
    outputSchema: OptimizeSEOOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
