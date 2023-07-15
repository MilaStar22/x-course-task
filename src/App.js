import {Routes, Route} from 'react-router-dom';
import Layout from "./components/layout/Layout";
import PurchasePage from "./components/pages/PurchasePage";
import LoginPage from './components/pages/LoginPage';
import BookListPage from './components/pages/BookListPage';
import BookPage from './components/pages/BookPage';
import NotFoundPage from "./components/pages/NotFoundPage";
import "./css/style.css";

function App() {

  return (
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route index element={<LoginPage />} />
            <Route path="/purchase" element={<PurchasePage />} />
            <Route path="/books" element={<BookListPage/>} />
            <Route path="/books/:id" element={<BookPage/>} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
  )
};

export default App;
