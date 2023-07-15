import { useEffect } from "react";
import BookList from "../layout/BookList";

function BookListPage () {

  useEffect( () => {
    document.title = 'BookList';
  }, []);

  return (
    <BookList />
  )
}

export default BookListPage;