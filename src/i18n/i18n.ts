import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Navbar translation 
import navbarEn from './locales/en/navbar.json';
import navbarHi from './locales/hi/navbar.json';
import navbarNe from './locales/ne/navbar.json';

// Home translation
import homeEn from './locales/en/home.json';
import homeHi from './locales/hi/home.json';
import homeNe from './locales/ne/home.json';

// Features translation 
import featureEn from './locales/en/features.json';
import featureHi from './locales/hi/features.json';
import featureNe from './locales/ne/features.json';

// Metrics translation
import metricsEn from './locales/en/metrics.json';
import metricsHi from './locales/hi/metrics.json';
import metricsNe from './locales/ne/metrics.json';

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: {
                    navbar: navbarEn,
                    home: homeEn,
                    feature: featureEn,
                    metrics: metricsEn,
                }
            },
            hi: {
                translation: {
                    navbar: navbarHi,
                    home: homeHi,
                    feature: featureHi,
                    metrics: metricsHi,
                }
            },
            ne: {
                translation: {
                    navbar: navbarNe,
                    home: homeNe,
                    feature: featureNe,
                    metrics: metricsNe,
                }
            },
        },
        lng: 'en',
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
