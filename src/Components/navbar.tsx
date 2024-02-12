import style from "../routes/navbar.module.css";
import images from "../images/beermug-logo3.jpg";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <header className={style.navbar}>
      <div className="logo">
        <Link to="/" className={style.logo}>
          <img src={images} className={style.logo} />
        </Link>
      </div>
      <nav>
        <ul>{props.children}</ul>
      </nav>
    </header>
  );
}
