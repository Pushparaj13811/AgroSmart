import BlogPostCard from '../components/BlogPostCard';
import { blogPosts } from '../constants/Blog';
const Blog = () => {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Agricultural Insights</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest farming techniques, research, and best practices
            in agriculture.
          </p>
        </div>

        <div className="grid gap-8">
          {blogPosts.map((post) => (
            <BlogPostCard
              key={post.id}
              image={post.image}
              title={post.title}
              excerpt={post.excerpt}
              date={post.date}
              author={post.author}
              category={post.category}
              id={post.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;