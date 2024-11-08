import { Play } from 'lucide-react'; 

function VideoThumbnail({ thumbnail, title, duration }: { thumbnail: string, title: string, duration: string }) {
    return (
        <div className="relative">
            <img
                src={thumbnail}
                alt={title}
                className="w-full h-48 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition">
                <Play className="h-12 w-12 text-white" />
            </div>
            <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white px-2 py-1 rounded text-sm">
                {duration}
            </div>
        </div>
    );
}

export default VideoThumbnail;
