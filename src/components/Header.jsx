import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = [
    { path: '/', label: 'ГЛАВНАЯ' },
    { path: '/products', label: 'ПРОДУКТЫ' },
    { path: '/advantages', label: 'ПРЕИМУЩЕСТВА' },
    { path: '/brend', label: 'БРЕНД' },
    { path: '/opengroup', label: 'OPEN GROUP' },
    { path: '/contract', label: 'КОНТРАКТ' },
  ]

  const linkClass = ({ isActive }) =>
    `text-xs md:text-sm font-bold uppercase tracking-wider px-3 py-2 transition-colors duration-200 ${
      isActive
        ? 'text-[#FCEE21]'
        : 'text-white hover:text-[#FCEE21]'
    }`

  return (
    <header className="bg-[#00A0E9] shadow-md sticky top-0 z-50">
      <div className="max-w-[1240px] mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="bg-white text-[#00A0E9] font-black text-lg md:text-xl px-3 py-1 tracking-tight">
              TRUE
            </div>
            <span className="text-white font-bold text-sm md:text-base uppercase tracking-wider hidden sm:block">
              Fitness
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <NavLink key={link.path} to={link.path} className={linkClass}>
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden flex flex-col gap-1.5 p-2 cursor-pointer"
            aria-label="Toggle menu"
          >
            <span
              className={`block h-0.5 w-6 bg-white rounded transition-transform duration-300 ${
                menuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-white rounded transition-opacity duration-300 ${
                menuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-white rounded transition-transform duration-300 ${
                menuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="flex flex-col px-4 pb-4 gap-1">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className={linkClass}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Header