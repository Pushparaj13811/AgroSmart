import { Link } from 'react-router-dom';
import { User, Calendar, ArrowRight } from 'lucide-react'; 
import { BlogPost } from '../types/types';

function BlogCard({ image, title, excerpt, date, author, category, id }: BlogPost ) {
    return (
        <article className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
            <div className="relative h-48">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4">
                    <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm">
                        {category}
                    </span>
                </div>
            </div>
            <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-4">
                    <User className="h-4 w-4 mr-1" />
                    <span>{author}</span>
                    <span className="mx-2">•</span>
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{new Date(date).toLocaleDateString()}</span>
                </div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                    {title}
                </h2>
                <p className="text-gray-600 mb-4">
                    {excerpt}
                </p>
                <Link
                    to={`/blog/${id}`}
                    className="inline-flex items-center text-green-600 hover:text-green-700"
                >
                    Read More <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
            </div>
        </article>
    );
}

export default BlogCard;
