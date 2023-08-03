import React from 'react';
import { useState} from "react";
import { useParams, Link } from "react-router-dom";
import { useBook } from '../../context/BookContext';
import { useFavorite } from '../../context/FavoriteContext';

import defaultImage from '../img/book_no_img1.jpeg';

function BookDetails() {
  const {books, error, count, setCount} = useBook();
  const { favorites, setFavorites} = useFavorite();

  const { id } = useParams();
  const [inputValue, setInputValue] = useState("");

  // render one book, which was chosen at BookList page
  const chosenBook = books.find(book => book.id === parseInt(id));

  const addToFavorites = (book) => {
    const isBookInFavorites = favorites.some((favBook) => favBook.id === book.id);

    if (isBookInFavorites) {
      return; // Exit the function without adding the book
    }
    // Add the book details to favorites
    const newFavorite = {
      id: book.id,
      title: book.title,
      amount: count,
      totalPrice: calculateTotalPrice()
    };

    setFavorites([...favorites, newFavorite]);
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
    // const bookPrice = parseFloat(chosenBook.price);
    if (!chosenBook || isNaN(count) || isNaN(chosenBook.price)) {
      return '0.00';
    }

    const totalPrice = parseFloat(chosenBook.price * count);
    return parseInt(totalPrice).toFixed(2);
  };

  if (error) {
    return <div className="error"> <h2>{error}</h2></div>;
  } else if (chosenBook) {
    document.title = chosenBook.title;

    return (
      <>
        <div className="book_wrapper">
          <img
              className="book_cover"
              src={chosenBook.image || defaultImage}
              alt={chosenBook.title}
          />
          <div className="book_about_wrapper">
            <div className="book_about">
              <h4 data-testid='title'>Title:</h4>
              <p>{chosenBook.title}</p>
            </div>
            <div className="book_about">
              <h4>Author:</h4>
              <p> {chosenBook.author} </p>
            </div>
            <div className="book_about">
              <h4>Level:</h4>
              <p>{chosenBook.level}</p>
            </div>
            <div className="book_about">
              <h4>Book tags:</h4>
              <p>{chosenBook.tags.join(" / ")}</p>
            </div>
          </div>
          <div className="book_about_price">
            <div className="about_price">
              <h4>Price, $</h4>
              <p data-testid="book-price">{chosenBook.price}</p>
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
                  data-testid="count-input" 
                />
              </span>
            </div>
            <div className="about_price">
              <h4>Total price</h4>
              <p data-testid="total-price">{calculateTotalPrice()}</p>
            </div>
            <input 
              className="add_to_card" 
              id="add_to_card" 
              type="button" 
              value="Add to cart" 
              onClick={() => addToFavorites(chosenBook)}
            />
          </div>
        </div>
        <div className='book_description'>
          <h4>Description</h4>
          <p> {chosenBook.description} </p>
          <Link to="/"><button className="to_books">to Books List</button></Link>
        </div>
      </>

    )
  } 
}

export default BookDetails;