import { Link } from "react-router-dom";
import { FaHome, FaBookOpen, FaSearch } from "react-icons/fa";

const Navigation = () => {
  return (
    <nav>
      <ul className="nav-ul">
        <li>
          <Link className="nav-link" to="/" aria-hidden="true">
            {<FaHome />} Home
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/articles" aria-hidden="true">
            {<FaBookOpen />} Articles
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/about">
            About
          </Link>
        </li>
        <li>
          <Link
            className="nav-link"
            aria-label="Search"
            aria-hidden="true"
            to="#"
          >
            {<FaSearch />}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
