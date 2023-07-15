import React from 'react';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import defaultImage from '../img/book_no_img1.jpeg';

function BookDetails() {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [error, setError] = useState(null);

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

  if (error) {
    return <div className="error"> <h2>{error}</h2></div>;
  } else if (book) {
    document.title = book.title;

    return (
      <div className="single_book">
        <img
          className="book_cover"
          src={book.image || defaultImage}
          alt={book.title}
        />
        <div className="book_summary">
          <span className="book_title">{book.title}</span>
          <h3 className="book_author">Author: <span>{book.author}</span></h3>
          <h3 className='book_tags'>About: <span>{book.tags.join(" / ")}</span></h3>
          <p className='book_description'>{book.description}</p>
          <h3 className="book_level">Level: <span>{book.level}</span></h3>
          <button className='btn_buy'>Buy</button>
        </div>
      </div>
    );
  } else {
    return null;
  }
}

export default BookDetails;