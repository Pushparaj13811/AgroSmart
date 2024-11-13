import { MoreVertical } from 'lucide-react';

const VideoCard = ({ video, onClick }: any) => {
    return (
        <div
            className="w-80 bg-white mx-auto rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
            onClick={onClick} // Adding the onClick handler here
        >
            {/* Thumbnail Container */}
            <div className="relative">
                <img
                    src={video.thumbnail}
                    alt="Video thumbnail"
                    className="w-full aspect-video object-cover"
                />
                {/* Duration Badge */}
                <div className="absolute bottom-2 right-2 bg-black bg-opacity-80 text-white text-xs px-1 py-0.5 rounded">
                    {video.duration}
                </div>
            </div>

            {/* Content Section */}
            <div className="p-3">
                <div className="flex gap-3">
                    {/* Channel Avatar */}
                    <div className="flex-shrink-0">
                        <img
                            src={video.avatar}
                            alt="Channel avatar"
                            className="w-10 h-10 rounded-full"
                        />
                    </div>

                    {/* Video Info */}
                    <div className="flex-grow">
                        {/* Title */}
                        <h3 className="font-semibold text-sm line-clamp-2 mb-1">
                            {video.title}
                        </h3>

                        {/* Channel Name */}
                        <p className="text-gray-600 text-sm mb-1">
                            {video.channelName}
                        </p>

                        {/* Video Stats */}
                        <div className="flex items-center gap-2 text-gray-600 text-xs">
                            <span>{video.views}</span>
                            <span>•</span>
                            <span>{video.uploadedTime}</span>
                        </div>
                    </div>

                    {/* More Options Button */}
                    <button className="flex-shrink-0 p-1 hover:bg-gray-100 rounded-full">
                        <MoreVertical className="w-5 h-5 text-gray-600" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default VideoCard;
