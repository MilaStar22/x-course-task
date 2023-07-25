import { useNavigate, Link } from "react-router-dom";
import logo from "../img/logo.png";
import sprite from "../img/sprites.svg";

function Header() {
  
  const navigate = useNavigate();
  function redirectHome() {
    navigate("/");
  }

  const deleteUser= () => {
    // localStorage.removeItem('user');
    localStorage.clear();
    navigate('/signin');
  };

  return (
    <header>
      <div className='header'>
        <div className="logo">
          <img className='logo_img' src={logo} alt="logo" onClick={redirectHome} />
        </div>
        <div className="logo_text">
          <p>JS BOOK STORE / Hello, {localStorage.getItem('user')}</p>
        </div>
        <div className="user">
          <Link to='/purchase'><svg><use href={sprite + "#bucket"} alt="bucket"/></svg></Link>
          <Link to='/signin'><button className="sign-out" onClick={deleteUser}>Sign-out</button></Link>
          <svg><use href={sprite + "#user"} alt="user_logo"/></svg>
          <span>{localStorage.getItem('user')}</span>
        </div>
      </div>
    </header>
  );
}

export default Header;