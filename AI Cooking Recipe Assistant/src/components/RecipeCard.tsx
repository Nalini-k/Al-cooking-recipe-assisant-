
import React from 'react';
import { Card } from '@/components/ui/card';
import { RecipeSearchResult } from '@/types';
import { Clock, ChefHat } from 'lucide-react';
import { Link } from 'react-router-dom';

interface RecipeCardProps {
  recipe: RecipeSearchResult;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
  // Function to determine the match color
  const getMatchColor = (percentage: number) => {
    if (percentage >= 80) return 'bg-green-100 text-green-800';
    if (percentage >= 50) return 'bg-yellow-100 text-yellow-800';
    return 'bg-orange-100 text-orange-800';
  };
  
  return (
    <Link to={`/recipe/${recipe.id}`}>
      <Card className="overflow-hidden hover-scale card-shadow h-full flex flex-col">
        <div className="relative">
          <img 
            src={recipe.image} 
            alt={recipe.name}
            className="w-full h-48 object-cover" 
          />
          <div className={`absolute top-2 right-2 ${getMatchColor(recipe.matchPercentage)} text-xs font-medium px-2 py-1 rounded-full`}>
            {recipe.matchPercentage}% match
          </div>
        </div>
        
        <div className="p-4 flex flex-col flex-grow">
          <h3 className="font-display text-lg font-semibold mb-2">{recipe.name}</h3>
          
          <div className="flex flex-wrap gap-2 mb-3">
            <div className="time-tag">
              <Clock className="h-3 w-3 mr-1" />
              <span>{recipe.prepTime + recipe.cookTime} min</span>
            </div>
            <div className="difficulty-tag">
              <ChefHat className="h-3 w-3 mr-1" />
              <span>{recipe.difficulty}</span>
            </div>
          </div>
          
          <div className="mt-auto pt-2 flex items-center">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <svg 
                  key={i} 
                  className={`w-4 h-4 ${i < Math.floor(recipe.rating) ? 'text-yellow-400' : 'text-gray-300'}`} 
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="ml-1 text-sm text-muted-foreground">{recipe.rating.toFixed(1)}</span>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default RecipeCard;
