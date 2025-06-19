import { useState, useEffect } from 'react';
import { Product, ProductsResponse } from '../types/Product';

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchAllProducts = async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      const response = await fetch('https://dummyjson.com/products?limit=30');
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }
      
      const data: ProductsResponse = await response.json();
      setProducts(data.products);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      setProducts([]);
    } finally {
      setIsLoading(false);
    }
  };

  const searchProducts = async (query: string) => {
    setIsLoading(true);
    setError(null);
    
    try {
      const response = await fetch(`https://dummyjson.com/products/search?q=${encodeURIComponent(query)}&limit=30`);
      if (!response.ok) {
        throw new Error('Failed to search products');
      }
      
      const data: ProductsResponse = await response.json();
      setProducts(data.products);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      setProducts([]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchAllProducts();
  }, []);

  return {
    products,
    isLoading,
    error,
    searchProducts,
    fetchAllProducts
  };
};