import React, { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';

const BookContext = createContext();

export function useBook() {
  return useContext(BookContext);
}

export function BookProvider({ children }) {
  const [books, setBooks]=useState([]);
  const [error, setError] = useState(null);
  const [count, setCount] = useState(null);
  const [favorites, setFavorites] = useState([]);

  async function fetchData() {
    axios.get('data.json', {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
      .then(response => {
        setBooks(response.data.books);
      })
      .catch(error => {
        setError(error.message);
      })
  }

  useEffect( () => {
    fetchData()
    // eslint-disable-next-line
  }, []);

  return (
    <BookContext.Provider 
      value={{ 
        books, 
        setBooks, 
        error, 
        setError, 
        count, 
        setCount, 
        favorites, 
        setFavorites 
      }}
    >
      {children}
    </BookContext.Provider>
  );
};