
import { Recipe } from '@/types';

export const spaghettiCarbonara: Recipe = {
  id: '1',
  name: 'Spaghetti Carbonara',
  image: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80',
  cookTime: 15,
  prepTime: 10,
  difficulty: 'Medium',
  servings: 4,
  rating: 4.8,
  cuisine: 'Italian',
  ingredients: [
    '350g spaghetti',
    '200g pancetta or guanciale, diced',
    '4 large eggs',
    '50g pecorino cheese, grated',
    '50g parmesan, grated',
    'Salt and black pepper to taste',
    '2 cloves garlic, minced (optional)'
  ],
  instructions: [
    'Bring a large pot of salted water to boil and cook spaghetti according to package instructions until al dente.',
    'While pasta cooks, heat a large skillet over medium heat. Add pancetta and cook until crispy, about 5-7 minutes.',
    'In a bowl, whisk together eggs, grated cheeses, and freshly ground black pepper.',
    'When pasta is done, reserve 1 cup of pasta water, then drain pasta.',
    'Working quickly, add hot pasta to the skillet with pancetta, tossing to coat in the rendered fat.',
    'Remove skillet from heat and add the egg and cheese mixture, tossing continuously until creamy. Add splashes of pasta water as needed to create a silky sauce.',
    'Serve immediately with extra grated cheese and black pepper on top.'
  ],
  description: 'A classic Italian pasta dish made with eggs, cheese, cured pork, and black pepper. Authentic carbonara never includes cream.',
  tips: [
    'The key to carbonara is to work quickly and toss continuously to create a silky sauce without scrambling the eggs.',
    'Adding starchy pasta water helps create the perfect consistency.',
    'For an authentic taste, use guanciale instead of pancetta if available.'
  ],
  variations: [
    'Add green peas for color and sweetness (though traditionalists might protest).',
    'Use rigatoni or fettuccine instead of spaghetti.',
    'For a lighter version, use less pork and more black pepper.'
  ]
};
