
import React from 'react';
import { Link } from 'react-router-dom';
import { UtensilsCrossed, Search, Upload, Home, BookOpen, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <UtensilsCrossed className="h-6 w-6 text-accent" />
          <span className="font-display text-xl font-bold text-primary">CookAI</span>
        </Link>

        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="flex items-center space-x-1 text-muted-foreground hover:text-primary transition-colors">
            <Home className="h-4 w-4" />
            <span>Home</span>
          </Link>
          <Link to="/browse" className="flex items-center space-x-1 text-muted-foreground hover:text-primary transition-colors">
            <BookOpen className="h-4 w-4" />
            <span>Browse Recipes</span>
          </Link>
          <Link to="/" className="flex items-center space-x-1 text-muted-foreground hover:text-primary transition-colors">
            <Search className="h-4 w-4" />
            <span>Search Recipes</span>
          </Link>
          <Link to="/" className="flex items-center space-x-1 text-muted-foreground hover:text-primary transition-colors">
            <Upload className="h-4 w-4" />
            <span>Upload Image</span>
          </Link>
        </nav>

        <div className="md:hidden">
          <button 
            className="p-2 text-primary" 
            aria-label="Menu" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 shadow-lg animate-fadeIn">
          <nav className="flex flex-col space-y-4">
            <Link 
              to="/" 
              className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              <Home className="h-5 w-5 text-accent" />
              <span>Home</span>
            </Link>
            <Link 
              to="/browse" 
              className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              <BookOpen className="h-5 w-5 text-accent" />
              <span>Browse Recipes</span>
            </Link>
            <Link 
              to="/" 
              className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              <Search className="h-5 w-5 text-accent" />
              <span>Search Recipes</span>
            </Link>
            <Link 
              to="/" 
              className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              <Upload className="h-5 w-5 text-accent" />
              <span>Upload Image</span>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
