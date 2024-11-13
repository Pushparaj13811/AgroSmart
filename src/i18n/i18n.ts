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

// VideoLibrary translation

import videoLibraryEn from './locales/en/videoLibrary.json';
import videoLibraryHi from './locales/hi/videoLibrary.json';
import videoLibraryNe from './locales/ne/videoLibrary.json';
import videoLibraryBho from './locales/bhoj/videoLibrary.json';
import videoLibraryGu from './locales/gu/videoLibrary.json';

// BlogPage translation
import blogEn from './locales/en/blog.json';
import blogHi from './locales/hi/blog.json';
import blogNe from './locales/ne/blog.json';
import blogBho from './locales/bhoj/blog.json';
import blogGu from './locales/gu/blog.json';

// DiseaseDetection translation
import diseaseDetectionEn from './locales/en/diseasesdetection.json';
import diseaseDetectionHi from './locales/hi/diseasesdetection.json';
import diseaseDetectionNe from './locales/ne/diseasesdetection.json';
import diseaseDetectionBho from './locales/bhoj/diseasesdetection.json';
import diseaseDetectionGu from './locales/gu/diseasesdetection.json';

// About translation

import aboutEn from './locales/en/about.json';
import aboutHi from './locales/hi/about.json';
import aboutNe from './locales/ne/about.json';
import aboutBho from './locales/bhoj/about.json';
import aboutGu from './locales/gu/about.json';

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
                    videoLibrary: videoLibraryEn,
                    blog: blogEn,
                    diseaseDetection: diseaseDetectionEn,
                    about: aboutEn,
                }
            },
            hi: {
                translation: {
                    navbar: navbarHi,
                    home: homeHi,
                    feature: featureHi,
                    metrics: metricsHi,
                    footer: footerHi,
                    videoLibrary: videoLibraryHi,
                    blog: blogHi,
                    diseaseDetection: diseaseDetectionHi,
                    about: aboutHi,
                }
            },
            ne: {
                translation: {
                    navbar: navbarNe,
                    home: homeNe,
                    feature: featureNe,
                    metrics: metricsNe,
                    footer: footerNe,
                    videoLibrary: videoLibraryNe,
                    blog: blogNe,
                    diseaseDetection: diseaseDetectionNe,
                    about: aboutNe,
                }
            },
            bho: {
                translation: {
                    navbar: navbarBho,
                    home: homeBho,
                    feature: featureBho,
                    metrics: metricsBho,
                    footer: footerBho,
                    videoLibrary: videoLibraryBho,
                    blog: blogBho,
                    diseaseDetection: diseaseDetectionBho,
                    about: aboutBho,
                }
            },
            gu: {
                translation: {
                    navbar: navbarGu,
                    home: homeGu,
                    feature: featureGu,
                    metrics: metricsGu,
                    footer: footerGu,
                    videoLibrary: videoLibraryGu,
                    blog: blogGu,
                    diseaseDetection: diseaseDetectionGu,
                    about: aboutGu,
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
