import { Link } from 'react-router-dom';
import { blogPosts } from '../constants/Blog';
import * as LucideIcons from 'lucide-react';
import BlogCard from '../components/BlogCard';
import FeatureCard from '../components/FeatureCard';
import { features } from '../constants/Features';
import { Feature, LucideIconName } from '../types/types';

const Home = () => {
  const renderIcon = (iconName: LucideIconName) => {
    const IconComponent = LucideIcons[iconName] as React.FC<{ size?: number }>;
    return IconComponent ? <IconComponent size={24} /> : null;
  };

  return (
    <div className="space-y-10">
      {/* Hero Section */}
      <section className="relative bg-green-700 text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&q=80"
            alt="Farm background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Smart Farming Solutions
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-green-100">
              Empowering farmers with advanced technology and expert knowledge
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/detect"
                className="bg-white text-green-700 px-8 py-3 rounded-lg font-semibold hover:bg-green-100 transition"
              >
                Detect Crop Disease
              </Link>
              <Link
                to="/register"
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-700 transition duration-300"
              >
                Get Started Free
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose AgroSmart?
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive tools and resources for modern farming
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature: Feature) => (
              <FeatureCard
                key={feature.title}
                icon={renderIcon(feature.icon)}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Latest Insights</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.slice(0, 3).map((post) => (
              <BlogCard
                key={post.id}
                id={post.id}
                image={post.image}
                title={post.title}
                excerpt={post.excerpt}
                date={post.date}
                author={post.author}
                category={post.category}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-green-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { number: "10,000+", label: "Farmers Helped" },
              { number: "50,000+", label: "Disease Detections" },
              { number: "1,000+", label: "Expert Articles" }
            ].map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                <div className="text-3xl font-bold text-green-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-green-700 rounded-2xl text-white p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Transform Your Farming?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Join thousands of farmers already using AgroSmart to improve their yields
          </p>
          <Link
            to="/register"
            className="inline-block bg-white text-green-700 px-8 py-3 rounded-lg font-semibold hover:bg-green-100 transition"
          >
            Start Free Trial
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;