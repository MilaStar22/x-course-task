import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import sprite from "../img/sprites.svg";
import logo from "../img/logo.png";

const currentYear = new Date().getFullYear();

function Footer() {
  const navigate = useNavigate();
  function redirectHome() {
    navigate("/");
  }

  return (
    <footer>
      <div className="footer-wrapper">
        <div className="footer-content container">
            <img className='logo_img' src={logo} alt="logo" onClick={redirectHome}/>
            <div className="social">
              <Link to='#'><button><svg><use href={sprite + "#icon-facebook"} /></svg></button></Link>
              <Link to='#'><button><svg><use href={sprite + "#icon-instagram"} /></svg></button></Link>
              <Link to='#'><button><svg><use href={sprite + "#icon-twitter"} /></svg></button></Link>
            </div>
        </div>
      </div>
      <div className="footer-copyright container">
        <div className='left'>© {currentYear} Виконано в <Link to={'https://prometheus.org.ua/'}>Prometheus</Link></div>
      </div>
    </footer>
  )
}

export default Footer;
