import {Routes, Route} from 'react-router-dom';
import { BookProvider } from './context/BookContext';
import { FavoriteProvider } from './context/FavoriteContext';
import Layout from "./components/layout/Layout";
import LayoutNoUser from './components/layoutNoUser/LayoutNoUser';
import BasketPage from "./components/pages/BasketPage";
import LoginPage from './components/layoutNoUser/LoginPage';
import BookListPage from './components/pages/BookListPage';
import BookPage from './components/pages/BookPage';
import NotFoundPage from "./components/layoutNoUser/NotFoundPage";
import PrivateRoute from './components/layoutNoUser/PrivatRoute';
import "./css/style.css";

function App() {

  return (
    <BookProvider>
      <FavoriteProvider>
        <Routes>
            <Route exact element={<PrivateRoute  />}>
              <Route path="/" element={<Layout />} >
                  <Route index element={<BookListPage/>} />
                  <Route path="/purchase" element={<BasketPage />} />
                  <Route path="/books/:id" element={<BookPage/>} />
              </Route>
            </Route>
            <Route path="/" element={<LayoutNoUser />} >
              <Route path="/signin" element={<LoginPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Route>
        </Routes>
      </FavoriteProvider>
    </BookProvider>
  )
}

export default App;
