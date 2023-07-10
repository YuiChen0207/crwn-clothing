import { Outlet, Link, useLocation } from "react-router-dom";
import { Fragment, useContext, useState } from "react";
import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import HamburgerMenu from "react-hamburger-menu";
import "./navigation.style.scss";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrownLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <div
            className={`hamburger-menu-container ${isMenuOpen ? "open" : ""}`}
            onClick={() => toggleMenu}
          >
            <HamburgerMenu
              isOpen={isMenuOpen}
              menuClicked={toggleMenu}
              width={18}
              height={15}
              strokeWidth={2}
              rotate={0}
              color="#333"
              borderRadius={0}
              animationDuration={0.5}
            />
          </div>
          <div className="nav-links">
            <Link
              className={`nav-link ${
                location.pathname === "/shop" ? "active" : ""
              }`}
              to="/shop"
            >
              Shop
            </Link>
            <Link
              className={`nav-link ${
                location.pathname === "/ranking" ? "active" : ""
              }`}
              to="/ranking"
            >
              Ranking
            </Link>
            {currentUser ? (
              <span className="nav-link" onClick={signOutUser}>
                Sign Out
              </span>
            ) : (
              <Link
                className={`nav-link ${
                  location.pathname === "/auth" ? "active" : ""
                }`}
                to="/auth"
              >
                Sign In
              </Link>
            )}
          </div>
          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
