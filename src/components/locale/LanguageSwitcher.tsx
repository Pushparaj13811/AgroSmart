import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Button from '../ui/Button';
import { Card, CardContent } from '../ui/Card';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const userLanguage = useSelector((state: RootState) => state.user.user?.language);

    const languageMap = {
        en: 'English',
        hi: 'हिन्दी',
        ne: 'नेपाली',
        gu: 'ગુજરાતી',
        bho: 'भोजपुरी'
    } as const;

    const userLang = userLanguage ? languageMap[userLanguage as keyof typeof languageMap] : languageMap[localStorage.getItem('userLanguage') as keyof typeof languageMap];
    
    const [selectedLanguage, setSelectedLanguage] = useState(userLang);

    useEffect(() => {
        if (userLanguage && i18n?.changeLanguage) {
            i18n.changeLanguage(userLanguage);
            setSelectedLanguage(languageMap[userLanguage as keyof typeof languageMap]);
        }
    }, [userLanguage, i18n]);

    // Save language preference to localStorage when it changes
    useEffect(() => {
        if (userLanguage) {
            localStorage.setItem('userLanguage', userLanguage);
        }
    }, [userLanguage]);


    const changeLanguage = (langCode: string) => {
        if (i18n?.changeLanguage) {
            i18n.changeLanguage(langCode);
            const newLanguage = languageMap[langCode as keyof typeof languageMap];
            if (newLanguage) {
                setSelectedLanguage(newLanguage);
                localStorage.setItem('userLanguage', langCode);
            } else {
                console.error('Language is not available');
            }
        } else {
            console.error('i18n.changeLanguage is not available');
        }
        setIsOpen(false);
    };

    // Language options configuration
    const languageOptions = [
        { code: 'en', label: 'English' },
        { code: 'hi', label: 'हिन्दी' },
        { code: 'ne', label: 'नेपाली' },
        { code: 'gu', label: 'ગુજરાતી' },
        { code: 'bho', label: 'भोजपुरी' }
    ];

    return (
        <div className="relative">
            <Button
                variant="default"
                size="sm"
                className="px-4 py-2 rounded-md shadow-md bg-green-600 text-white hover:bg-green-500 focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
            >
                {selectedLanguage}
            </Button>
            {isOpen && (
                <Card className="absolute mt-2 right-[-40px] w-32 bg-white text-black rounded-md shadow-lg">
                    <CardContent className="p-1">
                        {languageOptions.map(({ code, label }) => (
                            <Button
                                key={code}
                                variant="ghost"
                                size="sm"
                                className={`w-full text-left mb-1 ${selectedLanguage === label
                                        ? 'bg-green-500 text-white'
                                        : 'hover:bg-green-500 hover:text-white'
                                    }`}
                                onClick={() => changeLanguage(code)}
                            >
                                {label}
                            </Button>
                        ))}
                    </CardContent>
                </Card>
            )}
        </div>
    );
};

export default LanguageSwitcher;