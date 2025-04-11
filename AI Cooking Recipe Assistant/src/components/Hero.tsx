
import React from 'react';
import { Button } from '@/components/ui/button';
import { ChefHat, Clock } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-amber-50 to-orange-50 pt-8 pb-16 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-left space-y-6 animate-fadeIn">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary tracking-tight">
              Cook Smarter with <span className="text-accent">AI</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg">
              Turn your ingredients into delicious recipes. Upload a photo of a dish 
              and get the perfect recipe instantly.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-accent hover:bg-accent/90 text-white">
                <ChefHat className="mr-2 h-4 w-4" />
                Get Started
              </Button>
              <Button variant="outline">
                <Clock className="mr-2 h-4 w-4" />
                Quick Recipes
              </Button>
            </div>
            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center gap-2">
                <div className="bg-food-green/10 p-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-food-green">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold">AI Powered</h4>
                  <p className="text-sm text-muted-foreground">Smart recipe suggestions</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-food-orange/10 p-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-food-orange">
                    <rect width="18" height="18" x="3" y="3" rx="2" />
                    <path d="M9 8h7" />
                    <path d="M8 12h6" />
                    <path d="M11 16h4" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold">Step-by-Step</h4>
                  <p className="text-sm text-muted-foreground">Detailed cooking guides</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative hidden md:block">
            <div className="relative mx-auto w-full max-w-md">
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-food-yellow/20 rounded-full filter blur-3xl animate-pulse-soft"></div>
              <div className="absolute -bottom-14 -left-14 w-48 h-48 bg-food-red/20 rounded-full filter blur-3xl animate-pulse-soft" style={{ animationDelay: "1s" }}></div>
              
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform rotate-2 transition-transform hover:rotate-0 duration-500">
                <img 
                  src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1760&q=80" 
                  alt="Delicious food" 
                  className="w-full h-64 object-cover"
                />
                <div className="p-5">
                  <div className="text-xs font-semibold text-food-green">RECOMMENDED</div>
                  <h3 className="text-xl font-display font-semibold mt-1">Colorful Buddha Bowl</h3>
                  <div className="flex items-center mt-3 text-sm">
                    <Clock className="h-4 w-4 text-muted-foreground mr-1" />
                    <span className="text-muted-foreground">25 mins</span>
                    <span className="mx-2 text-muted-foreground">•</span>
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg key={star} xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="text-food-yellow">
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
