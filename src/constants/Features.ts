import { useTranslation } from 'react-i18next';
import { Feature } from '../types/types';
const useFeatures = () => {
    const { t } = useTranslation();

    const features: Feature[] = [
        {
            icon: "Microscope",
            title: t('feature.disease_detection.title'),
            description: t('feature.disease_detection.description')
        },
        {
            icon: "Upload",
            title: t('feature.image_analysis.title'),
            description: t('feature.image_analysis.description')
        },
        {
            icon: "BookOpen",
            title: t('feature.expert_articles.title'),
            description: t('feature.expert_articles.description')
        },
        {
            icon: "Video",
            title: t('feature.video_tutorials.title'),
            description: t('feature.video_tutorials.description')
        }
    ];

    return features;
};

export default useFeatures;