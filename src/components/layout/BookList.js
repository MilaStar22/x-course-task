import React, { useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import axios from "axios";
import defaultImage from '../img/book_no_img1.jpeg';

export default function BookList() {
  const [book, setBook]=useState({ books: [] });
  const [error, setError] = useState(null);

  async function fetchData() {
    axios.get('data.json', {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
      .then(response => {
        console.log(response.data);
        setBook(response.data);
      })
      .catch(error => {
        setError(error.message);
      })
  }

  useEffect( () => {
    fetchData()
    // eslint-disable-next-line
  }, []);

  if (error) {
    return (<div className="error"> <h2>{error}</h2></div>)
  } else if (book.books.length > 0) {
    const items = book.books.map((item, index) => {
      return (
        <div className="book" key={index}>
          <div className='img_wrapper'>
            <img
              className={item.image ? '' : 'default-img'}
              src={item.image ? item.image : defaultImage}
              alt={item.title}
              onError={(e) => {
                e.target.src = defaultImage;
              }}
            />
          </div>
          <p>{item.title}</p>
          <Link to={"/books/" + item.id}><button className='btn_list'>More</button></Link>
        </div>
      );
    });
    
  return (
      <>
        <h2>Books List</h2>
        <div className="books_wrapper container">
          {items}
        </div>
      </>
    )
  } else {
    return null;
  }
}