import {Routes, Route} from 'react-router-dom';
import Layout from "./components/layout/Layout";
// import HomePage from "./components/pages/HomePage";
import LoginPage from './components/pages/LoginPage';
// import MoviesPage from "./components/pages/MoviesPage";
// import OneMoviePage from "./components/pages/OneMoviePage";
import NotFoundPage from "./components/pages/NotFoundPage";
// import WishListPage from './components/pages/WishListPage';
import "./css/style.css";

function App() {

  return (
        <Routes>
          <Route path="/" element={<Layout />} >
            {/* <Route index element={<HomePage />} /> */}
            <Route index element={<LoginPage />} />
            {/* <Route path="/movies" element={<MoviesPage />} />
            <Route path="/movie/:id" element={<OneMoviePage />} />
            <Route path="/wishlist" element={<WishListPage />} /> */}
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
  )
};

export default App;
