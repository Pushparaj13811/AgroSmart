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

// Login page translation 
import loginEn from './locales/en/login.json';
import loginHi from './locales/hi/login.json';
import loginNe from './locales/ne/login.json';
import loginBho from './locales/bhoj/login.json';
import loginGu from './locales/gu/login.json';

// Signup page translation
import signupEn from './locales/en/signup.json';
import signupHi from './locales/hi/signup.json';
import signupNe from './locales/ne/signup.json';
import signupBho from './locales/bhoj/signup.json';
import signupGu from './locales/gu/signup.json';

// Reset page translation
import resetEn from './locales/en/reset.json';
import resetHi from './locales/hi/reset.json';
import resetNe from './locales/ne/reset.json';
import resetBho from './locales/bhoj/reset.json';
import resetGu from './locales/gu/reset.json';

// Profile page translation
import profileEn from './locales/en/profile.json';
import profileHi from './locales/hi/profile.json';
import profileNe from './locales/ne/profile.json';
import profileBho from './locales/bhoj/profile.json';
import profileGu from './locales/gu/profile.json';

// Profile update form translation
import profileUpdateFormEn from './locales/en/profileupdateform.json';
import profileUpdateFormHi from './locales/hi/profileupdateform.json';
import profileUpdateFormNe from './locales/ne/profileupdateform.json';
import profileUpdateFormBho from './locales/bhoj/profileupdateform.json';
import profileUpdateFormGu from './locales/gu/profileupdateform.json';

const savedLanguage = localStorage.getItem('userLanguage') || 'en';

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
                    login: loginEn,
                    signup: signupEn,
                    reset: resetEn,
                    profile: profileEn,
                    profileUpdateForm: profileUpdateFormEn,
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
                    login: loginHi,
                    signup: signupHi,
                    reset: resetHi,
                    profile: profileHi,
                    profileUpdateForm: profileUpdateFormHi,
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
                    login: loginNe,
                    signup: signupNe,
                    reset: resetNe,
                    profile: profileNe,
                    profileUpdateForm: profileUpdateFormNe,
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
                    login: loginBho,
                    signup: signupBho,
                    reset: resetBho,
                    profile: profileBho,
                    profileUpdateForm: profileUpdateFormBho,
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
                    login: loginGu,
                    signup: signupGu,
                    reset: resetGu,
                    profile: profileGu,
                    profileUpdateForm: profileUpdateFormGu,
                }
            }
        },
        lng: savedLanguage,
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
