import { Link } from 'react-router-dom';
import { User, Calendar, ArrowRight } from 'lucide-react'; 
import type{ BlogPost } from '../types/types';

function BlogPostCard({ image, title, excerpt, date, author, category, id }: BlogPost ) {
  return (
    <article className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
      <div className="md:flex">
        <div className="md:w-1/3">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="p-8 md:w-2/3">
          <div className="uppercase tracking-wide text-sm text-green-600 font-semibold">
            {category}
          </div>
          <h2 className="mt-2 text-2xl font-semibold text-gray-900">
            {title}
          </h2>
          <p className="mt-3 text-gray-600">{excerpt}</p>
          <div className="mt-6 flex items-center">
            <div className="flex items-center text-sm text-gray-500">
              <User className="h-4 w-4 mr-2" />
              {author}
            </div>
            <div className="mx-4 text-gray-300">|</div>
            <div className="flex items-center text-sm text-gray-500">
              <Calendar className="h-4 w-4 mr-2" />
              {new Date(date).toLocaleDateString()}
            </div>
          </div>
          <div className="mt-6">
            <Link
              to={`/blog/${id}`}
              className="inline-flex items-center text-green-600 hover:text-green-700 font-medium"
            >
              Read More <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}

export default BlogPostCard;
