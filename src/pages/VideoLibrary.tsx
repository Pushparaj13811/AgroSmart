import { useState } from 'react';
import { Search } from 'lucide-react';
import videos from '../constants/Videos';
import VideoCard from '../components/ui/VideoCard';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import PageTransition from '../components/ui/PageTransition';

const VideoLibrary = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const categories = [t('videoLibrary.categories.0'), t('videoLibrary.categories.1'), t('videoLibrary.categories.2'), t('videoLibrary.categories.3'), t('videoLibrary.categories.4')];

  return (
    <PageTransition>
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {t('videoLibrary.educational_videos.title')}
          </h1>
          <p className="text-xl text-gray-600">
            {t('videoLibrary.educational_videos.description')}
          </p>
        </div>

        <div className="mb-8 flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder={t('videoLibrary.search_videos')}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full whitespace-nowrap ${selectedCategory === category
                  ? 'bg-green-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                onClick={() => setSelectedCategory(category === 'All' ? '' : category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 gap-8 x">
          {videos.map((video) => (
            <VideoCard
              key={video.id}
              video={video}
              onClick={() => navigate(`/videos/${video.id}`)}
            />
          ))}
        </div>
      </div>
    </PageTransition>
  );
};

export default VideoLibrary;