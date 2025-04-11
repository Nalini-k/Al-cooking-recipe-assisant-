
import { Recipe } from '@/types';

export const smoothieBowl: Recipe = {
  id: '6',
  name: 'Rainbow Smoothie Bowl',
  image: 'https://images.unsplash.com/photo-1546039907-7fa05f864c02?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80',
  cookTime: 0,
  prepTime: 15,
  difficulty: 'Easy',
  servings: 2,
  rating: 4.7,
  cuisine: 'International',
  ingredients: [
    'For the base:',
    '2 frozen bananas',
    '1 cup frozen mixed berries',
    '1/2 cup plant-based milk (almond, coconut, etc.)',
    '1 tbsp chia seeds',
    'For toppings:',
    'Fresh fruits (kiwi, strawberries, blueberries)',
    'Granola',
    'Shredded coconut',
    'Nut butter',
    'Honey or maple syrup (optional)'
  ],
  instructions: [
    'Place the frozen bananas, berries, milk, and chia seeds in a high-speed blender.',
    'Blend until smooth but still thick. Add more milk if necessary, but keep it thick enough to eat with a spoon.',
    'Pour the smoothie into a bowl.',
    'Arrange toppings in rows or sections to create a rainbow effect.',
    'Drizzle with honey or maple syrup if desired.',
    'Serve immediately and enjoy with a spoon!'
  ],
  description: 'A vibrant, nutrient-packed smoothie bowl that\'s as beautiful as it is delicious. Perfect for a healthy breakfast or snack that will brighten your day.',
  tips: [
    'Use frozen fruits for a thicker consistency.',
    'For a creamier bowl, add half an avocado to the base mixture.',
    'Prepare toppings before blending the base to prevent melting.'
  ],
  variations: [
    'Green Monster: Use spinach, kiwi, and green apple for the base.',
    'Tropical Paradise: Use mango, pineapple, and coconut milk for the base.',
    'Chocolate Lover: Add cocoa powder to the base and top with dark chocolate chips.'
  ]
};
