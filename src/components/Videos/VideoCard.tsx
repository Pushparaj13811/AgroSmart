import VideoThumbnail from "./VideoThumbnail";
import VideoDetails from "./VideoDetails";
import type { Video } from "../../types/types";
function VideoCard({ video }: { video: Video }) {
    return (
        <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
            <VideoThumbnail
                thumbnail={video.thumbnail}
                title={video.title}
                duration={video.duration}
            />
            <VideoDetails
                category={video.category}
                title={video.title}
                description={video.description}
            />
        </div>
    );
}

export default VideoCard;
