import { useParams } from 'react-router-dom';
import { Calendar, User, ThumbsUp, Share2, Inbox } from 'lucide-react';
import posts from '../constants/DetailedBlogs';
const BlogPost = () => {
  const { id } = useParams();
  let title = "";
  let date = "";
  let author = "";
  let category = "";
  let image = "";
  let likes = 0;
  let content = "";
  // Mock data - would be fetched from API based on id

  posts.map((post) => {
    if (post.id === id) {
      title = post.title;
      date = post.date;
      author = post.author;
      category = post.category;
      image = post.image;
      likes = post.likes;
      content = post.content;
    }
  })
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <article>
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h1>
          <div className="flex items-center text-gray-600 space-x-4">
            <div className="flex items-center">
              <User className="h-5 w-5 mr-2" />
              <span>{author}</span>
            </div>
            <div className="flex items-center">
              <Calendar className="h-5 w-5 mr-2" />
              <span>{new Date(date).toLocaleDateString()}</span>
            </div>
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
              {category}
            </span>
          </div>
        </header>

        {/* Featured Image */}
        <div className="mb-8">
          <img
            src={image}
            alt={title}
            className="w-full h-96 object-cover rounded-lg"
          />
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none mb-8">
          <div
            className="text-gray-700"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>

        {/* Engagement */}
        <div className="flex items-center space-x-4 border-t pt-6">
          <button className="flex items-center space-x-2 text-gray-600 hover:text-green-600">
            <ThumbsUp className="h-5 w-5" />
            <span>{likes} Likes</span>
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