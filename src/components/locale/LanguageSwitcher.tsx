import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Button from '../ui/Button';
import { Card, CardContent } from '../ui/Card';

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState('English');

    const changeLanguage = (lang: string) => {
        if (i18n && i18n.changeLanguage) {
            i18n.changeLanguage(lang);
            let language;
            if (lang === 'en') {
                language = 'English';
            } else if (lang === 'hi') {
                language = 'हिन्दी';
            } else if (lang === 'ne') {
                language = 'नेपाली';
            } else if (lang === 'gu') {
                language = 'ગુજરાતી';
            } else {
                language = 'भोजपुरी';
            }
            setSelectedLanguage(language);
        } else {
            console.error('i18n.changeLanguage is not available');
        }
        setIsOpen(false);
    };

    return (
        <div className="relative">
            <Button
                variant="default"
                size='sm'
                className="px-4 py-2 rounded-md shadow-md bg-green-600 text-white hover:bg-green-500 focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
            >
                {selectedLanguage}
            </Button>
            {isOpen && (
                <Card className="absolute mt-2 right-[-40px] w-32 bg-white text-black rounded-md shadow-lg">
                    <CardContent>
                        <Button
                            variant="ghost"
                            size='sm'
                            className="w-full text-left hover:bg-green-500 hover:text-white"
                            onClick={() => changeLanguage('en')}
                        >
                            English
                        </Button>
                        <Button
                            variant="ghost"
                            size='sm'
                            className="w-full text-left  hover:bg-green-500 hover:text-white"
                            onClick={() => changeLanguage('hi')}
                        >
                            हिन्दी
                        </Button>
                        <Button
                            variant="ghost"
                            size='sm'
                            className="w-full text-left  hover:bg-green-500 hover:text-white"
                            onClick={() => changeLanguage('ne')}
                        >
                            नेपाली
                        </Button>
                        <Button
                            variant="ghost"
                            size='sm'
                            className="w-full text-left  hover:bg-green-500 hover:text-white"
                            onClick={() => changeLanguage('gu')}
                        >
                            ગુજરાતી
                        </Button>
                        <Button
                            variant="ghost"
                            size='sm'
                            className="w-full text-left  hover:bg-green-500 hover:text-white"
                            onClick={() => changeLanguage('bho')}
                        >
                            भोजपुरी
                        </Button>
                    </CardContent>
                </Card>
            )}
        </div>
    );
};

export default LanguageSwitcher;