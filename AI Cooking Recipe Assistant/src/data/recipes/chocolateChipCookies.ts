
import { Recipe } from '@/types';

export const chocolateChipCookies: Recipe = {
  id: '5',
  name: 'Chocolate Chip Cookies',
  image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1777&q=80',
  cookTime: 10,
  prepTime: 15,
  difficulty: 'Easy',
  servings: 24,
  rating: 4.9,
  cuisine: 'American',
  ingredients: [
    '225g unsalted butter, softened',
    '200g brown sugar',
    '100g granulated sugar',
    '2 large eggs',
    '1 tsp vanilla extract',
    '300g all-purpose flour',
    '1 tsp baking soda',
    '1/2 tsp salt',
    '350g chocolate chips',
    '100g chopped nuts (optional)'
  ],
  instructions: [
    'Preheat oven to 375°F (190°C) and line baking sheets with parchment paper.',
    'In a large bowl, cream together butter, brown sugar, and granulated sugar until light and fluffy.',
    'Beat in eggs one at a time, then stir in vanilla.',
    'In a separate bowl, combine flour, baking soda, and salt.',
    'Gradually add dry ingredients to the butter mixture and mix just until incorporated.',
    'Fold in chocolate chips and nuts if using.',
    'Drop rounded tablespoons of dough onto prepared baking sheets, spacing them about 2 inches apart.',
    'Bake for 9-11 minutes until edges are golden but centers still look slightly underdone.',
    'Let cool on baking sheets for 2 minutes, then transfer to wire racks to cool completely.'
  ],
  description: 'Classic American chocolate chip cookies with a perfect balance of chewy centers and crisp edges. These timeless treats are enjoyed by all ages.',
  tips: [
    'For chewier cookies, use more brown sugar than white sugar.',
    'Chilling the dough for at least 24 hours develops more complex flavors.',
    'For uniform cookies, use an ice cream scoop to portion the dough.'
  ],
  variations: [
    'Double chocolate: Add 2 tablespoons of cocoa powder to the flour mixture.',
    'Sea salt: Sprinkle a few flakes of sea salt on top before baking.',
    'S\'mores style: Add mini marshmallows and graham cracker pieces to the dough.'
  ]
};
