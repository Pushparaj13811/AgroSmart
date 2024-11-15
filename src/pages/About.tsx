import { Shield, Users, Leaf, Award } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import PageTransition from '../components/ui/PageTransition';

const About = () => {
  const { t } = useTranslation();
  const missionList = [];

  for (let i = 0; i < 4; i++) {
    missionList.push(t(`about.mission.list.${i}`));
  }

  const values = [
    {
      icon: <Shield className="h-8 w-8 text-green-600" />,
      title: t('about.values.list.0.title'),
      description: t('about.values.list.0.description')
    },
    {
      icon: <Users className="h-8 w-8 text-green-600" />,
      title: t('about.values.list.1.title'),
      description: t('about.values.list.1.description')
    },
    {
      icon: <Award className="h-8 w-8 text-green-600" />,
      title: t('about.values.list.2.title'),
      description: t('about.values.list.2.description')
    }
  ];

  return (
    <PageTransition>
      <div className="space-y-20 py-12">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              {t('about.about.heading')}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('about.about.description')}
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="bg-green-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  {t('about.mission.heading')}
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  {t('about.mission.description')}
                </p>
                <ul className="space-y-4">
                  {missionList.map((item, index) => (
                    <li key={index} className="flex items-center">
                      <Leaf className="h-5 w-5 text-green-600 mr-2" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&q=80"
                  alt="Farming landscape"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            {t('about.values.heading')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6">
                <div className="inline-block mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default About;