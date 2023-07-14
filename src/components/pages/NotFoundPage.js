import { useEffect } from "react";
import error from "../img/404.png";
import { Link } from 'react-router-dom';

function NotFoundPage () {
  useEffect( () => {
    document.title = '404 NotFound';
  }, []);

  return (
    <div className="error container">
      <img src={error} alt="404"/>
      <h1>Error 404</h1>
      <p>Sorry Page Not Found</p>
      <Link to={'/'}>
        <button>Back to Home</button>
      </Link>
    </div>
  )
}

export default NotFoundPage;