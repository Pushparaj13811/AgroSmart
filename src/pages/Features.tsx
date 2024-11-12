import { Camera, BookOpen, Video, Users, Shield, Leaf } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Features = () => {
  const { t } = useTranslation();
  const features = [
    {
      icon: <Camera className="h-8 w-8 text-green-600" />,
      title: t('feature.disease_detection.title'),
      description: t('feature.disease_detection.description')
    },
    {
      icon: <BookOpen className="h-8 w-8 text-green-600" />,
      title: t('feature.expert_articles.title'),
      description: t('feature.expert_articles.description')
    },
    {
      icon: <Video className="h-8 w-8 text-green-600" />,
      title: t('feature.video_tutorials.title'),
      description: t('feature.video_tutorials.description')
    },
    {
      icon: <Users className="h-8 w-8 text-green-600" />,
      title: t('feature.community_support.title'),
      description: t('feature.community_support.description')
    },
    {
      icon: <Shield className="h-8 w-8 text-green-600" />,
      title: t('feature.data_security.title'),
      description: t('feature.data_security.description')
    },
    {
      icon: <Leaf className="h-8 w-8 text-green-600" />,
      title: t('feature.sustainable_practices.title'),
      description: t('feature.sustainable_practices.description')
    }
  ];

  return (
    <div className="py-12">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            {t('feature.features_header.title')}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('feature.features_header.description')}
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="bg-green-700 rounded-2xl text-white p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">
            {t('home.ready_to_transform')}
          </h2>
          <p className="text-xl text-green-100 mb-8">
            {t('home.join_agrosmart')}
          </p>
          <a
            href="/register"
            className="inline-block bg-white text-green-700 px-8 py-3 rounded-lg font-semibold hover:bg-green-100 transition"
          >
            {t('home.start_free_trial')}
          </a>
        </div>
      </section>
    </div>
  );
};

export default Features;