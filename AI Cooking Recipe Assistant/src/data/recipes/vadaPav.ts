
import { Recipe } from '@/types';

export const vadaPav: Recipe = {
  id: '2',
  name: 'Vada Pav',
  image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80',
  cookTime: 30,
  prepTime: 15,
  difficulty: 'Medium',
  servings: 6,
  rating: 4.7,
  cuisine: 'Indian',
  ingredients: [
    'For the vada (potato fritter):',
    '4 large potatoes, boiled and mashed',
    '1 tbsp mustard seeds',
    '1 tbsp cumin seeds',
    '2 green chilies, finely chopped',
    '1 inch ginger, grated',
    '2 cloves garlic, minced',
    '1 tsp turmeric powder',
    '1 handful curry leaves, chopped',
    'Salt to taste',
    'Fresh coriander leaves, chopped',
    '1 cup gram flour (besan)',
    'Water, as needed',
    'Oil for deep frying',
    'For assembly:',
    '6 pav (soft bread rolls)',
    'Butter for toasting',
    'Green chutney',
    'Tamarind chutney',
    'Dry garlic chutney'
  ],
  instructions: [
    'For the vada mixture:',
    'Heat 2 tablespoons oil in a pan. Add mustard seeds and let them pop.',
    'Add cumin seeds, chopped green chilies, grated ginger, minced garlic, and curry leaves. Sauté for a minute.',
    'Add turmeric powder and mix well.',
    'Add the mashed potatoes and salt. Mix everything together and cook for 2-3 minutes.',
    'Turn off the heat and add chopped coriander leaves. Mix well and let it cool completely.',
    'For the batter:',
    'Make a smooth batter with gram flour, a pinch of turmeric, salt, and water. The consistency should be thick enough to coat the back of a spoon.',
    'For frying the vada:',
    'Heat oil in a deep pan for frying.',
    'Shape the potato mixture into round flat patties.',
    'Dip each patty in the gram flour batter, making sure it\'s coated evenly.',
    'Carefully drop the coated patty into the hot oil and fry until golden brown on both sides.',
    'Remove and drain on paper towels.',
    'For assembly:',
    'Slice the pav rolls horizontally, keeping them connected at the back like a book.',
    'Apply butter on both inner sides of the pav and toast lightly on a hot pan.',
    'Spread green chutney on one side and tamarind chutney on the other.',
    'Place the hot vada in between and sprinkle dry garlic chutney.',
    'Press gently and serve hot.'
  ],
  description: 'Vada Pav is a popular street food from Maharashtra, India. Often called the Indian burger, it consists of a spicy potato fritter (vada) sandwiched between a small bread roll (pav) with various chutneys.',
  tips: [
    'Make sure the oil is hot enough before frying the vadas. Test by dropping a small amount of batter - it should sizzle and rise immediately.',
    'The potato mixture should be completely cool before shaping into patties to avoid breaking.',
    'For extra flavor, add a thin layer of dry garlic chutney directly on the vada.'
  ],
  variations: [
    'Cheese Vada Pav: Add a slice of cheese when assembling.',
    'Schezwan Vada Pav: Use spicy Schezwan sauce instead of traditional chutneys.',
    'Mini Vada Pav: Make smaller versions for parties.'
  ]
};
