import React, { useState} from 'react';
import {Link} from "react-router-dom";
import { useBook } from '../../context/BookContext';
import defaultImage from '../img/book_no_img1.jpeg';

export default function BookList() {
  const {books, error} = useBook();
  const [selectedFilter, setSelectedFilter] = useState('all');

  const handleFilterChange = (event) => {
    setSelectedFilter(event.target.value);
  };
    
  // Function to filter books based on the selected filter option
  const filteredBooks = books.filter((book) => {
    if (selectedFilter === 'all') {
      return true; 
    } else if (selectedFilter === 'lessThan15') {
      return book.price < 15;
    } else if (selectedFilter === '15to30') {
      return book.price >= 15 && book.price <= 30;
    } else if (selectedFilter === 'greaterThan30') {
      return book.price > 30;
    }
    return true;
  });

  if (error) {
    return (<div className="error"> <h2>{error}</h2></div>)
  } else if (books.length > 0) {
    const items = filteredBooks.map((item, index) => {
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
            <p>{item.title.length > 24 ? item.title.substring(0, 24) + "..." : item.title}</p>
            <Link to={"/books/" + item.id}><button className='btn_list'>View</button></Link>
          </div>
      );
    });
    
  return (
      <>
        <h2>Books List</h2>
        <div className='select_books'>
          <label htmlFor='filter'>Filter books:</label>
          <select 
            name="filter"
            id="filter"
            value={selectedFilter} 
            onChange={handleFilterChange}
          >
            <option value="all">All</option>
            <option value="lessThan15">Price: Less than 15</option>
            <option value="15to30">Price: 15 to 30</option>
            <option value="greaterThan30">Price: Greater than 30</option>
          </select>
          </div>
        <div className="books_wrapper container">
          {items}
        </div>
      </>
    )
  } else {
    return null;
  }
}