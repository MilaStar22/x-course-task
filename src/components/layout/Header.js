import { useNavigate, Link } from "react-router-dom";
import logo from "../img/logo.png";
import sprite from "../img/sprites.svg";
import { BsBasket2 } from "react-icons/bs";

function Header() {
  
  const navigate = useNavigate();
  function redirectHome() {
    navigate("/");
  }

  const deleteUser= () => {
    localStorage.clear();
    sessionStorage.clear();
    navigate('/signin');
  };

  return (
    <header>
      <div className='header'>
        <div className="logo">
          <img className='logo_img' src={logo} alt="logo" onClick={redirectHome} />
        </div>
        <div className="logo_text">
          <h1>JS BOOK STORE / Hello, {localStorage.getItem('user')}</h1>
          <p>X-course task / Starovoit Liudmyla</p>
        </div>
        <div className="user">
          <Link to='/purchase'><BsBasket2 style={{color: 'black', width: '42px', height: 'auto'}} alt='basket'/></Link>
          <Link to='/signin'><button className="sign-out" onClick={deleteUser}>Sign-out</button></Link>
          <svg><use href={sprite + "#user"} alt="user_logo"/></svg>
          <span>{sessionStorage.getItem('user')}</span>
        </div>
      </div>
    </header>
  );
}
export default Header;