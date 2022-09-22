import { Link, NavLink } from "react-router-dom";

function Header() {

  const getActiveLinkStyle = ({ isActive }: {isActive: boolean}) => {
    if (isActive) return { textDecoration: 'underline'}
  }
  return (
    <header>
      <div className="container header-container">
        <Link className="header-link" to="/">
          <h1>Wilders Book</h1>
        </Link>
        <div className="header-container">
          <NavLink style={getActiveLinkStyle} className="header-link" to="/wilders">Wilders</NavLink>
          <NavLink style={getActiveLinkStyle} className="header-link" to="/create-wilder">Créez un wilder</NavLink>
        </div>
      </div>
    </header>
  );
}

export default Header;
