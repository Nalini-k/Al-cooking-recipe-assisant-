
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { uploadAndRecognizeImage } from '@/services/recipeService';
import { Recipe } from '@/types';
import { Upload, Image as ImageIcon } from 'lucide-react';
import LoadingSpinner from './LoadingSpinner';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/components/ui/use-toast';

const ImageUpload: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [identifiedRecipe, setIdentifiedRecipe] = useState<Recipe | null>(null);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedImage(file);
      setPreview(URL.createObjectURL(file));
      setIdentifiedRecipe(null);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      setSelectedImage(file);
      setPreview(URL.createObjectURL(file));
      setIdentifiedRecipe(null);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const identifyDish = async () => {
    if (!selectedImage) return;
    
    setLoading(true);
    
    try {
      const recipe = await uploadAndRecognizeImage(selectedImage);
      setIdentifiedRecipe(recipe);
      
      if (recipe) {
        toast({
          title: "Dish Identified!",
          description: `We identified this as ${recipe.name}`,
        });
      } else {
        toast({
          title: "Couldn't identify dish",
          description: "Try uploading a clearer image of the dish",
          variant: "destructive"
        });
      }
    } catch (error) {
      console.error("Error identifying dish:", error);
      toast({
        title: "Error",
        description: "Something went wrong while identifying the dish",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const viewRecipe = () => {
    if (identifiedRecipe) {
      navigate(`/recipe/${identifiedRecipe.id}`);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <Card className="p-6 shadow-md mb-8">
          <h2 className="text-2xl font-display font-bold mb-4">Identify Dish From Image</h2>
          <p className="text-muted-foreground mb-6">
            Upload a photo of any dish, and our AI will identify it and provide the recipe
          </p>
          
          <div 
            className="border-2 border-dashed border-border rounded-lg p-8 text-center cursor-pointer mb-6 hover:bg-secondary/50 transition-colors"
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onClick={() => document.getElementById('image-upload')?.click()}
          >
            <input
              id="image-upload"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />
            
            {preview ? (
              <div className="flex flex-col items-center">
                <img 
                  src={preview} 
                  alt="Preview" 
                  className="max-h-64 max-w-full mb-4 rounded-lg shadow-sm" 
                />
                <p className="text-sm text-muted-foreground">
                  Click or drag to replace image
                </p>
              </div>
            ) : (
              <div className="flex flex-col items-center">
                <div className="bg-secondary w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <ImageIcon className="h-8 w-8 text-muted-foreground" />
                </div>
                <p className="font-medium mb-1">Click to upload or drag and drop</p>
                <p className="text-sm text-muted-foreground">
                  Upload a clear image of the dish (JPG, PNG)
                </p>
              </div>
            )}
          </div>
          
          {selectedImage && !loading && !identifiedRecipe && (
            <Button 
              onClick={identifyDish} 
              className="w-full bg-accent hover:bg-accent/90 text-white"
            >
              <Upload className="h-4 w-4 mr-2" /> Identify Dish
            </Button>
          )}
          
          {loading && (
            <div className="text-center py-6">
              <LoadingSpinner message="Analyzing your image..." />
            </div>
          )}
          
          {identifiedRecipe && (
            <div className="bg-secondary/50 p-4 rounded-lg mt-6">
              <h3 className="text-lg font-semibold mb-2">
                Dish Identified: {identifiedRecipe.name}
              </h3>
              <p className="text-muted-foreground mb-4">
                {identifiedRecipe.description.substring(0, 120)}...
              </p>
              <Button 
                onClick={viewRecipe}
                className="w-full bg-primary hover:bg-primary/90"
              >
                View Complete Recipe
              </Button>
            </div>
          )}
        </Card>
      </div>
    </div>
  );
};

export default ImageUpload;
