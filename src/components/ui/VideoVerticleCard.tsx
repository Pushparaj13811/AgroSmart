const VideoVerticleCard = ({ video, onClick }: any) => {
    return (
        <div
            className="flex space-x-2 hover:bg-gray-100 rounded-xl p-2 cursor-pointer"
            onClick={onClick} // Adding the onClick handler here
        >
            {/* Thumbnail Container */}
            <div className="relative flex-shrink-0">
                <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-[180px] h-[100px] rounded-xl object-cover"
                />
                {/* Duration Badge */}
                <span className="absolute bottom-1 right-1 bg-black/80 text-white text-xs px-1 rounded">
                    {video.duration}
                </span>
            </div>

            {/* Video Info Section */}
            <div className="flex-1">
                {/* Title */}
                <h3 className="font-semibold text-sm line-clamp-2">{video.title}</h3>

                {/* Channel Name */}
                <p className="text-sm text-gray-600 mt-1">{video.channelName}</p>

                {/* Views and Upload Time */}
                <div className="text-sm text-gray-600">
                    <p>{video.views} views</p>
                    <p>{video.uploadedTime}</p>
                </div>
            </div>
        </div>
    );
};

export default VideoVerticleCard;
