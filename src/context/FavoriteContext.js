import React, { createContext, useState, useEffect, useContext } from 'react';

const FavoriteContext = createContext();

export function useFavorite() {
  return useContext(FavoriteContext);
}

export function FavoriteProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites'));
    if (storedFavorites) {
      setFavorites(storedFavorites);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);


  return (
    <FavoriteContext.Provider 
      value={{ 
        favorites, 
        setFavorites 
      }}
    >
      {children}
    </FavoriteContext.Provider>
  );
};