import { useState, useRef, useEffect } from 'react';
import {
    Play, Pause, Volume2, VolumeX, Maximize,
    SkipBack, SkipForward, Settings
} from 'lucide-react';

interface VideoPlayerProps {
    src: string;
    thumbnail : string;
}

const VideoPlayer = ({ src, thumbnail }: VideoPlayerProps) => {
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const [currentTime, setCurrentTime] = useState<number>(0);
    const [duration, setDuration] = useState<number>(0);
    const [volume, setVolume] = useState<number>(1);
    const [isMuted, setIsMuted] = useState<boolean>(false);
    const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
    const [showControls, setShowControls] = useState<boolean>(true);

    const videoRef = useRef<HTMLVideoElement | null>(null);
    const containerRef = useRef<HTMLDivElement | null>(null);
    const controlsTimeoutRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        const video = videoRef.current;

        const handleTimeUpdate = () => setCurrentTime(video!.currentTime);
        const handleLoadedMetadata = () => setDuration(video!.duration);

        if (video) {
            video.addEventListener('timeupdate', handleTimeUpdate);
            video.addEventListener('loadedmetadata', handleLoadedMetadata);
        }

        return () => {
            if (video) {
                video.removeEventListener('timeupdate', handleTimeUpdate);
                video.removeEventListener('loadedmetadata', handleLoadedMetadata);
            }
        };
    }, []);

    const formatTime = (time: number): string => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    };

    const handlePlayPause = () => {
        if (isPlaying) {
            videoRef.current!.pause();
        } else {
            videoRef.current!.play();
        }
        setIsPlaying(!isPlaying);
    };

    const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newVolume = parseFloat(e.target.value);
        setVolume(newVolume);
        if (videoRef.current) {
            videoRef.current.volume = newVolume;
        }
        setIsMuted(newVolume === 0);
    };

    const handleMuteToggle = () => {
        if (isMuted) {
            if (videoRef.current) {
                videoRef.current.volume = volume;
            }
            setIsMuted(false);
        } else {
            if (videoRef.current) {
                videoRef.current.volume = 0;
            }
            setIsMuted(true);
        }
    };

    const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
        const time = parseFloat(e.target.value);
        if (videoRef.current) {
            videoRef.current.currentTime = time;
        }
        setCurrentTime(time);
    };

    const handleFullscreen = () => {
        if (!document.fullscreenElement) {
            containerRef.current!.requestFullscreen();
            setIsFullscreen(true);
        } else {
            document.exitFullscreen();
            setIsFullscreen(false);
        }
    };

    const handleMouseMove = () => {
        setShowControls(true);
        clearTimeout(controlsTimeoutRef.current!);
        controlsTimeoutRef.current = setTimeout(() => {
            if (isPlaying) {
                setShowControls(false);
            }
        }, 3000);
    };

    return (
        <div
            ref={containerRef}
            className="relative w-full aspect-video bg-black rounded-lg overflow-hidden group"
            onMouseMove={handleMouseMove}
            onMouseLeave={() => isPlaying && setShowControls(false)}
        >
            <video
                ref={videoRef}
                src={src}
                className="w-full h-full"
                onClick={handlePlayPause}
                poster={isPlaying ? "" : thumbnail}
            />

            {/* Custom Controls */}
            <div className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-4 transition-opacity duration-300 ${showControls ? 'opacity-100' : 'opacity-0'}`}>
                {/* Progress Bar */}
                <input
                    type="range"
                    min="0"
                    max={duration || 0}
                    value={currentTime}
                    onChange={handleSeek}
                    className="w-full h-1 mb-4 bg-gray-600 rounded-lg appearance-none cursor-pointer"
                />

                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                        {/* Play/Pause Button */}
                        <button
                            onClick={handlePlayPause}
                            className="text-white hover:text-blue-500 transition-colors"
                        >
                            {isPlaying ? <Pause size={24} /> : <Play size={24} />}
                        </button>

                        {/* Skip Buttons */}
                        <button className="text-white hover:text-blue-500 transition-colors">
                            <SkipBack size={20} />
                        </button>
                        <button className="text-white hover:text-blue-500 transition-colors">
                            <SkipForward size={20} />
                        </button>

                        {/* Volume Controls */}
                        <div className="flex items-center space-x-2">
                            <button
                                onClick={handleMuteToggle}
                                className="text-white hover:text-blue-500 transition-colors"
                            >
                                {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                            </button>
                            <input
                                type="range"
                                min="0"
                                max="1"
                                step="0.1"
                                value={isMuted ? 0 : volume}
                                onChange={handleVolumeChange}
                                className="w-20 h-1 bg-gray-600 rounded-lg appearance-none cursor-pointer"
                            />
                        </div>

                        {/* Time Display */}
                        <div className="text-white text-sm">
                            {formatTime(currentTime)} / {formatTime(duration)}
                        </div>
                    </div>

                    <div className="flex items-center space-x-4">
                        {/* Settings Button */}
                        <button className="text-white hover:text-blue-500 transition-colors">
                            <Settings size={20} />
                        </button>

                        {/* Fullscreen Button */}
                        <button
                            onClick={handleFullscreen}
                            className="text-white hover:text-blue-500 transition-colors"
                        >
                            <Maximize size={20} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VideoPlayer;
