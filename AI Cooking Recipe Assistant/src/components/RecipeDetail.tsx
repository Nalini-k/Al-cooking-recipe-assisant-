
import React from 'react';
import { Recipe } from '@/types';
import { Clock, Users, ChevronRight, ChefHat, Award, AlertCircle } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

interface RecipeDetailProps {
  recipe: Recipe;
}

const RecipeDetail: React.FC<RecipeDetailProps> = ({ recipe }) => {
  const totalTime = recipe.prepTime + recipe.cookTime;
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-display font-bold mb-4">{recipe.name}</h1>
          <p className="text-muted-foreground text-lg mb-6">{recipe.description}</p>
          
          <div className="flex flex-wrap gap-4 mb-6">
            <div className="flex items-center">
              <Clock className="h-5 w-5 text-food-green mr-2" />
              <div>
                <p className="text-sm text-muted-foreground">Total Time</p>
                <p className="font-medium">{totalTime} min</p>
              </div>
            </div>
            <div className="flex items-center">
              <Users className="h-5 w-5 text-food-orange mr-2" />
              <div>
                <p className="text-sm text-muted-foreground">Servings</p>
                <p className="font-medium">{recipe.servings}</p>
              </div>
            </div>
            <div className="flex items-center">
              <ChefHat className="h-5 w-5 text-food-red mr-2" />
              <div>
                <p className="text-sm text-muted-foreground">Difficulty</p>
                <p className="font-medium">{recipe.difficulty}</p>
              </div>
            </div>
            <div className="flex items-center">
              <Award className="h-5 w-5 text-food-yellow mr-2" />
              <div>
                <p className="text-sm text-muted-foreground">Rating</p>
                <p className="font-medium">{recipe.rating.toFixed(1)}/5</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Recipe Image */}
        <div className="mb-10">
          <img 
            src={recipe.image} 
            alt={recipe.name} 
            className="w-full h-80 md:h-96 object-cover rounded-xl shadow-md" 
          />
        </div>
        
        {/* Two-column layout for ingredients and instructions */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Ingredients */}
          <div className="md:col-span-1">
            <div className="sticky top-20">
              <h2 className="text-xl font-display font-semibold mb-4">Ingredients</h2>
              <Separator className="mb-4" />
              
              <ul className="space-y-3">
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index} className="flex items-start">
                    {ingredient.includes(':') ? (
                      <span className="font-semibold text-primary">{ingredient}</span>
                    ) : (
                      <>
                        <ChevronRight className="h-4 w-4 text-accent mt-1 mr-2 flex-shrink-0" />
                        <span>{ingredient}</span>
                      </>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Instructions */}
          <div className="md:col-span-2">
            <h2 className="text-xl font-display font-semibold mb-4">Instructions</h2>
            <Separator className="mb-6" />
            
            <ol className="space-y-6">
              {recipe.instructions.map((instruction, index) => (
                <li key={index} className={instruction.endsWith(':') ? 'mt-6 font-semibold' : 'flex'}>
                  {!instruction.endsWith(':') && (
                    <span className="bg-accent text-white w-7 h-7 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      {index + 1}
                    </span>
                  )}
                  <p className={instruction.endsWith(':') ? 'text-lg' : ''}>{instruction}</p>
                </li>
              ))}
            </ol>
            
            {/* Tips Section */}
            {recipe.tips && recipe.tips.length > 0 && (
              <div className="mt-10 bg-amber-50 p-6 rounded-lg border border-amber-100">
                <h3 className="flex items-center text-lg font-semibold mb-4">
                  <AlertCircle className="h-5 w-5 text-amber-600 mr-2" />
                  Cooking Tips
                </h3>
                <ul className="space-y-3">
                  {recipe.tips.map((tip, index) => (
                    <li key={index} className="flex items-start">
                      <span className="font-semibold text-amber-800 mr-2">{index + 1}.</span>
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            {/* Variations Section */}
            {recipe.variations && recipe.variations.length > 0 && (
              <div className="mt-8">
                <h3 className="text-lg font-semibold mb-4">Variations</h3>
                <ul className="space-y-3">
                  {recipe.variations.map((variation, index) => (
                    <li key={index} className="flex items-start">
                      <span className="font-semibold mr-2">•</span>
                      <span>{variation}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
