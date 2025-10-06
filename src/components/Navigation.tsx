import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  const isActive = (path: string) => location.pathname === path

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-gray-900">
              Artisan Haven
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`font-medium transition-colors ${
                isActive('/') ? 'text-gray-900' : 'text-gray-700 hover:text-gray-900'
              }`}
            >
              Home
            </Link>
            <Link
              to="/shop"
              className={`font-medium transition-colors ${
                isActive('/shop') ? 'text-gray-900' : 'text-gray-700 hover:text-gray-900'
              }`}
            >
              Shop
            </Link>
            <Link
              to="/about"
              className={`font-medium transition-colors ${
                isActive('/about') ? 'text-gray-900' : 'text-gray-700 hover:text-gray-900'
              }`}
            >
              About
            </Link>
            <Link
              to="/contact"
              className={`font-medium transition-colors ${
                isActive('/contact') ? 'text-gray-900' : 'text-gray-700 hover:text-gray-900'
              }`}
            >
              Contact
            </Link>
            <Link
              to="/cart"
              className="px-6 py-2 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors"
            >
              Cart (3)
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100"
            >
              <span className="sr-only">Open menu</span>
              {mobileMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className={`font-medium transition-colors ${
                  isActive('/') ? 'text-gray-900' : 'text-gray-700'
                }`}
              >
                Home
              </Link>
              <Link
                to="/shop"
                onClick={() => setMobileMenuOpen(false)}
                className={`font-medium transition-colors ${
                  isActive('/shop') ? 'text-gray-900' : 'text-gray-700'
                }`}
              >
                Shop
              </Link>
              <Link
                to="/about"
                onClick={() => setMobileMenuOpen(false)}
                className={`font-medium transition-colors ${
                  isActive('/about') ? 'text-gray-900' : 'text-gray-700'
                }`}
              >
                About
              </Link>
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className={`font-medium transition-colors ${
                  isActive('/contact') ? 'text-gray-900' : 'text-gray-700'
                }`}
              >
                Contact
              </Link>
              <Link
                to="/cart"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-block px-6 py-2 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors text-center"
              >
                Cart (3)
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
