import { useParams } from 'react-router-dom';
import { Calendar, User, ThumbsUp, Share2, Inbox} from 'lucide-react';

const BlogPost = () => {
  const { id } = useParams();
  console.log(id); 
  // Mock data - would be fetched from API based on id
  const post = {
    title: "Sustainable Farming Practices for 2024",
    content: `
      Sustainable farming is becoming increasingly important in today's agricultural landscape.
      This comprehensive guide explores the latest techniques and best practices for
      environmentally conscious farming that maintains high yields while protecting our natural resources.
      
      Key areas we'll cover:
      - Soil health management
      - Water conservation
      - Integrated pest management
      - Crop rotation strategies
    `,
    author: "John Smith",
    date: "2024-03-15",
    category: "Sustainability",
    image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&q=80",
    likes: 128,
    comments: []
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <article>
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {post.title}
          </h1>
          <div className="flex items-center text-gray-600 space-x-4">
            <div className="flex items-center">
              <User className="h-5 w-5 mr-2" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center">
              <Calendar className="h-5 w-5 mr-2" />
              <span>{new Date(post.date).toLocaleDateString()}</span>
            </div>
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
              {post.category}
            </span>
          </div>
        </header>

        {/* Featured Image */}
        <div className="mb-8">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-96 object-cover rounded-lg"
          />
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none mb-8">
          <p className="text-gray-700 whitespace-pre-line">
            {post.content}
          </p>
        </div>

        {/* Engagement */}
        <div className="flex items-center space-x-4 border-t pt-6">
          <button className="flex items-center space-x-2 text-gray-600 hover:text-green-600">
            <ThumbsUp className="h-5 w-5" />
            <span>{post.likes} Likes</span>
          </button>
          <button className="flex items-center space-x-2 text-gray-600 hover:text-green-600">
            <Share2 className="h-5 w-5" />
            <span>Share</span>
          </button>
          <button className="flex items-center space-x-2 text-gray-600 hover:text-green-600">
            <Inbox className="h-5 w-5" />
            <span>Comment</span>
          </button>
        </div>
      </article>
    </div>
  );
};

export default BlogPost;