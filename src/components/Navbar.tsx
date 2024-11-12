import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, Sprout } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store/store';
import { userActions } from '../store/userSlice';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './locale/LanguageSwitcher';

const Navbar = () => {
  const { t } = useTranslation();
  const user = useSelector((state: RootState) => state.user.user);
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();


  const handleLogout = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await dispatch(userActions.logout());

    if (userActions.logout.fulfilled.match(response)) {
      localStorage.removeItem('user');
      localStorage.removeItem('userProfile');
      navigate('/');
    } else {
      console.error('Logout failed:', response.payload || response.error.message);
    }
  };
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

            {user && user.role === 'admin' && (
              <Link to="/admin" className="hover:text-green-200 transition">{t('navbar.admin')}</Link>
            )}
            {
              user ? (
                <>
                  <Link to="/" className="hover:text-green-200 transition">{t('navbar.profile')}</Link>
                  <Link to="/detect" className="hover:text-green-200 transition">{t('navbar.detect')}</Link>
                </>
              ) : (
                <>
                  <Link to="/" className="hover:text-green-200 transition">{t('navbar.home')}</Link>
                  <Link to="/about" className="hover:text-green-200 transition">{t('navbar.about')}</Link>
                  <Link to="/features" className="hover:text-green-200 transition">{t('navbar.features')}</Link>
                </>
              )
            }
            <Link to="/blog" className="hover:text-green-200 transition">{t('navbar.blog')}</Link>
            <Link to="/videos" className="hover:text-green-200 transition">{t('navbar.videos')}</Link>
            {user ? (
              <button onClick={handleLogout} className="bg-green-600 hover:bg-green-500 px-4 py-2 rounded-md">{t('navbar.logout')}</button>
            ) : (
              <Link to="/login" className="bg-green-600 hover:bg-green-500 px-4 py-2 rounded-md">
                {t('navbar.login')}
              </Link>
            )}
            {/* Language Switcher */}
            <LanguageSwitcher />
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
      </div >

      {/* Mobile Menu */}
      {
        isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link to="/" className="block px-3 py-2 hover:bg-green-600 rounded-md">{t('navbar.home')}</Link>
              <Link to="/about" className="block px-3 py-2 hover:bg-green-600 rounded-md">{t('navbar.about')}</Link>
              <Link to="/features" className="block px-3 py-2 hover:bg-green-600 rounded-md">{t('navbar.features')}</Link>
              <Link to="/blog" className="block px-3 py-2 hover:bg-green-600 rounded-md">{t('navbar.blog')}</Link>
              <Link to="/videos" className="block px-3 py-2 hover:bg-green-600 rounded-md">{t('navbar.videos')}</Link>
              <Link to="/login" className="bg-green-600 hover:bg-green-500 px-4 py-2 rounded-md">{t('navbar.login')}</Link>
            </div>
          </div>
        )
      }
    </nav >
  );
}

export default Navbar;