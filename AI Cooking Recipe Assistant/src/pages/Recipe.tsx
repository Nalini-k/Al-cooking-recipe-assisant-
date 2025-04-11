
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import RecipeDetail from '@/components/RecipeDetail';
import LoadingSpinner from '@/components/LoadingSpinner';
import { getRecipeById } from '@/services/recipeService';
import { Recipe } from '@/types';
import { ChevronLeft } from 'lucide-react';

const RecipePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      if (!id) return;
      
      setLoading(true);
      
      try {
        const data = await getRecipeById(id);
        if (data) {
          setRecipe(data);
        } else {
          setError("Recipe not found");
        }
      } catch (error) {
        console.error("Error fetching recipe:", error);
        setError("Failed to load recipe");
      } finally {
        setLoading(false);
      }
    };

    fetchRecipe();
  }, [id]);

  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="container mx-auto px-4 pt-6 pb-12">
        <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-primary mb-8">
          <ChevronLeft className="h-4 w-4 mr-1" />
          Back to Home
        </Link>
        
        {loading ? (
          <div className="flex justify-center py-20">
            <LoadingSpinner message="Loading recipe..." />
          </div>
        ) : error ? (
          <div className="text-center py-20">
            <div className="text-5xl mb-4">😢</div>
            <h2 className="text-2xl font-semibold mb-2">Oops!</h2>
            <p className="text-muted-foreground mb-6">{error}</p>
            <Link 
              to="/" 
              className="text-accent hover:text-accent/90 font-medium"
            >
              Browse all recipes
            </Link>
          </div>
        ) : recipe ? (
          <RecipeDetail recipe={recipe} />
        ) : null}
      </div>
      
      <footer className="bg-white border-t mt-8 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground text-sm">
            © 2025 CookAI - AI-Powered Recipe Assistant. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default RecipePage;
