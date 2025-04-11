
import React, { useState } from 'react';
import { searchByIngredients } from '@/services/recipeService';
import { RecipeSearchResult } from '@/types';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, X, Plus } from 'lucide-react';
import LoadingSpinner from './LoadingSpinner';
import RecipeCard from './RecipeCard';

const RecipeSearch: React.FC = () => {
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [searchResults, setSearchResults] = useState<RecipeSearchResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  const handleAddIngredient = () => {
    if (inputValue.trim() && !ingredients.includes(inputValue.trim())) {
      setIngredients([...ingredients, inputValue.trim()]);
      setInputValue('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleAddIngredient();
    }
  };

  const handleRemoveIngredient = (ingredient: string) => {
    setIngredients(ingredients.filter(i => i !== ingredient));
  };

  const handleSearch = async () => {
    if (ingredients.length === 0) return;
    
    setIsSearching(true);
    setHasSearched(true);
    
    try {
      const results = await searchByIngredients(ingredients);
      setSearchResults(results);
    } catch (error) {
      console.error("Error searching recipes:", error);
    } finally {
      setIsSearching(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <h2 className="text-2xl font-display font-bold mb-4">Find Recipes By Ingredients</h2>
          <p className="text-muted-foreground mb-6">
            Enter ingredients you have, and our AI will suggest matching recipes
          </p>
          
          <div className="flex space-x-2 mb-4">
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Enter an ingredient"
              className="flex-1"
            />
            <Button onClick={handleAddIngredient} variant="outline">
              <Plus className="h-4 w-4 mr-2" /> Add
            </Button>
          </div>
          
          {ingredients.length > 0 && (
            <div className="mb-6">
              <p className="text-sm text-muted-foreground mb-2">Added ingredients:</p>
              <div className="flex flex-wrap gap-2">
                {ingredients.map((ingredient, index) => (
                  <span key={index} className="ingredient-tag flex items-center">
                    {ingredient}
                    <button 
                      onClick={() => handleRemoveIngredient(ingredient)}
                      className="ml-2 focus:outline-none"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </span>
                ))}
              </div>
            </div>
          )}
          
          <Button 
            onClick={handleSearch} 
            disabled={ingredients.length === 0 || isSearching}
            className="w-full bg-accent hover:bg-accent/90 text-white"
          >
            {isSearching ? (
              <LoadingSpinner size="sm" message="" />
            ) : (
              <>
                <Search className="h-4 w-4 mr-2" /> Find Recipes
              </>
            )}
          </Button>
        </div>

        {isSearching ? (
          <div className="text-center py-12">
            <LoadingSpinner message="Searching for the perfect recipes..." />
          </div>
        ) : hasSearched ? (
          <div>
            {searchResults.length > 0 ? (
              <div>
                <h3 className="text-xl font-display font-semibold mb-4">
                  Found {searchResults.length} matching recipes
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {searchResults.map((recipe) => (
                    <RecipeCard
                      key={recipe.id}
                      recipe={recipe}
                    />
                  ))}
                </div>
              </div>
            ) : (
              <div className="text-center py-10">
                <div className="text-5xl mb-4">🍽️</div>
                <h3 className="text-xl font-semibold mb-2">No recipes found</h3>
                <p className="text-muted-foreground">
                  Try adding different ingredients or fewer ingredients
                </p>
              </div>
            )}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default RecipeSearch;
