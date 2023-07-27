import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import { FaTimes} from "react-icons/fa";
import { BsBasket2 } from "react-icons/bs";
import { useBook} from '../../context/BookContext';


export default function Basket() {
  const {favorites, setFavorites} = useBook();

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

  function removeFavoritesFromLocalStorage() {
    localStorage.removeItem('favorites');
  }

  // Convert each totalPrice string to a number (removing leading zeros automatically)
  const totalPriceArray = favorites.map(obj => parseFloat(obj.totalPrice));

  // Sum the converted numbers
  const calculateTotalPrice = totalPriceArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0); 

  return (
    <div className="basket_wrapper">
      <div className='btn_wrapper'>
        <Link to="/"><button className="btn_to_books">add Book</button></Link>
        <button 
          className="btn_purchase" 
          onClick={removeFavoritesFromLocalStorage}
          disabled={favorites.length === 0}
        >
          Purchase
        </button>
      </div>
      {favorites.length === 0 ? (
        <div className="empty_basket container">
          <BsBasket2 style={{color: 'rgb(122, 118, 118)', width: '100px', height: 'auto'}} alt='basket'/>
          <p>Cart empty... Add some books!</p>
        </div>
      ) : (
        <>
          {favorites.map((book) => (
            <div className='no_empty_basket container' key={book.id}>
              <div className='book_add'>
                <h3>{book.title}</h3>
                <span>Count: {book.amount}</span>
                <p>Total price: ${book.totalPrice}</p>
              </div>
              <p 
                className='btn_remove' 
                onClick={() => removeFromFavorites(book)}
              >
                <FaTimes style={{color: 'red', cursor: 'pointer'}}/>
              </p>
            </div>
          ))}
          <div className='total_price'>Total price, ${calculateTotalPrice.toFixed(2)}</div>
        </>
      )}
    </div>
  );
}