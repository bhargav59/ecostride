import type { Product, BlogArticle, Category, Testimonial } from './types';

const allProducts: Product[] = [
  {
    id: '1',
    name: 'Reusable Bamboo Cutlery Set',
    description: 'Eco-friendly cutlery set for on-the-go meals.',
    longDescription: 'Say goodbye to single-use plastic cutlery with our beautifully crafted Bamboo Cutlery Set. This complete set includes a fork, knife, spoon, chopsticks, and a cleaning brush, all made from sustainably sourced bamboo. Lightweight and durable, it comes in a convenient canvas pouch, making it perfect for your lunch bag, backpack, or car. By choosing bamboo, you\'re opting for a fast-growing, renewable resource that requires no pesticides and minimal water.',
    price: 14.99,
    images: ['https://picsum.photos/600/600?random=1', 'https://picsum.photos/600/600?random=18', 'https://picsum.photos/600/600?random=19'],
    aiHint: 'bamboo cutlery',
    ecoLabels: ['Plastic-Free', 'Vegan'],
    category: 'Kitchen',
    slug: 'reusable-bamboo-cutlery-set',
    careInstructions: 'Hand wash with warm, soapy water and dry thoroughly. Avoid soaking. Not suitable for dishwasher or microwave use. The canvas pouch is machine washable on a gentle cycle.',
    reviews: [
        { id: 'r1', rating: 5, text: 'I take this everywhere! It\'s so convenient and I feel great not using plastic utensils.', author: 'Greta T.', date: '2024-06-12' },
        { id: 'r2', rating: 4, text: 'Love the set, but the knife isn\'t super sharp. It\'s fine for most things though.', author: 'Alex R.', date: '2024-06-05' },
    ],
  },
  {
    id: '2',
    name: 'Organic Cotton Tote Bag',
    description: 'A stylish and durable tote bag for your daily needs.',
    longDescription: 'Meet your new favorite bag. Made from 100% GOTS-certified organic cotton, this tote is as sturdy as it is stylish. Its spacious interior and reinforced handles make it ideal for grocery runs, trips to the farmer\'s market, or carrying your daily essentials. Unlike conventional cotton, organic cotton is grown without harmful pesticides and fertilizers, protecting ecosystems and farmworkers.',
    price: 24.50,
    images: ['https://picsum.photos/600/600?random=2', 'https://picsum.photos/600/600?random=20', 'https://picsum.photos/600/600?random=21'],
    aiHint: 'cotton bag',
    ecoLabels: ['Organic', 'Fair Trade'],
    category: 'Apparel',
    slug: 'organic-cotton-tote-bag',
    careInstructions: 'Machine wash cold with like colors. Tumble dry low or hang to dry to minimize shrinkage. Iron on medium if needed.',
    reviews: [
      { id: 'r3', rating: 5, text: 'This tote is incredibly strong! I use it for everything. The quality is amazing.', author: 'Chloe M.', date: '2024-06-15' },
      { id: 'r4', rating: 5, text: 'So chic and practical. I get compliments on it all the time.', author: 'Ben S.', date: '2024-06-10' },
    ],
  },
  {
    id: '3',
    name: 'Solid Shampoo Bar',
    description: 'Zero-waste shampoo that leaves your hair soft and clean.',
    longDescription: 'Liberate your shower from plastic bottles with our nourishing Solid Shampoo Bar. Formulated with natural ingredients like coconut oil and shea butter, it creates a rich lather that cleanses gently without stripping your hair\'s natural oils. Each bar is equivalent to 2-3 bottles of liquid shampoo, making it a fantastic value and a win for the planet. Suitable for all hair types and scented with essential oils.',
    price: 12.00,
    images: ['https://picsum.photos/600/600?random=3', 'https://picsum.photos/600/600?random=22', 'https://picsum.photos/600/600?random=23'],
    aiHint: 'shampoo bar',
    ecoLabels: ['Plastic-Free', 'Vegan'],
    category: 'Beauty',
    slug: 'solid-shampoo-bar',
    careInstructions: 'Wet your hair and the bar. Rub the bar directly on your scalp or between your hands to create a lather. Massage into hair and rinse thoroughly. To prolong the life of your bar, keep it dry between uses on a draining soap dish.',
    reviews: [
        { id: 'r5', rating: 5, text: 'My hair has never felt better! I was skeptical about a shampoo bar, but I am a total convert now.', author: 'Olivia P.', date: '2024-06-20' },
        { id: 'r6', rating: 4, text: 'Lathers up really well and smells great. Just wish it was a little bigger.', author: 'Liam F.', date: '2024-06-18' },
    ],
  },
  {
    id: '4',
    name: 'Recycled Glass Water Bottle',
    description: 'Stay hydrated with this beautifully designed water bottle.',
    longDescription: 'Make a statement for sustainability with our Recycled Glass Water Bottle. Each bottle is crafted from 100% recycled glass, reducing landfill waste and the need for virgin materials. The sleek design is complemented by a sustainably sourced bamboo lid with a leak-proof silicone seal. Glass is non-porous and free from chemicals like BPA, ensuring your water tastes pure and fresh every time.',
    price: 29.99,
    images: ['https://picsum.photos/600/600?random=4', 'https://picsum.photos/600/600?random=24', 'https://picsum.photos/600/600?random=25'],
    aiHint: 'glass bottle',
    ecoLabels: ['Recycled', 'Plastic-Free'],
    category: 'Lifestyle',
    slug: 'recycled-glass-water-bottle',
    careInstructions: 'Glass bottle is dishwasher safe. Hand wash the bamboo lid to preserve its quality and prevent warping. Do not freeze or microwave.',
    reviews: [
        { id: 'r7', rating: 5, text: 'Such a beautiful bottle! It\'s heavy and feels very high-quality. Doesn\'t leak at all.', author: 'Sophia L.', date: '2024-06-21' },
    ],
  },
  {
    id: '5',
    name: 'Beeswax Food Wraps',
    description: 'A natural alternative to plastic wrap for food storage.',
    longDescription: 'Wrap, rinse, and reuse. Our Beeswax Food Wraps are the perfect replacement for single-use plastic wrap. Made with organic cotton, beeswax, jojoba oil, and tree resin, these wraps are pliable, washable, and compostable. Use the warmth of your hands to create a seal around sandwiches, cheese, vegetables, or a bowl. They keep food fresh naturally while letting it breathe.',
    price: 18.50,
    images: ['https://picsum.photos/600/600?random=5', 'https://picsum.photos/600/600?random=26', 'https://picsum.photos/600/600?random=27'],
    aiHint: 'beeswax wraps',
    ecoLabels: ['Plastic-Free', 'Organic'],
    category: 'Kitchen',
    slug: 'beeswax-food-wraps',
    careInstructions: 'Wash in cool water with mild soap and air dry. Avoid heat sources like hot water, microwaves, and ovens. With proper care, your wraps can last for up to a year. At the end of their life, they can be composted.',
    reviews: [
        { id: 'r8', rating: 5, text: 'These work so well! My cheese and avocados stay fresh for so much longer.', author: 'Noah G.', date: '2024-06-19' },
        { id: 'r9', rating: 5, text: 'A total game changer for reducing plastic in my kitchen. And they smell lovely!', author: 'Isabella H.', date: '2024-06-14' },
    ],
  }
];

export const featuredProducts: Product[] = allProducts.slice(0, 5);

export { allProducts };

export const featuredCategories: Category[] = [
  {
    name: 'Home & Kitchen',
    href: '/products?category=Kitchen',
    image: 'https://picsum.photos/600/600?random=6',
    aiHint: 'modern kitchen',
  },
  {
    name: 'Apparel',
    href: '/products?category=Apparel',
    image: 'https://picsum.photos/600/600?random=7',
    aiHint: 'sustainable fashion',
  },
  {
    name: 'Health & Beauty',
    href: '/products?category=Beauty',
    image: 'https://picsum.photos/600/600?random=8',
    aiHint: 'natural cosmetics',
  },
  {
    name: 'On The Go',
    href: '/products?category=Lifestyle',
    image: 'https://picsum.photos/600/600?random=9',
    aiHint: 'outdoor adventure',
  },
];

export const blogArticles: BlogArticle[] = [
    {
      id: '1',
      title: '10 Simple Swaps for a Zero-Waste Kitchen',
      excerpt: 'Discover easy and affordable changes you can make in your kitchen to reduce waste and live more sustainably. We\'ll explore everything from reusable food storage to DIY cleaning solutions.',
      imageUrl: 'https://picsum.photos/600/400?random=10',
      slug: 'zero-waste-kitchen-swaps',
      author: 'Jane Doe',
      date: '2024-05-20',
      content: `
        <p>Adopting a zero-waste lifestyle can feel daunting, but the kitchen is the perfect place to start. It's often the hub of household waste, from food packaging to disposable cleaning supplies. By making a few simple, conscious swaps, you can significantly reduce your environmental footprint, save money, and create a healthier home. This guide will walk you through ten easy and effective changes to start your journey towards a zero-waste kitchen.</p>
        
        <h3>1. Ditch Paper Towels for Reusable Cloths</h3>
        <p>Paper towels are a single-use convenience that quickly adds to landfill waste. Instead, invest in a set of reusable cloths made from cotton, bamboo, or microfiber. Use them for spills, cleaning surfaces, and even as napkins. Keep a small bin under the sink for used cloths and toss them in the wash with your regular laundry. This simple change reduces deforestation and saves you money in the long run.</p>
        
        <h3>2. Embrace Reusable Food Storage</h3>
        <p>Plastic wrap and single-use bags are major sources of plastic pollution. Switch to sustainable alternatives like beeswax wraps, silicone food covers, and glass containers. Beeswax wraps are pliable and create a natural seal around bowls and food items. Glass containers are durable, non-toxic, and perfect for storing leftovers, meal prepping, and packing lunches. They don't absorb odors or stains like plastic, making them a lasting investment.</p>
        
        <h3>3. Master the Art of Bulk Buying</h3>
        <p>The bulk section of your grocery store is a zero-waste hero. Bring your own reusable bags and jars to stock up on pantry staples like grains, nuts, spices, and pasta. This practice eliminates packaging waste entirely. It also allows you to buy exactly the amount you need, which reduces food waste and can be more cost-effective. Just remember to weigh your empty containers before filling them up!</p>
        
        <h3>4. Opt for Solid Dish Soap</h3>
        <p>Liquid dish soap almost always comes in a plastic bottle. A solid dish soap bar is a fantastic alternative. These bars are concentrated, last a long time, and come in minimal, plastic-free packaging. Pair a dish soap bar with a wooden scrub brush or a compostable sponge for a completely eco-friendly dishwashing routine.</p>
        
        <h3>5. Start a Compost Bin</h3>
        <p>Food scraps don't belong in the landfill, where they release methane, a potent greenhouse gas. Composting is the process of recycling organic waste into a nutrient-rich soil amendment for your garden. You can start a compost pile in your backyard or use a small indoor bin if space is limited. Fruit and vegetable peels, coffee grounds, and eggshells can all be composted, diverting a significant amount of waste from the trash.</p>
        
        <h3>6. Brew Your Coffee and Tea Sustainably</h3>
        <p>Single-use coffee pods and tea bags contribute to a mountain of waste. Switch to a French press, pour-over coffee maker, or a reusable coffee filter for your daily brew. For tea lovers, loose-leaf tea in a reusable infuser offers a more flavorful and waste-free experience. Not only is this better for the planet, but it also gives you more control over the quality and strength of your beverage.</p>
        
        <h3>7. Make Your Own Cleaning Solutions</h3>
        <p>Conventional cleaning products are often filled with harsh chemicals and packaged in plastic. You can create effective, all-natural cleaners using simple ingredients you probably already have. A mixture of white vinegar and water in a spray bottle works wonders on glass and surfaces. Baking soda is a gentle abrasive for scrubbing sinks and tubs. Add a few drops of your favorite essential oil for a pleasant scent.</p>
        
        <h3>8. Choose Reusable Shopping and Produce Bags</h3>
        <p>This is one of the most well-known eco-friendly habits, and for good reason. Plastic bags are a major threat to wildlife and ecosystems. Always bring your own reusable tote bags to the grocery store. Don't forget smaller reusable produce bags for fruits and vegetables to avoid the flimsy plastic ones provided in-store.</p>
        
        <h3>9. Grow Your Own Herbs</h3>
        <p>Fresh herbs often come in plastic clamshells that are difficult to recycle. Why not grow your own? A small herb garden on a sunny windowsill is easy to maintain and provides fresh flavors for your cooking. Basil, mint, parsley, and rosemary are great options for beginners. It's a rewarding way to reduce packaging waste and connect with your food.</p>
        
        <h3>10. Rethink Your Leftovers</h3>
        <p>Food waste is a significant environmental issue. Get creative with leftovers to ensure nothing goes to waste. Vegetable scraps can be saved in the freezer to make a flavorful homemade broth. Stale bread can become croutons or breadcrumbs. Leftover rice can be transformed into fried rice or rice pudding. A "use-it-up" meal once a week can be a fun challenge and an effective way to clean out the fridge.</p>
        
        <p>Making the switch to a zero-waste kitchen is a journey of small, intentional steps. Don't feel pressured to change everything overnight. Start with one or two swaps that feel manageable and build from there. Each change you make is a victory for your wallet and the planet.</p>
      `,
    },
    {
      id: '2',
      title: 'The Ultimate Guide to Building an Ethical Wardrobe',
      excerpt: 'Learn how to build a wardrobe that\'s both stylish and sustainable. This guide covers everything from understanding fabrics and certifications to caring for your clothes to make them last.',
      imageUrl: 'https://picsum.photos/600/400?random=11',
      slug: 'guide-to-ethical-fashion',
      author: 'John Smith',
      date: '2024-05-15',
      content: `
        <p>The fashion industry is one of the largest polluters in the world, infamous for its resource-intensive production methods and "fast fashion" model that encourages disposable consumption. But it doesn't have to be this way. Building an ethical and sustainable wardrobe is a powerful way to vote with your dollar and advocate for a healthier planet and fairer labor practices. This guide will provide you with the knowledge and tools to curate a closet that aligns with your values without sacrificing style.</p>

        <h3>Part 1: The Mindset Shift - Quality Over Quantity</h3>
        <p>The first step towards an ethical wardrobe is to move away from the fast fashion mindset. Instead of chasing fleeting trends and buying cheap, poorly made clothes, focus on investing in high-quality, timeless pieces that you'll love and wear for years. A "capsule wardrobe" approach, where you have a limited number of versatile items that can be mixed and matched, is a great strategy. Before buying anything, ask yourself: "Will I wear this at least 30 times?" This simple question can curb impulse purchases and encourage more thoughtful consumption.</p>

        <h3>Part 2: Understanding Sustainable Fabrics</h3>
        <p>The material of your clothing has a huge impact on its environmental footprint. Here’s a breakdown of fabrics to look for and those to avoid:</p>
        <ul>
          <li><strong>Best Choices:</strong> Look for organic cotton (uses less water and no pesticides), linen (durable and made from the water-efficient flax plant), hemp (requires very little water and no pesticides), and recycled materials like recycled polyester (rPET) or recycled cotton. TENCEL™ Lyocell is another excellent option, made from sustainably sourced wood pulp in a closed-loop system.</li>
          <li><strong>Good Choices:</strong> Conventional cotton is better than synthetic alternatives, but it's very water-intensive. Wool is a natural, durable, and biodegradable fiber, but ensure it comes from farms with high animal welfare standards (look for certifications like the Responsible Wool Standard).</li>
          <li><strong>Fabrics to Avoid:</strong> Conventional polyester, nylon, and acrylic are petroleum-based plastics that shed microplastics when washed and are not biodegradable. Rayon (or viscose), while plant-based, often involves a chemically intensive process that harms workers and the environment, unless it's from a certified source like Lenzing's ECOVERO™.</li>
        </ul>

        <h3>Part 3: Decoding Certifications and Labels</h3>
        <p>Labels can help you identify truly sustainable brands. Here are some of the most reputable certifications to look for:</p>
        <ul>
          <li><strong>GOTS (Global Organic Textile Standard):</strong> The leading standard for organic fibers, covering ecological and social criteria.</li>
          <li><strong>Fair Trade Certified:</strong> Ensures that workers who made the product received fair wages and work in safe conditions.</li>
          <li><strong>B Corp Certification:</strong> A comprehensive certification that assesses a company's entire social and environmental performance, from supply chain to employee benefits.</li>
          <li><strong>OEKO-TEX®:</strong> Certifies that the fabric has been tested and found free of harmful levels of toxic substances.</li>
        </ul>

        <h3>Part 4: The Power of Secondhand and Mending</h3>
        <p>The most sustainable garment is the one that already exists. Thrifting, consignment shopping, and clothing swaps are fantastic ways to give clothes a second life and divert them from landfills. Platforms like ThredUp, Poshmark, and local vintage shops are treasure troves of unique finds.</p>
        <p>Furthermore, learning basic mending skills can dramatically extend the life of your clothes. A missing button, a small tear, or a fallen hem are all easily fixable. Repairing your clothes instead of replacing them fosters a deeper connection to your belongings and is a radical act in a disposable culture.</p>
        
        <h3>Part 5: Caring for Your Clothes</h3>
        <p>How you care for your clothes impacts their longevity and environmental footprint. Wash your clothes less often—spot clean when possible. When you do wash, use cold water to save energy and prevent colors from fading. Avoid the dryer, which consumes a lot of energy and can damage fibers; line-dry your clothes instead. Use a Guppyfriend bag to catch microplastics when washing synthetic fabrics.</p>

        <h3>Conclusion: A Journey of Progress, Not Perfection</h3>
        <p>Building an ethical wardrobe is a continuous journey, not a destination. It's about making better choices whenever you can. Start small by researching brands, prioritizing natural fibers, and taking care of the clothes you already own. Every conscious decision contributes to a more sustainable and just fashion industry for all.</p>
      `,
    },
    {
      id: '3',
      title: 'DIY Natural Cleaning: A Guide to a Healthy, Chemical-Free Home',
      excerpt: 'Skip the harsh chemicals and create your own effective, non-toxic cleaners using simple household ingredients. It\'s better for your health, your wallet, and the environment.',
      imageUrl: 'https://picsum.photos/600/400?random=12',
      slug: 'diy-natural-cleaning-products',
      author: 'Emily White',
      date: '2024-05-10',
      content: `
        <p>The cleaning aisle at the supermarket is a dizzying display of plastic bottles filled with synthetic fragrances and harsh chemicals. These conventional cleaners can pollute our indoor air, irritate our skin and respiratory systems, and contaminate our waterways. The good news is that you don't need them. For generations, people kept their homes sparkling clean using simple, natural, and inexpensive ingredients. This guide will show you how to ditch the toxins and embrace the power of DIY cleaning for a healthier home and planet.</p>

        <h3>Your Natural Cleaning Toolkit</h3>
        <p>You only need a few key ingredients to tackle most cleaning jobs in your home. These items are versatile, affordable, and readily available.</p>
        <ul>
            <li><strong>White Vinegar:</strong> Its acidity makes it a powerful disinfectant and degreaser. It's perfect for cutting through soap scum, cleaning glass, and deodorizing.</li>
            <li><strong>Baking Soda:</strong> A gentle abrasive that's great for scrubbing surfaces without scratching. It also excels at absorbing and neutralizing odors.</li>
            <li><strong>Castile Soap:</strong> A concentrated vegetable-based soap that's a fantastic all-purpose cleaner when diluted with water. Dr. Bronner's is a popular brand.</li>
            <li><strong>Lemon Juice:</strong> A natural bleach, stain remover, and disinfectant with a fresh, clean scent.</li>
            <li><strong>Essential Oils:</strong> Add a few drops of tea tree, lavender, or lemon essential oil for antibacterial properties and a natural fragrance.</li>
            <li><strong>Reusable Spray Bottles:</strong> Invest in a few glass spray bottles to store your homemade concoctions.</li>
        </ul>

        <h3>Essential DIY Cleaning Recipes</h3>
        
        <h4>1. All-Purpose Cleaner</h4>
        <p>This is your go-to for countertops, shelves, and most surfaces. (Note: Avoid using vinegar on natural stone like granite or marble, as its acidity can cause etching.)</p>
        <p><strong>Recipe:</strong> In a spray bottle, combine one part white vinegar and one part water. Add 10-15 drops of your favorite essential oil (lemon or tea tree work well). Shake gently to mix. Spray on surfaces and wipe clean with a reusable cloth.</p>

        <h4>2. Glass and Mirror Cleaner</h4>
        <p>Say goodbye to streaks with this simple, effective formula.</p>
        <p><strong>Recipe:</strong> In a spray bottle, mix one part white vinegar with four parts water. For extra cleaning power, you can add a half teaspoon of cornstarch, which helps prevent streaking. Shake well, spray on glass, and wipe away with a squeegee or a microfiber cloth for a crystal-clear finish.</p>

        <h4>3. Gentle Scouring Scrub</h4>
        <p>Perfect for cleaning sinks, bathtubs, and stovetops without scratching.</p>
        <p><strong>Recipe:</strong> Make a paste by mixing baking soda with a small amount of water or castile soap. Apply the paste to the surface, let it sit for a few minutes for tough grime, and then gently scrub with a sponge or brush. Rinse thoroughly.</p>

        <h4>4. Toilet Bowl Cleaner</h4>
        <p>This two-step process disinfects and deodorizes without harsh bleach.</p>
        <p><strong>Recipe:</strong> Sprinkle about a half-cup of baking soda into the toilet bowl. Follow with about one cup of white vinegar. The mixture will fizz, helping to dislodge grime. Let it sit for 15-20 minutes, then scrub with a toilet brush and flush.</p>
        
        <h4>5. Wood Floor and Furniture Polish</h4>
        <p>Nourish and shine your wood surfaces naturally.</p>
        <p><strong>Recipe:</strong> In a small bowl or spray bottle, mix one cup of olive oil with a half-cup of lemon juice or white vinegar. Lightly apply a small amount to a soft cloth, and polish wood surfaces in the direction of the grain. Buff with a clean, dry cloth to remove any excess.</p>

        <h3>Why Make the Switch?</h3>
        <ul>
            <li><strong>Healthier Home:</strong> You eliminate volatile organic compounds (VOCs) and other toxic chemicals, improving your indoor air quality and reducing the risk of allergies and respiratory issues.</li>
            <li><strong>Eco-Friendly:</strong> DIY cleaners use biodegradable ingredients and reduce plastic waste from disposable bottles.</li>
            <li><strong>Cost-Effective:</strong> Ingredients like vinegar and baking soda are incredibly cheap compared to specialized commercial cleaners.</li>
            <li><strong>Empowering:</strong> Taking control of the products you use in your home is a satisfying and empowering act of self-sufficiency.</li>
        </ul>
        <p>Making your own cleaning products is a simple, impactful step toward a more sustainable lifestyle. It's a return to basics that proves a clean home doesn't have to come at the cost of our health or the environment.</p>
      `
    },
    {
        id: '4',
        title: 'Product Spotlight: The Magic of Beeswax Wraps',
        excerpt: 'Dive deep into one of the most popular zero-waste swaps: beeswax wraps. Learn what they are, how to use them, and why they are a game-changer for reducing plastic in the kitchen.',
        imageUrl: 'https://picsum.photos/600/400?random=13',
        slug: 'product-spotlight-beeswax-wraps',
        author: 'Alex Chen',
        date: '2024-05-05',
        content: `
            <p>In the quest to reduce single-use plastics, the kitchen is often ground zero. From plastic-wrapped vegetables to cling film-covered leftovers, our food storage habits are a major source of waste. Enter the beeswax wrap: a simple, beautiful, and surprisingly effective solution that's buzzing with potential. If you've been curious about this eco-friendly alternative, this spotlight will cover everything you need to know.</p>
            
            <h3>What Exactly Are Beeswax Wraps?</h3>
            <p>Beeswax wraps are a sustainable alternative to plastic wrap and sandwich bags. They are typically made from a piece of organic cotton fabric infused with a blend of food-grade beeswax, pine resin, and jojoba oil. This combination creates a pliable, slightly sticky, and water-resistant cloth that can be used to cover bowls, wrap sandwiches, or keep fruits and vegetables fresh.</p>
            <ul>
                <li><strong>Beeswax:</strong> Provides the wrap with natural antibacterial properties and makes it waterproof.</li>
                <li><strong>Pine Resin:</strong> Adds the crucial stickiness, allowing the wrap to cling to itself and to containers.</li>
                <li><strong>Jojoba Oil:</strong> Keeps the wrap flexible and prevents the beeswax from cracking over time.</li>
            </ul>
            
            <h3>How Do You Use Them?</h3>
            <p>Using beeswax wraps is incredibly intuitive. The warmth of your hands is the secret ingredient. Simply place the wrap over a bowl or around a piece of food. Press down firmly with your hands for a few seconds. The warmth softens the wax, allowing you to create a tight seal. As the wrap cools, it stiffens, holding its shape and locking in freshness.</p>
            <p>They are perfect for:</p>
            <ul>
                <li>Covering a bowl of leftovers.</li>
                <li>Wrapping half an avocado, a lemon, or an onion.</li>
                <li>Folding into a pouch for snacks like nuts or crackers.</li>
                <li>Wrapping a sandwich or a block of cheese.</li>
            </ul>
            <p>It's important to note that they should not be used for raw meat or fish due to the risk of bacterial contamination, as they cannot be washed with hot water.</p>
            
            <h3>Caring for Your Beeswax Wraps</h3>
            <p>With proper care, a beeswax wrap can last for up to a year or even longer. The key is to avoid heat, which will melt the wax.</p>
            <p>To clean your wrap, simply wash it in <strong>cool</strong> water with a mild, eco-friendly dish soap. Use a soft sponge or your hands to gently wipe away any food residue. Once it's clean, hang it up or lay it flat to air dry. Avoid wringing it out. Once dry, you can fold it and store it in a drawer or a basket on your counter.</p>
            
            <h3>The End-of-Life Plan</h3>
            <p>One of the best things about beeswax wraps is their end-of-life story. Unlike plastic wrap, which sits in a landfill for centuries, a worn-out beeswax wrap is completely biodegradable and compostable. Simply cut it into strips and add it to your compost bin. Alternatively, because it's just waxed cotton, it can be used as a natural fire starter for your fireplace or campfire.</p>
            
            <h3>Why Make the Switch?</h3>
            <p>Switching to beeswax wraps is more than just a trend; it's a tangible step toward a less wasteful lifestyle. You'll keep hundreds of feet of plastic wrap out of the environment over the course of the wrap's life. They are made from natural, renewable resources and support a circular economy. Plus, they add a touch of color and charm to your kitchen. It's a small change that feels good to make, proving that sustainability can be both practical and beautiful.</p>
        `
    },
    {
        id: '5',
        title: '5-Minute Sustainability: Quick Tips for a Greener Day',
        excerpt: 'Think you don\'t have time to be eco-friendly? Think again. This article breaks down simple, impactful actions you can take in just a few minutes to make your daily routine more sustainable.',
        imageUrl: 'https://picsum.photos/600/400?random=14',
        slug: 'five-minute-sustainability-tips',
        author: 'Maria Garcia',
        date: '2024-04-28',
        content: `
            <p>The idea of "living sustainably" can sometimes feel like a monumental task, requiring a complete overhaul of our lives. But in reality, the most lasting change is often built through small, consistent habits. You don't need hours of free time to make a positive impact. In fact, you can make dozens of greener choices throughout your day, many of which take less than five minutes. Here are some quick and easy tips to integrate sustainability into your busy schedule.</p>
            
            <h3>Morning Routine (5 Minutes)</h3>
            <ul>
                <li><strong>Turn off the tap:</strong> While brushing your teeth, turn off the water. This simple act can save up to 8 gallons of water per day. Time: 2 seconds.</li>
                <li><strong>Shorten your shower:</strong> Challenge yourself to a 5-minute shower. It saves a significant amount of water and the energy used to heat it. Time: 5 minutes.</li>
                <li><strong>Grab your reusables:</strong> Before you head out the door, take 30 seconds to grab your reusable water bottle, coffee cup, and a tote bag. This prepares you to refuse single-use items throughout the day. Time: 30 seconds.</li>
            </ul>
            
            <h3>Workday & Lunch (5 Minutes)</h3>
            <ul>
                <li><strong>Unplug your charger:</strong> Once your phone or laptop is fully charged, unplug the charger from the wall. Even when not actively charging a device, chargers draw a small amount of "phantom" energy. Time: 5 seconds.</li>
                <li><strong>Switch to a green search engine:</strong> Change your default browser search engine to one like Ecosia, which uses its ad revenue to plant trees where they are needed most. Time: 1 minute.</li>
                <li><strong>Pack a waste-free lunch:</strong> When packing your lunch, use a reusable container instead of a plastic bag. Pack a cloth napkin and real cutlery. This completely eliminates lunchtime waste. Time: 3 minutes.</li>
                <li><strong>Say no to straws and disposable cutlery:</strong> When ordering takeout or a drink, make it a habit to say "no straw, please" and refuse the plastic cutlery packet if you have your own or are eating at home. Time: 3 seconds.</li>
            </ul>
            
            <h3>Evening Routine (5 Minutes)</h3>
            <ul>
                <li><strong>Sort your mail immediately:</strong> Stand over your recycling bin as you sort your mail. Immediately recycle junk mail and envelopes. This prevents paper clutter from piling up on your counter. Time: 1 minute.</li>
                <li><strong>Switch to LED bulbs:</strong> As your old incandescent bulbs burn out, replace them with energy-efficient LEDs. An LED bulb uses up to 85% less energy and can last 25 times longer. The swap itself takes seconds. Time: 30 seconds per bulb.</li>
                <li><strong>Plan one meat-free meal:</strong> Reducing meat consumption is one of the most impactful individual actions for the environment. Take five minutes to plan a delicious vegetarian or vegan meal for the next day. It reduces your carbon footprint and is great for your health. Time: 5 minutes.</li>
                <li><strong>Power down completely:</strong> Instead of leaving your TV and other electronics on standby mode overnight, switch them off at the power strip. This can save a surprising amount of energy over time. Time: 10 seconds.</li>
            </ul>
            
            <h3>The Power of a Few Minutes</h3>
            <p>These actions may seem small in isolation, but when they become part of your daily rhythm, their collective impact is enormous. They prove that sustainability is not about perfection or grand gestures; it's about mindfulness and intention. By seizing these five-minute opportunities, you are actively participating in the creation of a healthier planet, one small, manageable step at a time.</p>
        `
    }
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah K.',
    quote: "I love that I can shop with a clear conscience. The products are high-quality, and the company's commitment to sustainability is inspiring. My go-to for eco-friendly gifts!",
    avatar: 'https://picsum.photos/100/100?random=15',
  },
  {
    id: '2',
    name: 'Michael B.',
    quote: "Finally, a store that gets it. The bamboo cutlery set is now a permanent fixture in my bag, and I couldn't be happier to ditch single-use plastics. Great products, great mission.",
    avatar: 'https://picsum.photos/100/100?random=16',
  },
  {
    id: '3',
    name: 'Elena R.',
    quote: "Shopping at EcoStride feels good. The items are beautiful, a the packaging is plastic-free, and I know I'm supporting a business that truly cares about the planet. Highly recommend!",
    avatar: 'https://picsum.photos/100/100?random=17',
  },
];
