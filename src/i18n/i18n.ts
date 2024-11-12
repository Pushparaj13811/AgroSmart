import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Navbar translation 
import navbarEn from './locales/en/navbar.json';
import navbarHi from './locales/hi/navbar.json';
import navbarNe from './locales/ne/navbar.json';
import navbarBho from './locales/bhoj/navbar.json';
import navbarGu from './locales/gu/navbar.json';

// Home translation
import homeEn from './locales/en/home.json';
import homeHi from './locales/hi/home.json';
import homeNe from './locales/ne/home.json';
import homeBho from './locales/bhoj/home.json';
import homeGu from './locales/gu/home.json';

// Features translation 
import featureEn from './locales/en/features.json';
import featureHi from './locales/hi/features.json';
import featureNe from './locales/ne/features.json';
import featureBho from './locales/bhoj/features.json';
import featureGu from './locales/gu/features.json';

// Metrics translation
import metricsEn from './locales/en/metrics.json';
import metricsHi from './locales/hi/metrics.json';
import metricsNe from './locales/ne/metrics.json';
import metricsBho from './locales/bhoj/metrics.json';
import metricsGu from './locales/gu/metrics.json';

// Footer translation
import footerEn from './locales/en/footer.json';
import footerHi from './locales/hi/footer.json';
import footerNe from './locales/ne/footer.json';
import footerBho from './locales/bhoj/footer.json';
import footerGu from './locales/gu/footer.json';

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
                    footer: footerEn,
                }
            },
            hi: {
                translation: {
                    navbar: navbarHi,
                    home: homeHi,
                    feature: featureHi,
                    metrics: metricsHi,
                    footer: footerHi,
                }
            },
            ne: {
                translation: {
                    navbar: navbarNe,
                    home: homeNe,
                    feature: featureNe,
                    metrics: metricsNe,
                    footer: footerNe,
                }
            },
            bho: {
                translation: {
                    navbar: navbarBho,
                    home: homeBho,
                    feature: featureBho,
                    metrics: metricsBho,
                    footer: footerBho,
                }
            },
            gu: {
                translation: {
                    navbar: navbarGu,
                    home: homeGu,
                    feature: featureGu,
                    metrics: metricsGu,
                    footer: footerGu,
                }
            }
        },
        lng: 'en',
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
