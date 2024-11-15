import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { KeyRound } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import PageTransition from '../../components/ui/PageTransition';

const ForgotPassword = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // API call would go here
  };

  return (
    <PageTransition>
      <div className="min-h-[80vh] flex items-center justify-center px-4">
        <div className="max-w-md w-full space-y-8">
          <div className="text-center">
            <KeyRound className="mx-auto h-12 w-12 text-green-600" />
            <h2 className="mt-6 text-3xl font-bold text-gray-900">
              {t('reset.reset_password')}
            </h2>
            <p className="mt-2 text-gray-600">
              {t('reset.enter_email')}
            </p>
          </div>

          {!submitted ? (
            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  {t('reset.email')}
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-green-500 focus:outline-none focus:ring-green-500"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                {t('reset.send_reset')}
              </button>
            </form>
          ) : (
            <div className="mt-8 text-center">
              <div className="rounded-md bg-green-50 p-4">
                <p className="text-sm font-medium text-green-800">
                  {t('reset.check_email')}
                </p>
              </div>
            </div>
          )}

          <div className="text-center">
            <Link
              to="/login"
              className="font-medium text-green-600 hover:text-green-500"
            >
              {t('reset.back_to_login')}
            </Link>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default ForgotPassword;