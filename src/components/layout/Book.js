import React from 'react';
import { useEffect, useState} from "react";
import { useParams, Link } from "react-router-dom";
import { useBook } from '../../context/BookContext';

import defaultImage from '../img/book_no_img1.jpeg';

function BookDetails() {
  const {books, error, count, setCount, favorites, setFavorites} = useBook();

  const { id } = useParams();
  const [inputValue, setInputValue] = useState("");

  // render one book, which was chosen at BookList page
  const chosenBook = books.find(book => book.id === parseInt(id));

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
    const totalPrice = parseFloat(chosenBook.price * count);
    return parseInt(totalPrice).toFixed(2);
  };

  console.log(calculateTotalPrice());

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
              <h4>Title:</h4>
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
              <p>{chosenBook.price}</p>
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