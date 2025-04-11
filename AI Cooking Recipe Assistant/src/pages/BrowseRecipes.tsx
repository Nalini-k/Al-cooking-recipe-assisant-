
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { getRecipes } from '@/services/recipeService';
import Header from '@/components/Header';
import RecipeCard from '@/components/RecipeCard';
import LoadingSpinner from '@/components/LoadingSpinner';
import { UtensilsCrossed } from 'lucide-react';
import { RecipeSearchResult } from '@/types';

const BrowseRecipes: React.FC = () => {
  const { data: recipes, isLoading, error } = useQuery({
    queryKey: ['recipes'],
    queryFn: getRecipes
  });

  const categories = [
    'All',
    'Italian',
    'Indian',
    'American',
    'International'
  ];

  const [selectedCategory, setSelectedCategory] = React.useState('All');
  const [searchTerm, setSearchTerm] = React.useState('');

  const filteredRecipes = React.useMemo(() => {
    if (!recipes) return [];
    
    return recipes.filter(recipe => {
      const matchesCategory = selectedCategory === 'All' || recipe.cuisine === selectedCategory;
      const matchesSearch = recipe.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            recipe.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      return matchesCategory && matchesSearch;
    }).map(recipe => ({
      id: recipe.id,
      name: recipe.name,
      image: recipe.image,
      cookTime: recipe.cookTime,
      prepTime: recipe.prepTime,
      difficulty: recipe.difficulty,
      rating: recipe.rating,
      matchPercentage: 100 // Add default match percentage for recipes from browse
    }));
  }, [recipes, selectedCategory, searchTerm]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-10">
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-display font-bold mb-2 text-primary">Browse Recipes</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our collection of delicious recipes from around the world
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-6 mb-8">
          <div className="w-full md:w-1/4">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
              <h2 className="text-xl font-display font-bold mb-4 text-primary">Filters</h2>
              
              <div className="mb-6">
                <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">
                  Search
                </label>
                <input
                  type="text"
                  id="search"
                  placeholder="Search recipes..."
                  className="w-full p-2 border rounded-md"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              <div>
                <h3 className="text-md font-medium mb-2 text-gray-700">Cuisine</h3>
                <div className="space-y-2">
                  {categories.map(category => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`block w-full text-left px-3 py-2 rounded-md transition-colors ${
                        selectedCategory === category
                          ? 'bg-food-orange/20 text-food-orange font-medium'
                          : 'hover:bg-gray-100'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-3/4">
            {isLoading ? (
              <div className="flex justify-center items-center min-h-[300px]">
                <LoadingSpinner />
              </div>
            ) : error ? (
              <div className="text-center py-10">
                <div className="bg-red-50 text-red-600 p-4 rounded-lg inline-block">
                  <p>Something went wrong while loading recipes.</p>
                </div>
              </div>
            ) : filteredRecipes.length === 0 ? (
              <div className="text-center py-10">
                <UtensilsCrossed className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-1">No recipes found</h3>
                <p className="text-gray-500">
                  Try changing your search criteria or browse a different category
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredRecipes.map(recipe => (
                  <RecipeCard key={recipe.id} recipe={recipe} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      
      <footer className="bg-white border-t mt-16 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground text-sm">
            © 2025 CookAI - AI-Powered Recipe Assistant. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default BrowseRecipes;
