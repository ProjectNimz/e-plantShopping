import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectCartCount } from '../redux/CartSlice.jsx'

function Header() {
  const cartCount = useSelector(selectCartCount)

  return (
    <header className="site-header">
      <div className="site-header__brand">
        <p className="site-header__kicker">Online Plant Shop</p>
        <h1 className="site-header__title">Paradise Nursery</h1>
      </div>

      <nav className="site-header__nav" aria-label="Main navigation">
        <NavLink
          className={({ isActive }) =>
            isActive ? 'site-nav__link site-nav__link--active' : 'site-nav__link'
          }
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? 'site-nav__link site-nav__link--active' : 'site-nav__link'
          }
          to="/plants"
        >
          Plants
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? 'site-nav__cart site-nav__cart--active' : 'site-nav__cart'
          }
          to="/cart"
        >
          <span aria-hidden="true">🛒</span>
          <span>{cartCount}</span>
        </NavLink>
      </nav>
    </header>
  )
}

export default Header
