import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LogIn } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { userActions } from '../../store/userSlice';
import FlowerSpinner from '../../components/FlowerSpinner';
import { useTranslation } from 'react-i18next';
import PageTransition from '../../components/ui/PageTransition';

const Login = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const { status, error } = useSelector((state: RootState) => state.user);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const resultAction = await dispatch(
      userActions.login({
        email: formData.email,
        password: formData.password
      })
    )

    if (userActions.login.fulfilled.match(resultAction)) {
      navigate('/');
    } else {
      console.error('Login failed:', resultAction.payload || resultAction.error.message);
    }


  };

  return (
    <PageTransition>
      <div className="min-h-[80vh] flex items-center justify-center px-4">
        <div className="max-w-md w-full space-y-8">
          <div className="text-center">
            <LogIn className="mx-auto h-12 w-12 text-green-600" />
            <h2 className="mt-6 text-3xl font-bold text-gray-900">
              {t('login.greeting')}
            </h2>
            <p className="mt-2 text-gray-600">
              {t('login.inst')}
            </p>
          </div>

          {status === 'loading' && <div><FlowerSpinner size={160} color='green' /></div>}
          {error && <p className="text-center text-red-600">{error}</p>}

          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  {t('login.email')}
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-green-500 focus:outline-none focus:ring-green-500"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  {t('login.password')}
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-green-500 focus:outline-none focus:ring-green-500"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-500"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                  {t('login.remember')}
                </label>
              </div>

              <Link
                to="/forgot-password"
                className="text-sm font-medium text-green-600 hover:text-green-500"
              >
                {t('login.lost')}
              </Link>
            </div>


            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              disabled={status === 'loading'}
            >
              {status === 'loading' ? t('login.waiting') : t('login.login')}
            </button>

            <p className="text-center text-sm text-gray-600">
              {t('login.new')}{' '}
              <Link
                to="/register"
                className="font-medium text-green-600 hover:text-green-500"
              >
                {t('login.signup')}
              </Link>
            </p>
          </form>
        </div>
      </div>
    </PageTransition>
  );
};

export default Login;