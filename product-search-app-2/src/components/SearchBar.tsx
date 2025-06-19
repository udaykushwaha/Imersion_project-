import React, { useState } from 'react';
import { Search, AlertCircle } from 'lucide-react';

interface SearchBarProps {
  onSearch: (query: string) => void;
  isLoading: boolean;
}

export const SearchBar: React.FC<SearchBarProps> = ({ onSearch, isLoading }) => {
  const [query, setQuery] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Input validation
    if (!query.trim()) {
      setError('Please enter a search term');
      return;
    }
    
    if (query.trim().length < 2) {
      setError('Search term must be at least 2 characters long');
      return;
    }
    
    setError('');
    onSearch(query.trim());
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    if (error) setError(''); // Clear error when user starts typing
  };

  return (
    <div className="w-full max-w-2xl mx-auto mb-8">
      <form onSubmit={handleSubmit} className="relative">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="text"
            value={query}
            onChange={handleInputChange}
            placeholder="Search for products..."
            className={`w-full pl-12 pr-4 py-4 text-lg border-2 rounded-2xl bg-white/80 backdrop-blur-sm shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-500/20 transition-all duration-300 ${
              error ? 'border-red-400 focus:border-red-500' : 'border-gray-200 focus:border-blue-500'
            }`}
            disabled={isLoading}
          />
          {isLoading && (
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
              <div className="animate-spin rounded-full h-5 w-5 border-2 border-blue-500 border-t-transparent"></div>
            </div>
          )}
        </div>
        
        {error && (
          <div className="flex items-center mt-2 text-red-600 text-sm">
            <AlertCircle className="h-4 w-4 mr-1" />
            {error}
          </div>
        )}
        
        <button
          type="submit"
          disabled={isLoading || !query.trim()}
          className="mt-4 w-full sm:w-auto px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl shadow-lg hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-4 focus:ring-blue-500/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Search Products
        </button>
      </form>
    </div>
  );
};