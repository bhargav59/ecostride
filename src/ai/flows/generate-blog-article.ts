'use server';

/**
 * @fileOverview AI-powered blog article generator for sustainability topics.
 *
 * - generateBlogArticle - A function to generate a blog article.
 * - GenerateBlogArticleInput - The input type for the generateBlogArticle function.
 * - GenerateBlogArticleOutput - The return type for the generateBlogArticle function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateBlogArticleInputSchema = z.object({
  topic: z.string().describe('The topic of the blog article.'),
  keywords: z.string().describe('Keywords related to the blog article, comma separated.'),
  tone: z.string().describe('The tone of the blog article (e.g., informative, persuasive, humorous).'),
  length: z.string().describe('The desired length of the blog article (e.g., short, medium, long).'),
});
export type GenerateBlogArticleInput = z.infer<typeof GenerateBlogArticleInputSchema>;

const GenerateBlogArticleOutputSchema = z.object({
  title: z.string().describe('The title of the generated blog article.'),
  content: z.string().describe('The content of the generated blog article.'),
});
export type GenerateBlogArticleOutput = z.infer<typeof GenerateBlogArticleOutputSchema>;

export async function generateBlogArticle(input: GenerateBlogArticleInput): Promise<GenerateBlogArticleOutput> {
  return generateBlogArticleFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateBlogArticlePrompt',
  input: {schema: GenerateBlogArticleInputSchema},
  output: {schema: GenerateBlogArticleOutputSchema},
  prompt: `You are an expert blog writer specializing in sustainability topics. Generate a blog article based on the following information:

Topic: {{{topic}}}
Keywords: {{{keywords}}}
Tone: {{{tone}}}
Length: {{{length}}}

Write an engaging and informative blog article with a title.`,
});

const generateBlogArticleFlow = ai.defineFlow(
  {
    name: 'generateBlogArticleFlow',
    inputSchema: GenerateBlogArticleInputSchema,
    outputSchema: GenerateBlogArticleOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
