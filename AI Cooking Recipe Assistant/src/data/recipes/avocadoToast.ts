
import { Recipe } from '@/types';

export const avocadoToast: Recipe = {
  id: '3',
  name: 'Avocado Toast',
  image: 'https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80',
  cookTime: 5,
  prepTime: 5,
  difficulty: 'Easy',
  servings: 2,
  rating: 4.5,
  cuisine: 'International',
  ingredients: [
    '2 slices of bread (sourdough recommended)',
    '1 ripe avocado',
    'Salt and pepper to taste',
    'Red pepper flakes (optional)',
    'Extra virgin olive oil',
    'Lemon juice',
    'Additional toppings (optional): poached egg, cherry tomatoes, feta cheese, microgreens'
  ],
  instructions: [
    'Toast the bread slices until golden and crisp.',
    'Cut the avocado in half, remove the pit, and scoop the flesh into a bowl.',
    'Mash the avocado with a fork, leaving some chunks for texture.',
    'Add salt, pepper, a squeeze of lemon juice, and mix well.',
    'Spread the mashed avocado evenly on the toast slices.',
    'Drizzle with olive oil, sprinkle with red pepper flakes if desired.',
    'Add any additional toppings you prefer.',
    'Serve immediately.'
  ],
  description: 'A simple, nutritious, and customizable breakfast or snack that has become iconic in cafe culture worldwide.',
  tips: [
    'Use ripe but not overripe avocados for the best texture and flavor.',
    'To keep the avocado from browning, brush with lemon juice immediately after cutting.',
    'For a protein boost, top with a poached or fried egg.'
  ],
  variations: [
    'Mediterranean style: Top with cherry tomatoes, feta cheese, and a sprinkle of za\'atar.',
    'Japanese style: Add furikake seasoning and a drizzle of soy sauce.',
    'Mexican style: Top with corn, black beans, cotija cheese, and a squeeze of lime.'
  ]
};
