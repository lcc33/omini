import { Link, useLocation } from 'react-router-dom'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/news', label: 'News' },
  { to: '/reviews', label: 'Reviews' },
  { to: '/about', label: 'About' },
]

export default function Navbar() {
  const location = useLocation()

  return (
    <nav className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 shadow-lg">
      <div className="flex justify-between items-center max-w-6xl mx-auto px-6 py-4">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="text-2xl font-extrabold tracking-tight text-yellow-400 group-hover:scale-105 transition-transform duration-200">
            <svg width="32" height="32" fill="none" viewBox="0 0 32 32">
              <circle cx="16" cy="16" r="14" stroke="#FACC15" strokeWidth="3" fill="#1F2937"/>
              <path d="M10 16l4 4 8-8" stroke="#FACC15" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
          <span className="text-xl font-bold text-white tracking-wide group-hover:text-yellow-400 transition-colors duration-200">
            Omini Hub
          </span>
        </Link>
        <div className="flex space-x-2 md:space-x-6">
          {navLinks.map(link => {
            const isActive = location.pathname === link.to
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`relative px-3 py-2 rounded-md font-medium transition-all duration-200
                  ${isActive
                    ? 'bg-yellow-400 text-gray-900 shadow-md'
                    : 'text-gray-200 hover:text-yellow-400 hover:bg-gray-800'}
                  `}
              >
                {link.label}
                {isActive && (
                  <span className="absolute left-1/2 -bottom-1 w-2 h-2 bg-yellow-400 rounded-full transform -translate-x-1/2"></span>
                )}
              </Link>
            )
          })}
        </div>
      </div>
    </nav>
  )
}
