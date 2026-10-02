import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/logo.svg'

const navLinks = [
  { to: '/', label: 'Bosh sahifa', end: true },
  { to: '/about', label: 'About' },
  { to: '/products', label: 'Mahsulotlar' },
  { to: '/advantages', label: 'Afzalliklar' },
  { to: '/brend', label: 'Brend' },
  { to: '/open-group', label: 'Open Group' },
  { to: '/contract', label: 'Shartnoma' },
]

const linkClass = ({ isActive }) =>
  [
    'text-sm font-medium transition-colors',
    isActive ? 'text-[#01AEE7]' : 'text-[#3C3C3E]/70 hover:text-[#3C3C3E]',
  ].join(' ')

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#3C3C3E]/10 bg-white/90 backdrop-blur">
      <div className="navbar mx-auto max-w-7xl px-4">
        <div className="navbar-start">
          <div className="dropdown">
            <button
              type="button"
              className="btn btn-ghost btn-square lg:hidden"
              aria-label="Menyuni ochish"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d={menuOpen ? 'M6 6l12 12M6 18L18 6' : 'M4 6h16M4 12h16M4 18h16'}
                />
              </svg>
            </button>
            {menuOpen && (
              <ul className="menu dropdown-content z-50 mt-3 w-56 rounded-box border border-[#3C3C3E]/10 bg-white p-2 shadow-lg">
                {navLinks.map(({ to, label, end }) => (
                  <li key={to}>
                    <NavLink
                      to={to}
                      end={end}
                      className={linkClass}
                      onClick={() => setMenuOpen(false)}
                    >
                      {label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <Link to="/" className="flex items-center px-2">
            <img src={logo} alt="TRUE" className="h-8 w-auto lg:h-10" />
          </Link>
        </div>

        <nav className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-1 px-1">
            {navLinks.map(({ to, label, end }) => (
              <li key={to}>
                <NavLink to={to} end={end} className={linkClass}>
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="navbar-end gap-2">
          <a href="tel:+998000000000" className="btn btn-ghost btn-sm hidden text-[#3C3C3E] sm:inline-flex">
            +998 00 000 00 00
          </a>
          <Link
            to="/contract"
            className="btn btn-sm border-none bg-[#01AEE7] text-white hover:bg-[#0193c2]"
          >
            Bog'lanish
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
