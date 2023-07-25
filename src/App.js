import {Routes, Route} from 'react-router-dom';
import Layout from "./components/layout/Layout";
import LayoutNoUser from './components/layoutNoUser/LayoutNoUser';
import PurchasePage from "./components/pages/PurchasePage";
import LoginPage from './components/layoutNoUser/LoginPage';
import BookListPage from './components/pages/BookListPage';
import BookPage from './components/pages/BookPage';
import NotFoundPage from "./components/layoutNoUser/NotFoundPage";
import "./css/style.css";

function App() {

  return (
     <Routes>
      <Route path="/" element={<Layout />} >
        <Route index element={<BookListPage/>} />
        <Route path="/purchase" element={<PurchasePage />} />
        <Route path="/books/:id" element={<BookPage/>} />
      </Route>
      <Route path="/" element={<LayoutNoUser />} >
        <Route path="/signin" element={<LoginPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
};

export default App;
