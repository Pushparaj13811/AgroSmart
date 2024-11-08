import { Shield, Users, Leaf, Award } from 'lucide-react';

const About = () => {
  return (
    <div className="space-y-20 py-12">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            About AgroSmart
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're on a mission to revolutionize farming through technology,
            making sustainable agriculture accessible to farmers worldwide.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-green-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                AgroSmart combines cutting-edge technology with agricultural expertise
                to help farmers make informed decisions, increase yields, and practice
                sustainable farming.
              </p>
              <ul className="space-y-4">
                {[
                  "Empower farmers with data-driven insights",
                  "Promote sustainable farming practices",
                  "Make expert knowledge accessible",
                  "Build a community of modern farmers"
                ].map((item, index) => (
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
          Our Values
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <Shield className="h-8 w-8 text-green-600" />,
              title: "Trust & Reliability",
              description: "We provide accurate, scientifically-backed information you can rely on."
            },
            {
              icon: <Users className="h-8 w-8 text-green-600" />,
              title: "Community First",
              description: "We believe in the power of knowledge sharing and community support."
            },
            {
              icon: <Award className="h-8 w-8 text-green-600" />,
              title: "Excellence",
              description: "We strive for excellence in every tool and resource we provide."
            }
          ].map((value, index) => (
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
  );
};

export default About;