import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import Container from "react-bootstrap/Container";
import logo from "../images/logo.png";

function Header() {
  const [isDisplayed, setIsDisplayed] = useState(false);

  function handleMenuClick() {
    setIsDisplayed((prevIsDisplayed) => !prevIsDisplayed);
  }

  let dropdownMenuClasses = styles.dropdownMenu;
  if (isDisplayed) {
    dropdownMenuClasses += ` ${styles.displayMobileMenu}`;
  }

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav}  w-100`}>
        <Container className="d-flex justify-content-between align-items-center">
          <Link to="/" className="p-3">
            <img src={logo} alt="logo" />
          </Link>
          <div className={styles.menuIconContainer}>
            <span
              onClick={handleMenuClick}
              className={`material-icons ${styles.menuIcon} text-dark`}
            >
              {" "}
              menu{" "}
            </span>
            <ul className={dropdownMenuClasses}>
              <li className={isDisplayed ? "container" : null}>
                <Link to="/category/technology" className="p-3 text-uppercase ">
                  Tech
                </Link>
              </li>
              <li className={isDisplayed ? "container" : null}>
                <Link to="/category/football" className="p-3 text-uppercase ">
                  Fotbal
                </Link>
              </li>
              <li className={isDisplayed ? "container" : null}>
                <Link to="/category/business" className="p-3 text-uppercase ">
                  Business
                </Link>
              </li>
              <li className={isDisplayed ? "container" : null}>
                <Link to="/favorites" className="p-3 text-uppercase ">
                  Favorites
                </Link>
              </li>
            </ul>
          </div>
        </Container>
      </nav>
    </header>
  );
}

export default Header;
