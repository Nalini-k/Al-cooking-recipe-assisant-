
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import RecipeSearch from '@/components/RecipeSearch';
import ImageUpload from '@/components/ImageUpload';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Search, Camera } from 'lucide-react';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      
      <div className="container mx-auto px-4 py-10">
        <Tabs defaultValue="search" className="max-w-5xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="search" className="flex items-center gap-2">
              <Search className="h-4 w-4" />
              <span>Search by Ingredients</span>
            </TabsTrigger>
            <TabsTrigger value="upload" className="flex items-center gap-2">
              <Camera className="h-4 w-4" />
              <span>Upload Food Image</span>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="search">
            <RecipeSearch />
          </TabsContent>
          
          <TabsContent value="upload">
            <ImageUpload />
          </TabsContent>
        </Tabs>
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

export default Index;
