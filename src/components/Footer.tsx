import { Heart } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-green-800 mt-12 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-50 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">{t('footer.footer.about.title')}</h3>
            <p className="text-green-200">
              {t('footer.footer.about.description')}
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">{t('footer.footer.quick_links.title')}</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="text-green-200 hover:text-white">{t('footer.footer.quick_links.about_us')}</a></li>
              <li><a href="/features" className="text-green-200 hover:text-white">{t('footer.footer.quick_links.features')}</a></li>
              <li><a href="/contact" className="text-green-200 hover:text-white">{t('footer.footer.quick_links.contact')}</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">{t('footer.footer.resources.title')}</h3>
            <ul className="space-y-2">
              <li><a href="/blog" className="text-green-200 hover:text-white">{t('footer.footer.resources.blog')}</a></li>
              <li><a href="/videos" className="text-green-200 hover:text-white">{t('footer.footer.resources.videos')}</a></li>
              <li><a href="/faq" className="text-green-200 hover:text-white">{t('footer.footer.resources.faq')}</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">{t('footer.footer.connect.title')}</h3>
            <ul className="space-y-2">
              <li><a href="#" aria-label="Twitter" className="text-green-200 hover:text-white">Twitter</a></li>
              <li><a href="#" aria-label="Facebook" className="text-green-200 hover:text-white">Facebook</a></li>
              <li><a href="#" aria-label="Instagram" className="text-green-200 hover:text-white">Instagram</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-green-700 text-center">
          <p className="flex items-center justify-center text-green-200">
            {t('footer.footer.made_with')} <Heart className="h-4 w-4 mx-1 text-red-500" /> {t('footer.footer.for_farmers')}
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
