import { useState } from 'react';
import VideoContainer from '../../components/video/VideoContainer';
import { Clock, ThumbsUp, ThumbsDown, Share2, BookmarkPlus, Flag } from 'lucide-react';
import videos from '../../constants/Videos';
import VideoVerticleCard from '../../components/ui/VideoVerticleCard';
import { useNavigate } from 'react-router-dom';


const VideoPage = (publicId: any) => {
    let video = videos.find((video) => video.id === publicId.publicId);
    const navigate = useNavigate();
    const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);

    return (
        <div className="max-w-[1800px] mx-auto px-4 py-6 bg-gray-50">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Main Content */}
                <div className="lg:col-span-2">
                    {/* Video Player */}
                    <div className="w-full rounded-xl overflow-hidden shadow-lg bg-black">
                        <VideoContainer url={video?.videoUrl || ""} thumbnail={video?.thumbnail || ""} />
                    </div>

                    {/* Video Info */}
                    <div className="mt-4">
                        <h1 className="text-xl font-bold">{video?.title}</h1>

                        <div className="flex flex-wrap items-center justify-between mt-4 pb-4 border-b">
                            <div className="flex items-center space-x-4">
                                <img
                                    src={video?.avatar}
                                    alt={video?.channelName}
                                    className="w-10 h-10 rounded-full"
                                />
                                <div>
                                    <h3 className="font-semibold">{video?.channelName}</h3>
                                    <p className="text-sm text-gray-600">{video?.subscribers}</p>
                                </div>
                                <button className="bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700">
                                    Subscribe
                                </button>
                            </div>

                            <div className="flex items-center space-x-2 mt-4 sm:mt-0">
                                <div className="flex items-center bg-gray-100 rounded-full">
                                    <button className="flex items-center space-x-1 px-4 py-2 border-r border-gray-300 hover:bg-gray-200">
                                        <ThumbsUp size={20} />
                                        <span>{video?.likes}</span>
                                    </button>
                                    <button className="flex items-center px-4 py-2 hover:bg-gray-200">
                                        <ThumbsDown size={20} />
                                    </button>
                                </div>
                                <button className="flex items-center space-x-2 px-4 py-2 bg-gray-100 rounded-full hover:bg-gray-200">
                                    <Share2 size={20} />
                                    <span>Share</span>
                                </button>
                                <button className="flex items-center space-x-2 px-4 py-2 bg-gray-100 rounded-full hover:bg-gray-200">
                                    <BookmarkPlus size={20} />
                                    <span>Save</span>
                                </button>
                                <button className="p-2 hover:bg-gray-200 rounded-full">
                                    <Flag size={20} />
                                </button>
                            </div>
                        </div>

                        {/* Description */}
                        <div className="mt-4 bg-gray-100 rounded-xl p-4">
                            <div className="flex items-center text-sm text-gray-600 mb-2">
                                <span className="flex items-center mr-4">
                                    <Clock size={16} className="mr-1" />
                                    {video?.uploadedTime}
                                </span>
                                <span>{video?.views}</span>
                            </div>
                            <p className={`text-sm ${isDescriptionExpanded ? '' : 'line-clamp-2'}`}>
                                {video?.description}
                            </p>
                            <button
                                className="text-sm font-semibold mt-2 text-gray-700 hover:text-gray-900"
                                onClick={() => setIsDescriptionExpanded(!isDescriptionExpanded)}
                            >
                                {isDescriptionExpanded ? 'Show less' : 'Show more'}
                            </button>
                        </div>
                    </div>
                </div>
                {/* Sidebar - Related Videos */}
                <div className="space-y-4">
                    {videos.map((video: any) => (
                        <VideoVerticleCard
                            key={video.id}
                            video={video}
                            onClick={() => navigate(`/videos/${video.id}`)}
                        />
                    ))}
                </div>

            </div>
        </div>
    );
};

export default VideoPage;