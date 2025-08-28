'use server';

/**
 * @fileOverview AI-powered flow to suggest personalized sustainable product bundles.
 *
 * - suggestProductBundles - A function that suggests personalized sustainable product bundles.
 * - SuggestProductBundlesInput - The input type for the suggestProductBundles function.
 * - SuggestProductBundlesOutput - The return type for the suggestProductBundles function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestProductBundlesInputSchema = z.object({
  browsingHistory: z
    .string()
    .describe('The user browsing history, including viewed products and categories.'),
  preferences: z.string().describe('The user preferences for eco-friendly products.'),
});
export type SuggestProductBundlesInput = z.infer<typeof SuggestProductBundlesInputSchema>;

const SuggestProductBundlesOutputSchema = z.object({
  bundles: z.array(
    z.object({
      name: z.string().describe('The name of the product bundle.'),
      description: z.string().describe('The description of the product bundle.'),
      products: z.array(
        z.object({
          name: z.string().describe('The name of the product.'),
          description: z.string().describe('The description of the product.'),
          ecoLabels: z.array(z.string()).describe('The eco-labels of the product.'),
        })
      ),
    })
  ).describe('The suggested product bundles.'),
});
export type SuggestProductBundlesOutput = z.infer<typeof SuggestProductBundlesOutputSchema>;

export async function suggestProductBundles(input: SuggestProductBundlesInput): Promise<SuggestProductBundlesOutput> {
  return suggestProductBundlesFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestProductBundlesPrompt',
  input: {schema: SuggestProductBundlesInputSchema},
  output: {schema: SuggestProductBundlesOutputSchema},
  prompt: `You are an e-commerce expert specializing in suggesting sustainable product bundles.

  Based on the user's browsing history and preferences, you will suggest personalized product bundles that consist of complementary eco-friendly items. Each bundle should have a name, description and a list of products with their name, description, and eco-labels.

  User Browsing History: {{{browsingHistory}}}
  User Preferences: {{{preferences}}}

  Suggest product bundles in JSON format:
  {{outputFormat schema=SuggestProductBundlesOutputSchema}}
  `,
});

const suggestProductBundlesFlow = ai.defineFlow(
  {
    name: 'suggestProductBundlesFlow',
    inputSchema: SuggestProductBundlesInputSchema,
    outputSchema: SuggestProductBundlesOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
