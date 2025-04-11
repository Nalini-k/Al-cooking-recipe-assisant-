
import { Recipe, RecipeSearchResult } from '@/types';
import { mockRecipes } from '@/data/recipes';

export const getRecipes = async (): Promise<Recipe[]> => {
  // In a real app, this would be an API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockRecipes);
    }, 1000);
  });
};

export const getRecipeById = async (id: string): Promise<Recipe | undefined> => {
  // In a real app, this would be an API call
  return new Promise((resolve) => {
    setTimeout(() => {
      const recipe = mockRecipes.find(recipe => recipe.id === id);
      resolve(recipe);
    }, 800);
  });
};

export const searchByIngredients = async (ingredients: string[]): Promise<RecipeSearchResult[]> => {
  // In a real app, this would be an API call to a backend service
  return new Promise((resolve) => {
    setTimeout(() => {
      if (!ingredients.length) {
        resolve([]);
        return;
      }
      
      const results = mockRecipes.map(recipe => {
        // Count how many of the searched ingredients match with the recipe
        const matchCount = ingredients.filter(ingredient => 
          recipe.ingredients.some(recipeIng => 
            recipeIng.toLowerCase().includes(ingredient.toLowerCase())
          )
        ).length;
        
        // Calculate match percentage
        const matchPercentage = Math.min(
          100, 
          Math.round((matchCount / ingredients.length) * 100)
        );
        
        return {
          id: recipe.id,
          name: recipe.name,
          image: recipe.image,
          cookTime: recipe.cookTime,
          prepTime: recipe.prepTime,
          difficulty: recipe.difficulty,
          rating: recipe.rating,
          matchPercentage
        };
      })
      .filter(result => result.matchPercentage > 0)
      .sort((a, b) => b.matchPercentage - a.matchPercentage);
      
      resolve(results);
    }, 1500);
  });
};

export const uploadAndRecognizeImage = async (image: File): Promise<Recipe | null> => {
  // In a real app, this would upload the image to a server and process it with AI
  return new Promise((resolve) => {
    // Simulate AI image recognition
    setTimeout(() => {
      // Always return Vada Pav for demo purposes
      const vadaPav = mockRecipes.find(recipe => recipe.name === 'Vada Pav');
      resolve(vadaPav || null);
    }, 2000);
  });
};
