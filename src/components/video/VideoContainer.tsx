import React, { useEffect, useState } from "react";
import VideoPlayer from "./VideoPlayer";

interface VideoContainerProps {
    url: string;
    thumbnail: string;
}

const VideoContainer: React.FC<VideoContainerProps> = ({ url, thumbnail }) => {

    const [videoUrl, setVideoUrl] = useState<string>("");

    useEffect(() => {
        const fetchVideoUrl = async () => {
            try {
                setVideoUrl(url);
            } catch (error) {
                console.error("Failed to fetch video URL:", error);
            }
        };

        fetchVideoUrl();
    }, [url]);

    return <VideoPlayer src={videoUrl} thumbnail={thumbnail} />
};

export default VideoContainer;
