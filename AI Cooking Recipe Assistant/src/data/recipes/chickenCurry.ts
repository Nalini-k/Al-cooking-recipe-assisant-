
import { Recipe } from '@/types';

export const chickenCurry: Recipe = {
  id: '4',
  name: 'Classic Chicken Curry',
  image: 'https://images.unsplash.com/photo-1604952348267-92854e465a5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80',
  cookTime: 40,
  prepTime: 20,
  difficulty: 'Medium',
  servings: 4,
  rating: 4.9,
  cuisine: 'Indian',
  ingredients: [
    '500g chicken, cut into pieces',
    '2 onions, finely chopped',
    '2 tomatoes, pureed',
    '2 tbsp ginger-garlic paste',
    '2 green chilies, slit',
    '1 tsp turmeric powder',
    '1 tsp red chili powder',
    '1 tsp coriander powder',
    '1 tsp cumin powder',
    '1/2 tsp garam masala',
    '1/4 cup yogurt',
    '3 tbsp cooking oil',
    'Salt to taste',
    'Fresh coriander leaves, chopped',
    '1 cup water'
  ],
  instructions: [
    'Heat oil in a deep pan over medium heat.',
    'Add chopped onions and sauté until golden brown.',
    'Add ginger-garlic paste and green chilies. Sauté for 2 minutes until raw smell disappears.',
    'Add turmeric, red chili, coriander, and cumin powders. Mix well and cook for a minute.',
    'Add tomato puree and cook until oil separates, about 5-7 minutes.',
    'Add chicken pieces and salt. Mix well to coat the chicken with the masala.',
    'Cook on high heat for 5 minutes, stirring occasionally.',
    'Reduce heat, add yogurt, and mix well.',
    'Add water, cover, and simmer for about 20-25 minutes until chicken is tender and the gravy thickens.',
    'Sprinkle garam masala and garnish with fresh coriander leaves.',
    'Serve hot with rice or naan.'
  ],
  description: 'A rich, aromatic chicken curry that\'s a staple in Indian cuisine. This versatile dish varies from region to region but always features a blend of spices that create depth of flavor.',
  tips: [
    'Marinate the chicken in yogurt and a bit of the spices for an hour before cooking for more tender meat.',
    'For a richer curry, add a splash of cream at the end.',
    'Don\'t rush the onion browning stage – it\'s crucial for developing flavor.'
  ],
  variations: [
    'South Indian style: Add mustard seeds, curry leaves, and coconut milk.',
    'British Indian Restaurant style: Add a spoonful of mixed pickle for extra tanginess.',
    'Healthy version: Use skinless chicken breast and low-fat yogurt.'
  ]
};
