
export interface Recipe {
  id: string;
  name: string;
  image: string;
  cookTime: number;
  prepTime: number;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  servings: number;
  rating: number;
  cuisine: string;
  ingredients: string[];
  instructions: string[];
  description: string;
  tips?: string[];
  variations?: string[];
}

export interface RecipeSearchResult {
  id: string;
  name: string;
  image: string;
  cookTime: number;
  prepTime: number;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  rating: number;
  matchPercentage: number;
}
