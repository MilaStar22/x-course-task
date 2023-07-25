import React, { useEffect, useState } from 'react';
import sprite from "../img/sprites.svg";

export default function Purchase() {
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

  const removeFromFavorites = (book) => {
    setFavorites((prevFavorites) => prevFavorites.filter((favBook) => favBook.id !== book.id));
  };

  const calculateTotalPrice = () => {
    let totalPrice = 0;

    favorites.forEach((book) => {
      const bookPrice = parseFloat(book.price);
      totalPrice += bookPrice * book.count;
    });

    return totalPrice.toFixed(2);
  };

  return (
    <div className="bucket_wrapper">
      <button className="btn_purchase">Purchase</button>
      {favorites.length === 0 ? (
        <div className="empty_bucket container">
          <svg><use href={sprite + "#bucket"} alt="bucket"/></svg>
          <p>Cart empty... Add some books!</p>
        </div>
      ) : (
        <>
          {favorites.map((book) => (
            <div className='no_empty_bucket container'>
              <div key={book.id} className='book_add'>
                <h3>{book.title}</h3>
                <span>Count: {book.count}</span>
                <p>Total price: {book.count * parseFloat(book.price)}</p>
              </div>
              <button 
                className='btn_remove' 
                onClick={() => removeFromFavorites(book)}
              >
                Remove
              </button>
            </div>
          ))}
          <div className='total_price'>Total price, $ {calculateTotalPrice()}</div>
        </>
      )}
    </div>
  );
  
}