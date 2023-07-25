import React from 'react';
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import defaultImage from '../img/book_no_img1.jpeg';

function BookDetails() {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [error, setError] = useState(null);
  const [count, setCount] = useState(null);
  const [favorites, setFavorites] = useState([]);

  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    // Simulating the fetch request with the local data
    const fetchData = async () => {
      try {
        // Fetch the book data based on the provided ID
        const response = await fetch('http://localhost:3000/x-course-task/data.json');
        const data = await response.json();

        // Find the book with the matching ID
        const selectedBook = data.books.find(book => book.id === parseInt(id));

        if (selectedBook) {
          setBook(selectedBook);
        } else {
          setError('Book not found');
        }
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, [id]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites'));
    if (storedFavorites) {
      setFavorites(storedFavorites);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const addToFavorites = (book) => {
    // Check if the movie is already in favorites
    const isBookInFavorites = favorites.some((favBook) => favBook.id === book.id);
  
    if (isBookInFavorites) {
      return; // Exit the function without adding the book
    }
  
    setFavorites([...favorites, book]);
  };

  const handleCountChange = (event) => {
    const newCount = parseInt(event.target.value, 10);
    if (event.target.value === "") {
      setCount('');
      setInputValue("");
    } else if (!isNaN(newCount) && newCount >= 1 && newCount <= 42) {
      setCount(newCount);
      setInputValue(event.target.value);
    }
  };
  
  const handleKeyUp = (event) => {
    const currentValue = parseInt(event.target.value, 10);
    if (currentValue === 0 || event.target.value === "") {
      setInputValue("");
    } else if (currentValue > 42) {
      setInputValue("42");
    } else if (currentValue < 1 || isNaN(currentValue)) {
      setInputValue("1");
    } else {
      setInputValue(event.target.value);
    }
  };
  
  const calculateTotalPrice = () => {
    const bookPrice = parseFloat(book.price);
    const totalPrice = bookPrice * count;
    return totalPrice.toFixed(2);
  };

  if (error) {
    return <div className="error"> <h2>{error}</h2></div>;
  } else if (book) {
    document.title = book.title;

    return (
      <>
        <div className="book_wrapper">
            <img
              className="book_cover"
              src={book.image || defaultImage}
              alt={book.title}
            />
          <div className="book_about_wrapper">
            <div className="book_about">
              <h4>Title:</h4>
              <p>{book.title}</p>
            </div>
            <div className="book_about">
              <h4>Author:</h4>
              <p> {book.author} </p>
            </div>
            <div className="book_about">
              <h4>Level for:</h4>
              <p>{book.level}</p>
            </div>
            <div className="book_about">
              <h4>Book tags:</h4>
              <p>{book.tags.join(" / ")}</p>
            </div>
          </div>
          <div className="book_about_price">
            <div className="about_price">
              <h4>Price, $</h4>
              <p>{book.price}</p>
            </div>
            <div className="about_price">
              <h4>Count</h4>
              <span className="number-wrapper">
                <input 
                  type="number" 
                  name="count" 
                  id="count" 
                  placeholder="1" 
                  min="1" 
                  max="42"
                  onChange={handleCountChange}
                  onKeyUp={handleKeyUp}
                  value={inputValue}
                />
              </span>
            </div>
            <div className="about_price">
              <h4>Total price</h4>
              <p>{calculateTotalPrice()}</p>
            </div>
            <input 
              className="add_to_card" 
              id="add_to_card" 
              type="button" 
              value="Add to cart" 
              onClick={() => addToFavorites(book)}
            />
          </div>
        </div>
        <div className='book_description'>
          <h4>Description</h4>
          <p> {book.description} </p>
          <Link to="/"><button className="to_books">to Books List</button></Link>
        </div>
      </>
    );
  } else {
    return null;
  }
}

export default BookDetails;