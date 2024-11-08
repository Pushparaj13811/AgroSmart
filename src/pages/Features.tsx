import { Camera, BookOpen, Video, Users, Shield, Leaf } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Camera className="h-8 w-8 text-green-600" />,
      title: "Disease Detection",
      description: "Upload photos of your crops to instantly identify diseases and get treatment recommendations."
    },
    {
      icon: <BookOpen className="h-8 w-8 text-green-600" />,
      title: "Expert Articles",
      description: "Access a vast library of articles written by agricultural experts and researchers."
    },
    {
      icon: <Video className="h-8 w-8 text-green-600" />,
      title: "Video Tutorials",
      description: "Learn through comprehensive video guides covering various farming techniques."
    },
    {
      icon: <Users className="h-8 w-8 text-green-600" />,
      title: "Community Support",
      description: "Connect with other farmers, share experiences, and learn from each other."
    },
    {
      icon: <Shield className="h-8 w-8 text-green-600" />,
      title: "Data Security",
      description: "Your farming data is securely stored and protected with industry-standard encryption."
    },
    {
      icon: <Leaf className="h-8 w-8 text-green-600" />,
      title: "Sustainable Practices",
      description: "Learn about eco-friendly farming methods that benefit both yields and the environment."
    }
  ];

  return (
    <div className="py-12">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Features that Empower Farmers
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the tools and resources that make AgroSmart your complete
            farming companion
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
            Ready to Transform Your Farming?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Join thousands of farmers already using AgroSmart
          </p>
          <a
            href="/register"
            className="inline-block bg-white text-green-700 px-8 py-3 rounded-lg font-semibold hover:bg-green-100 transition"
          >
            Get Started Free
          </a>
        </div>
      </section>
    </div>
  );
};

export default Features;