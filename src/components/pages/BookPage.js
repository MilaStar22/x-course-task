import { useEffect } from "react";
import Book from "../layout/Book";

function BookPage () {

  useEffect( () => {
    document.title = 'Book';
  }, []);

  return (
    <Book />
  )
}

export default BookPage;