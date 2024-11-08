import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Sprout } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-green-700 text-white top-0 sticky shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Sprout className="h-8 w-8" />
              <span className="font-bold text-xl">AgroSmart</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="hover:text-green-200 transition">Home</Link>
            <Link to="/about" className="hover:text-green-200 transition">About</Link>
            <Link to="/features" className="hover:text-green-200 transition">Features</Link>
            <Link to="/blog" className="hover:text-green-200 transition">Blog</Link>
            <Link to="/videos" className="hover:text-green-200 transition">Videos</Link>
            <Link to="/login" className="bg-green-600 hover:bg-green-500 px-4 py-2 rounded-md">
              Login
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md hover:text-green-200 hover:bg-green-600 transition"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 hover:bg-green-600 rounded-md">Home</Link>
            <Link to="/about" className="block px-3 py-2 hover:bg-green-600 rounded-md">About</Link>
            <Link to="/features" className="block px-3 py-2 hover:bg-green-600 rounded-md">Features</Link>
            <Link to="/blog" className="block px-3 py-2 hover:bg-green-600 rounded-md">Blog</Link>
            <Link to="/videos" className="block px-3 py-2 hover:bg-green-600 rounded-md">Videos</Link>
            <Link to="/login" className="bg-green-600 hover:bg-green-500 px-4 py-2 rounded-md">Login</Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;